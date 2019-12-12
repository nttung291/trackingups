import React from "react"
import Link from "next/link"
import {menus} from "../../config/index"
import jsHttpCookie from 'cookie';

class Todo extends React.Component {
	constructor() {
		super();
		this.state = {showItems: []}
	}

	onClickMenu = (index) => (e) => {
		e.preventDefault();
		let showItems = this.state.showItems.slice(0);
		showItems[index] = !showItems[index];
		this.setState({showItems});
	};

	render() {
		const {permission} = this.props.Auth;
		return (
			<div className="sidebar sidebar-main">
				<div className="sidebar-content">
					<div className="sidebar-user">
						<div className="category-content">
							<div className="media">
								<Link href="/aboutus">
									<a className="media-left">
										<img src="/static/img/theme/placeholder.jpg" className="img-circle img-sm" alt=""/>
									</a>
								</Link>
								<div className="media-body">
									<span className="media-heading text-semibold">{this.props.Auth.name}</span>
									<div className="text-size-mini text-muted">
										<i className="icon-pin text-size-small"/> &nbsp;{this.props.Auth.description}
									</div>
								</div>

								<div className="media-right media-middle">
									<ul className="icons-list">
										<li>
											<a href="#"><i className="icon-cog3"/></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="sidebar-category sidebar-category-visible">
						<div className="category-content no-padding">
							<ul className="navigation navigation-main navigation-accordion">
								<li className="navigation-header">
									<span>Main</span>
									<i className="icon-menu" title="Main pages"/>
								</li>
								{
									menus.map((menu, index) => {
										if (permission && permission[menu.permission]) {
											return (
												<li key={index} className={menu.url === this.props.activePath ? "active" : ""}>
													<Link prefetch href={menu.url}>
														<a className={menu.sub ? "has-ul" : ""} href={menu.url}
															 onClick={menu.sub ? this.onClickMenu(index) : null}>
															<i className={menu.icon ? menu.icon : "icon-home4"}/>
															<span>{menu.name}</span>
														</a>
													</Link>
													{
														menu.sub && (
															<ul className={this.state.showItems[index] ? "hidden-ul active" : "hidden-ul"}>
																{
																	menu.sub.map((submenu, subindex) => {
																		if (permission && permission[submenu.permission]) {
																			return (
																				<li key={subindex}>
																					<Link prefetch href={submenu.url}>
																						<a href={submenu.url}>{submenu.name}</a>
																					</Link>
																				</li>
																			)
																		}
																	})
																}
															</ul>
														)
													}
												</li>
											)
										}
									})
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Todo
