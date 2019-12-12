import React from 'react'
import _ from "lodash"
import Configs from '../../config';
import t from "../../config/language";
import TextInput from "../../pages/sites/form";
import Label from "../Forms/Input";
import Tabs from "../Tabs";
import LightBox from "../Lightbox"
import $ from "jquery"
import {notify} from "react-notify-toast"
import "./style.scss"
import Record from "../../pages/articles";

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	mouseOver = (e) => {
		console.log(this.inputRef)
	};

	refsIframe = (ref) => {
		this.inputRef = ref;
	};

	render() {
		const {data} = this.props;
		console.log(data)
		return (
			data && (
				<div className="article-campaign-wrapper">
					<div className="row">
						<div className="col-md-12">
							<div className="form-group">
								<label htmlFor="url">
									Bài viết tìm được
								</label>
							</div>
						</div>
						<div className="col-md-12">
							<ul className="article-list">
								{
									data && data.map((item) => (
										<li key={item.id}>
											<a href={item.url} target="_blank">
												{item.title}
											</a>
											<ul className="tags-list">
												{
													item && item.highLight.map((subItem, index) => (
														<li className="label label-success" key={index}>{subItem}</li>
													))
												}
											</ul>
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
			)
		)
	}
}

export default Index
