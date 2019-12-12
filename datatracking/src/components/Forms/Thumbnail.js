import React from 'react';
import Error from "./Error"
import Label from "./Label"
import Config from '../../config';
import Helpers from '../../functions/helpers';
import LightBox from "../Lightbox"
import "./style.scss"

class Thumbnail extends React.Component {

	constructor() {
		super();
		this.state = {
			showLightBox: false,
		}
	}

	componentDidMount() {
		window.addEventListener("message", this.handleFrameTasks);
	}

	componentWillUnmount() {
		window.removeEventListener("message", this.handleFrameTasks);
	}

	handleFrameTasks = (e) => {
		if (e && e.data && e.data.file && e.data.file.path) {
			this.props.onChange(this.props.id, e.data.file.path)
			this.setState({showLightBox: !this.state.showLightBox})
		}
	}

	_openPopup = () => {
		this.setState({showLightBox: !this.state.showLightBox})
	};

	_overrideClose = () => {
		this.setState({showLightBox: !this.state.showLightBox})
	};

	render() {
		const {id, label, onChange, className, value, error, width, height} = this.props;
		return (
			<div className="form-group">
				<Label htmlFor={id}>
					{label}
				</Label>
				<div className="thumbnail-wrapper form-group" style={{width: width, height: height}}>
					<span className='tw-upload' onClick={this._openPopup}><i className="icon-camera"/></span>
					<img
						id={id}
						className={className}
						src={value ? Helpers.getImage(value, 300) : 'https://www.outbacktoystore.com/c.769029/RTE%20Site/TT_SB2_Files/img/default-img.png'}
						onChange={onChange}
					/>
				</div>
				<Error id={id} error={error}/>
				<LightBox close={this._overrideClose} open={this.state.showLightBox} isWait={false}
									url={`${Config.fileManager}/${id}?accesstoken=xxx`}/>
			</div>
		)
	}
}


export default Thumbnail
