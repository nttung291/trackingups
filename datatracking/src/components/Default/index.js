import React from 'react'
import NavBar from '../../containers/NavBar/index'
import SlideBar from '../../containers/SlideBar/index'
import AuthService from "../../services/auth";
import Helpers from "../../functions/helpers";

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			auth: {}
		}
	}

	componentDidMount() {
		const Auth = new AuthService();
		if (Auth.loggedIn()) {
			this.setState({auth: Auth.getProfile()})
		}
	}


	handleClickMenu = (e) => {
		e.preventDefault();
		this.setState({showMenu: !this.state.showMenu});
	};

	render() {
		return (
			<div className={this.state.showMenu ? "" : "sidebar-xs"}>
				<NavBar handleClick={this.handleClickMenu} Auth={this.state.auth}/>
				<div className="page-container" style={{minHeight: ' calc(100vh - 48px)'}}>
					<div className="page-content">
						<SlideBar Auth={this.state.auth}/>
						<div className="content-wrapper">
							<div className="content">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Index
