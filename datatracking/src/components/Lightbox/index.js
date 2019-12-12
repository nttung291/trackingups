import React from 'react'
import classNames from 'classnames'
import Loading from '../Loading'
import "./style.scss"

class LightBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.url !== nextProps.url) {
			this.setState({isLoading: true})
		}
	}

	render() {
		const lightboxClass = classNames('lb-wrapper', {
			'active': this.props.open,
		});

		const loadingClass = classNames('lbwcc-load', {
			'active': this.state.isLoading,
		});

		return (
			<div>
				{
					this.props.open && (
						<div className={lightboxClass}>
							<span className="lbw-overlay"/>
							<span className="lbw-close" onClick={this.props.close}><i className="icon-close2"/></span>
							<div className="lbw-content">
								<div className="lbwc-header">
								</div>
								<div className="lbwc-content">
									<div className="lbwcc">
										{
											this.props.isWait && (
												<span className={loadingClass}>
										<Loading/>
									</span>
											)
										}
										{
											!this.props.isHide && (
												<iframe width="100%" height="800px" frameBorder="0" allowFullScreen=""
																onLoad={() => {
																	if (typeof this.props.loaded === "function") {
																		setTimeout(() => {
																			this.setState({
																				isLoading: false
																			}, () => {
																				return this.props.loaded();
																			})
																		}, 500)
																	}
																}}
																onMouseOver={this.props.mouseOver}
																ref={this.props.setRef}
																src={this.props.url}
												/>
											)
										}
									</div>
								</div>
							</div>
						</div>
					)
				}

			</div>
		)
	}
}

// position: absolute; background: #2d2d2d url(https://www.yesgo.vn/resources/v4/images/loader.gif) no-repeat center center; z-index: 1; top: 0; bottom: 0; left: 0; right: 0;

export default LightBox
