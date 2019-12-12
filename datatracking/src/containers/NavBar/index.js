import React from 'react'
import Link from 'next/link'
import Helpers from "../../functions/helpers";
import jsHttpCookie from "cookie";
import Router from 'next/router'

class NarBar extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			open: false,
			// language: this.props.Language && this.props.Language === 'en' ? 'en' : 'vi',
			openLanguage: false,
			isShowMenu: false
		}
	}

	_openMenu = (e) => {
		e.preventDefault();
		this.setState({open: !this.state.open})
	};

	_changeLanguage = (e) => (value) => {
		this.setState({language: value})
	};

	_clickRedirect = (value) => (e) => {
		e.preventDefault();
		this.setState({openLanguage: !this.state.openLanguage});
		return Router.push(`/configs/language?prefix=${value}`);
	};


	_openPopupLanguage = (e) => {
		e.preventDefault();
		this.setState({openLanguage: !this.state.openLanguage});
	};

	render() {
		const {Auth, Language ,handleClick} = this.props;

		return (
			<div className="navbar navbar-default header-highlight">
				<div className="navbar-header">
					<a className="navbar-brand" href="/"><img src="/static/img/theme/logo_light.png"/></a>
					<ul className="nav navbar-nav visible-xs-block">
						<li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"/></a></li>
						<li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"/></a></li>
					</ul>
				</div>
				<div className="navbar-collapse collapse" id="navbar-mobile">
					<ul className="nav navbar-nav">
						<li><a onClick={() => handleClick(!this.state.isShowMenu)}
							className="sidebar-control sidebar-main-toggle hidden-xs"><i
							className="icon-paragraph-justify3"/></a>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						{/*<li className={this.state.openLanguage ? "dropdown language-switch open" : "dropdown language-switch"}>*/}
							{/*<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded=""*/}
								 {/*onClick={this._openPopupLanguage}>*/}
								{/*<img src={Language && Language === 'en' ? '/static/img/theme/us.jpg' : '/static/img/theme/vi.jpg'}*/}
										 {/*className="position-left" alt=""/>*/}
								{/*{Language && Language === 'en' ? 'EN' : 'VI'}*/}
								{/*<span className="caret"/>*/}
							{/*</a>*/}

							{/*<ul className="dropdown-menu">*/}
								{/*<li>*/}
									{/*<a onClick={this._clickRedirect('vi')} href="/configs/language?prefix=vi"*/}
										 {/*className="vietnamese">*/}
										{/*<img src="/static/img/theme/vi.jpg" alt=""/> VI</a>*/}
								{/*</li>*/}

								{/*<li>*/}
									{/*<a onClick={this._clickRedirect('en')} href="/configs/language?prefix=en" className="english">*/}
										{/*<img src="/static/img/theme/us.jpg" alt=""/> EN</a>*/}
								{/*</li>*/}
							{/*</ul>*/}
						{/*</li>*/}

						{/*<li className="dropdown">*/}
							{/*<a href="#" className="dropdown-toggle" data-toggle="dropdown">*/}
								{/*<i className="icon-bubbles4"/>*/}
								{/*<span className="visible-xs-inline-block position-right">Messages</span>*/}
								{/*<span className="badge bg-warning-400">2</span>*/}
							{/*</a>*/}
							{/*<div className="dropdown-menu dropdown-content width-350">*/}
								{/*<div className="dropdown-content-heading">*/}
									{/*Messages*/}
									{/*<ul className="icons-list">*/}
										{/*<li><a href="#"><i className="icon-compose"/></a></li>*/}
									{/*</ul>*/}
								{/*</div>*/}
								{/*<ul className="media-list dropdown-content-body">*/}
									{/*<li className="media">*/}
										{/*<div className="media-left">*/}
											{/*<img src="/static/img/theme/placeholder.jpg" className="img-circle img-sm"/>*/}
											{/*<span className="badge bg-danger-400 media-badge">5</span>*/}
										{/*</div>*/}
										{/*<div className="media-body">*/}
											{/*<a href="#" className="media-heading">*/}
												{/*<span className="text-semibold">James Alexander</span>*/}
												{/*<span className="media-annotation pull-right">04:58</span>*/}
											{/*</a>*/}
											{/*<span className="text-muted">who knows, maybe that would be the best thing for me...</span>*/}
										{/*</div>*/}
									{/*</li>*/}
									{/*<li className="media">*/}
										{/*<div className="media-left">*/}
											{/*<img src="/static/img/theme/placeholder.jpg" className="img-circle img-sm"/>*/}
											{/*<span className="badge bg-danger-400 media-badge">4</span>*/}
										{/*</div>*/}
										{/*<div className="media-body">*/}
											{/*<a href="#" className="media-heading">*/}
												{/*<span className="text-semibold">Margo Baker</span>*/}
												{/*<span className="media-annotation pull-right">12:16</span>*/}
											{/*</a>*/}
											{/*<span className="text-muted">That was something he was unable to do because...</span>*/}
										{/*</div>*/}
									{/*</li>*/}
									{/*<li className="media">*/}
										{/*<div className="media-left"><img src="/static/img/theme/placeholder.jpg"*/}
																										 {/*className="img-circle img-sm"*/}
										{/*/>*/}
										{/*</div>*/}
										{/*<div className="media-body">*/}
											{/*<a href="#" className="media-heading">*/}
												{/*<span className="text-semibold">Jeremy Victorino</span>*/}
												{/*<span className="media-annotation pull-right">22:48</span>*/}
											{/*</a>*/}
											{/*<span className="text-muted">But that would be extremely strained and suspicious...</span>*/}
										{/*</div>*/}
									{/*</li>*/}
									{/*<li className="media">*/}
										{/*<div className="media-left"><img src="/static/img/theme/placeholder.jpg"*/}
																										 {/*className="img-circle img-sm"*/}
										{/*/>*/}
										{/*</div>*/}
										{/*<div className="media-body">*/}
											{/*<a href="#" className="media-heading">*/}
												{/*<span className="text-semibold">Beatrix Diaz</span>*/}
												{/*<span className="media-annotation pull-right">Tue</span>*/}
											{/*</a>*/}
											{/*<span className="text-muted">What a strenuous career it is that I've chosen...</span>*/}
										{/*</div>*/}
									{/*</li>*/}
									{/*<li className="media">*/}
										{/*<div className="media-left"><img src="/static/img/theme/placeholder.jpg"*/}
																										 {/*className="img-circle img-sm"*/}
										{/*/>*/}
										{/*</div>*/}
										{/*<div className="media-body">*/}
											{/*<a href="#" className="media-heading">*/}
												{/*<span className="text-semibold">Richard Vango</span>*/}
												{/*<span className="media-annotation pull-right">Mon</span>*/}
											{/*</a>*/}
											{/*<span className="text-muted">Other travelling salesmen live a life of luxury...</span>*/}
										{/*</div>*/}
									{/*</li>*/}
								{/*</ul>*/}
								{/*<div className="dropdown-content-footer">*/}
									{/*<a href="#" data-popup="tooltip" title="All messages"><i className="icon-menu display-block"/></a>*/}
								{/*</div>*/}
							{/*</div>*/}
						{/*</li>*/}
						<li className={`dropdown dropdown-user ${this.state.open ? "open" : ''}`}>
							<a className="dropdown-toggle" data-toggle="dropdown" onClick={this._openMenu}>
								<img src={Auth.thumbnail ? Helpers.getImage(Auth.thumbnail) : '/static/img/theme/placeholder.jpg'}/>
								<span>{Auth.name}</span>
								<i className="caret"/>
							</a>
							<ul className="dropdown-menu dropdown-menu-right">
								{/*<li><a href="#"><i className="icon-user-plus"/> My profile</a></li>*/}
								{/*<li><a href="#"><i className="icon-coins"/> My balance</a></li>*/}
								{/*<li><a href="#"><span className="badge bg-teal-400 pull-right">58</span> <i*/}
								{/*className="icon-comment-discussion"/> Messages</a></li>*/}
								{/*<li className="divider"/>*/}
								{/*<li><a href="#"><i className="icon-cog5"/> Account settings</a></li>*/}
								<li><a href="/logout"><i className="icon-switch2"/> Logout</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default NarBar
