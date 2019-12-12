import React from 'react'
import PropTypes from "prop-types"
import classNames from 'classnames';
import Link from "next/link"
import "./style.scss"

const IconSpiner = ({isActive}) =>
	isActive ? (
		<div className="panel-spinner"><i className="icon-spinner2 spinner"/></div>
	) : null;


class Panel extends React.Component {
	constructor() {
		super();
		this.state = {
			showBody: true,
			isClose: false
		}
	}

	_collapse = (e) => {
		e.preventDefault();
		this.setState({showBody: !this.state.showBody});
	};

	_close = (e) => {
		e.preventDefault();
		this.setState({isClose: !this.state.isClose});
	};

	render() {
		const panelClass = classNames('panel panel-flat', {
			'panel-hidden': this.state.isClose,
			'panel-collapsed': this.state.showBody,
			'panel-overlay': this.props.isSubmiting,
			'panel-error': this.props.success
		});

		return (
			<div className={panelClass}>
				<IconSpiner isActive={this.props.isSubmiting}/>
				<div className="panel-heading">
					<h5 className="panel-title">{this.props.title}<a className="heading-elements-toggle"><i
						className="icon-more"/></a>
						<span className="total">{this.props.total}</span>
					</h5>
					<div className="heading-elements">
						<ul className="icons-list">
							{this.props.action && this.props.action.map((item, key) => {
								if (item.add) {
									return (
										<li key={key}>
											<Link prefetch href={item.add}>
												<a data-action="add"/>
											</Link>
										</li>
									)
								}
								if (item.restore) {
									return (
										<li key={key}>
											<Link prefetch href={item.restore}>
												<a data-action="restore">
													<i className="icon-trash"/>
												</a>
											</Link>
										</li>
									)
								}
								if (item.list) {
									return (
										<li key={key}>
											<Link prefetch href={item.list}>
												<a data-action="list">
													<i className="icon-stack"/>
												</a>
											</Link>
										</li>
									)
								}
							})}
							{/*<li>*/}
							{/*		<a data-action="restore"><i*/}
							{/*	className="icon-trash"/></a>*/}
							{/*</li>*/}
							{/*<li onClick={this._close}>*/}
								{/*<a data-action="close"/>*/}
							{/*</li>*/}
						</ul>
					</div>
				</div>
				<div className={this.state.showBody ? "panel-body active" : "panel-body"}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

Panel.propTypes = {
	title: PropTypes.string.isRequired
};

Panel.defaultProps = {
	title: "Panel Title"
};

export default Panel
