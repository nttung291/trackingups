import React from 'react'
import {Router, withRouter} from "next/router"
import {Provider} from "react-redux";
import withSaga from "next-redux-saga";
import App, {Container} from "next/app";
import flowRight from 'lodash.flowright'
import withRedux from "next-redux-wrapper";
import Store from "../store";
import AuthService from '../services/auth'
import Configs from '../config'
import NavBar from "../containers/NavBar";
import SlideBar from "../containers/SlideBar";
import Helpers from "../functions/helpers";

const Auth = new AuthService();

class MyApp extends App {

	static async getInitialProps({Component, ctx, router}) {
		const originalUrl = ctx.req && ctx.req.originalUrl ? ctx.req.originalUrl : ctx.asPath;
		if (!Auth.loggedIn(ctx.req) && originalUrl !== Configs.loginPath) {
			if (ctx.req) {
				ctx.res.writeHead(303, {Location: Configs.loginPath});
				ctx.res.end();
			} else {
				Router.replace(Configs.loginPath);
			}
		}

		const currentLanguage = () => {
			if (typeof Helpers.getLanguage(ctx.req) === "undefined") {
				const _language = Helpers.changeLanguage(ctx.req, 'en');
				return _language.language;
			} else {
				return Helpers.getLanguage(ctx.req);
			}
		};
		// if (ctx.req) {
		// 	console.log('server', Auth.getProfile(ctx.req))
		// } else {
		// 	console.log('bower', Auth.getProfile(ctx.req))
		// }

		const currentPathUrl = () => {
			if (ctx.req) {
				return `/${ctx.req.path.split('/')[1]}`;
			} else {
				return originalUrl;
			}
		};

		return {
			pageProps: {
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			},
			isLogin: !!Auth.loggedIn(ctx.req),
			profile: Auth.getProfile(ctx.req),
			language: currentLanguage(),
			path: currentPathUrl()
		};
	}


	handleClickMenu = () => {
		this.setState({showMenu: !this.state.showMenu});
	};


	_changeLanguage = (e) => {
		e.preventDefault();
		this.setState({showMenu: !this.state.showMenu});
	};

	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		}
	}

	render() {
		const {Component, pageProps, store, profile, isLogin} = this.props;
		return (
			<Container>
				<Provider store={store}>
					{
						this.props.isLogin ? (
							<div className={this.state.showMenu ? "" : "sidebar-xs"}>
								<NavBar handleClick={this.handleClickMenu} Auth={this.props.profile} Language={this.props.language}/>
								<div className="page-container" style={{minHeight: ' calc(100vh - 48px)'}}>
									<div className="page-content">
										<SlideBar Auth={this.props.profile} activePath={this.props.path}/>
										<div className="content-wrapper">
											<div className="content">
												<Component {...pageProps} Language={this.props.language} Auth={this.props.profile}/>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							<Component {...pageProps} Language={this.props.language}/>
						)
					}
				</Provider>
			</Container>
		);
	}

}

export default flowRight([withRedux(Store, {debug: false}), withSaga, withRouter])(MyApp);
