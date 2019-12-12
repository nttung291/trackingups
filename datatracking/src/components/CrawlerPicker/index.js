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

class Index extends React.Component {

	constructor(props) {

		super(props);
		console.log(this.props.value);
		this.state = {
			url: '',
			tabActive: 'category',
			showLightBox: false,
			isClickDom: false,
			isHiddenLightBox: true,
			action: null,
			special: this.props.value[this._convertParam(this.props.value, 2)] || [
				{
					title: '',
					thumbnail: '',
					description: '',
					url: ''
				}
			],
			category: this.props.value[this._convertParam(this.props.value, 0)] || {
				subgroup: '',
				title: '',
				thumbnail: '',
				description: '',
				url: '',
			},
			detail: this.props.value[this._convertParam(this.props.value, 1)] || {
				title: '',
				description: '',
				content: '',
				time: '',
			}
		}
	}

	_overrideClose = () => {
		this.setState({showLightBox: !this.state.showLightBox})
	};
	//
	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps.value);
	// 	console.log(this.props.value)
	// 	console.log(this.props.value[this._convertParam(this.props.value, 0)])
	// 	if (this.props.value !== nextProps.value) {
	// 		this.setState({
	// 			category: this.props.value[this._convertParam(this.props.value, 0)],
	// 		}, () => {
	// 			console.log('this.state',this.state)
	// 		})
	// 	}
	// }

	// _handleChangeData = (_id, _value) => {
	// 	switch (this.state.activeTab) {
	// 		case 'category':
	// 			this.props.onChange(_id, _value)
	// 			break;
	// 		case 'detail':
	// 			break;
	// 	}
	// };

	_convertParam = (_data, index) => {
		if (_data) _data = Object.keys(_data);
		return _data.length > 0 ? _data[index] : 0;
	};

	_handleDetect = (_action) => {
		console.log(_action);
		if (_action.type === 'category' && (_action.key !== 'subgroup' && this.state.category.subgroup === '')) {
			alert('Nhóm tin không được bỏ trống');
			return false;
		}
		if (!this.refs.url.value) return notify.show('Url không được để trống' || Configs.message.defaultError, 'error');
		this.setState({
			url: this.refs.url.value,
			isHiddenLightBox: false
		}, () => {
			this.setState({
				showLightBox: true,
				action: _action
			})
		})
	};

	_handleChangTab = (_action) => {
		this.setState({
			tabActive: _action
		});
	};

	check_element = (type, element) => {
		if (element.is(type)) {
			return true;
		} else {
			if (element.find(type + ':first').is(type)) {
				return element.find(type + ':first').get(0);
			} else {
				if (element.parents().find(type + ':last').is(type)) {
					return element.parents().find(type + ':last').get(0);
				} else {
					return false;
				}
			}
		}
	};


	getPath = (element) => {
		var pathes = [];
		element = $(element);
		element.each(function (index, element) {
			var path, $node = $(element);

			while ($node.length) {
				var realNode = $node.get(0), name = realNode.localName;
				if (!name) {
					break;
				}

				name = name.toLowerCase();
				var parent = $node.parent();
				var sameTagSiblings = parent.children(name);

				if (sameTagSiblings.length > 1) {
					var allSiblings = parent.children();
					var index = allSiblings.index(realNode) + 1;
					if (index > 0) {
						name += ':nth-child(' + index + ')';
					}
				}
				path = name + (path ? ' > ' + path : '');
				$node = parent;
			}

			pathes.push(path);
		});

		return pathes.join(',');
	};


	convertXpathToSelector = (_document, _xpath, isGetItem = false) => {
		const result = _document.evaluate(_xpath, _document, null, 0, null);
		let item = null;
		let col = [];
		while (item = result.iterateNext()) {
			col.push(isGetItem ? item : this.getPath(item));
		}

		return col;
	};


	parents = (node) => {
		let current = node;
		let list = [];
		while (current.parentNode != null && current.parentNode !== document.documentElement && current.parentNode.nodeName !== '#document') {
			list.push(current.parentNode);
			current = current.parentNode;
		}
		return list
	};

	getSelector = (_document, element) => {
		let result = [];
		let isIdentify = false;
		let parents = this.parents(element);
		parents.reverse().push(element);
		parents.reverse().forEach(function (item, index) {
			let name_tag = item.nodeName.toLowerCase();
			let name_node = name_tag;
			if (isIdentify || name_node === 'body' || name_node === 'html') return false;
			if (item.getAttribute('id')) {
				let non_digits = item.getAttribute('id');
				if (non_digits !== " ") {
					name_tag += `#${non_digits}`;
					if (index > 0) isIdentify = true;
				}
			}

			if (item.getAttribute('class')) {
				let className = item.getAttribute('class').trim().replace('  ', ' ').split(' ').slice(0, 1).join('.');
				if (className !== " ") {
					name_tag += `.${className}`;
					if (index > 0) isIdentify = true;
				}
			}
			result.push(name_tag);
		});

		return result.reverse().join(' ');
	};


	loadedIframe = () => {
		console.log('loaded')
		if (!this.inputRef || !this.inputRef.contentDocument) return false;
		// HoangHn - Handle Event Mouse Click
		this.inputRef.contentDocument.body.addEventListener('click', (e) => {
			e.preventDefault();
			// const selector = this.convertXpathToSelector(this.inputRef.contentDocument, '//h1[contains(concat (" ", normalize-space(@class), " "), " title_news_detail ")]');
			// console.log(selector);
			if (this.state.isClickDom && this.state.action !== null) {
				let xpath = this.getSelector(this.inputRef.contentDocument, e.target);
				let currentState = this.state[this.state.action.type];
				// console.log('xpath', xpath);
				// console.log('b currentState', currentState);
				// console.log('this.state', this.state);

				if (this.state.action.type === 'special') {
					currentState[this.state.action.index][this.state.action.key] = xpath;
					// currentState = _.merge(currentState,currentState);
				} else if (this.state.action.type === 'category') {
					if (this.state.action.key !== 'subgroup' && this.state.category.subgroup) {
						// HoangHn - Remove Class Duplicate with Subgroup
						this.state.category.subgroup.split(' ').map((item) => {
							if(xpath.includes(item)) xpath = xpath.replace(item,'').trim();
						});

					}
					currentState = {...currentState, [this.state.action.key]: xpath};
				} else {
					currentState = {...currentState, [this.state.action.key]: xpath};
				}

				// console.log('currentState', currentState);
				// console.log('this.state.action.type', this.state.action.type);
				this.setState({[this.state.action.type]: currentState}, () => {
					this.setState({
						showLightBox: false,
						isClickDom: false,
						action: null,
						isHiddenLightBox: false
					}, () => {
						switch (this.state.tabActive) {
							case 'category':
								this.props.onChange(this._convertParam(this.props.value, 0), this.state.category);
								break;
							case 'special':
								this.props.onChange(this._convertParam(this.props.value, 2), this.state.special);
								break;
							case 'detail':
								this.props.onChange(this._convertParam(this.props.value, 1), this.state.detail);
								break;
						}
					})
				})
			}
		});

		// HoangHn - Handle Event Mouse Selector
		this.inputRef.contentDocument.body.addEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = "#ec22227a";
			this.setState({
				isClickDom: true
			})
		});

		this.inputRef.contentDocument.body.addEventListener('mouseout', (e) => {
			if (this.state.isClickDom) {
				e.target.style.backgroundColor = "transparent";
				this.setState({
					isClickDom: false
				})
			}
		});
	};

	mouseOver = (e) => {
	};

	refsIframe = (ref) => {
		this.inputRef = ref;
	};

	render() {
		const {Language} = this.props;
		return (
			<div className="crawler-wrapper">
				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label htmlFor="url">
								Đường dẫn
							</label>
							<input
								id="url"
								className="form-control"
								type="text" ref="url"
								placeholder="Nhập URL trang web bạn muốn crawler"
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<Tabs onChange={this._handleChangTab}>
							<div className="tab-pane active" label="Chuyên mục" value="category" icon="icon-menu7">
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<label htmlFor="id">
												Class nhóm tin
											</label>
											<div className="input-group">
												<input
													id="subgroup"
													className="form-control"
													type="text"
													value={this.state.category.subgroup}
													onChange={() => {
													}}
													placeholder="Class nhóm bài viết"
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'category', key: 'subgroup'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="title">
												Class tiêu đề
											</label>
											<div className="input-group">
												<input
													id="title"
													className="form-control"
													type="text"
													placeholder="Class tiêu đề bài viết"
													value={this.state.category.title}
													onChange={() => {
													}}
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'category', key: 'title'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="description">
												Class mô tả
											</label>
											<div className="input-group">
												<input
													id="description"
													className="form-control"
													type="text"
													placeholder="Class mô tả bài viết"
													value={this.state.category.description}
													onChange={() => {
													}}
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'category', key: 'description'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="url">
												Class đường dẫn bài viết
											</label>
											<div className="input-group">
												<input
													id="url"
													className="form-control"
													type="text"
													value={this.state.category.url}
													onChange={() => {
													}}
													placeholder="Class đường dẫn bài viết"
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'category', key: 'url'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="thumbnail">
												Class ảnh đại diện
											</label>
											<div className="input-group">
												<input
													id="thumbnail"
													className="form-control"
													type="text"
													value={this.state.category.thumbnail}
													onChange={() => {
													}}
													placeholder="Class ảnh đại diện bài viết"
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'category', key: 'thumbnail'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane" label="Bài chi tiết" value="detail" icon="icon-eyedropper3">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="title">
												Class tiêu đề
											</label>
											<div className="input-group">
												<input
													id="title"
													className="form-control"
													type="text"
													placeholder="Class nhóm bài viết"
													value={this.state.detail.title}
													onChange={() => {
													}}
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'detail', key: 'title'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="description">
												Class mô tả
											</label>
											<div className="input-group">
												<input
													id="description"
													className="form-control"
													type="text"
													placeholder="Class tiêu đề bài viết"
													value={this.state.detail.description}
													onChange={() => {
													}}
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'detail', key: 'description'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="content">
												Class nội dung
											</label>
											<div className="input-group">
												<input
													id="content"
													className="form-control"
													type="text"
													placeholder="Class chứa nội dung bài viết"
													value={this.state.detail.content}
													onChange={() => {
													}}
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'detail', key: 'content'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="time">
												Class giờ xuất bản
											</label>
											<div className="input-group">
												<input
													id="time"
													className="form-control"
													type="text"
													value={this.state.detail.time}
													onChange={() => {
													}}
													placeholder="Class giờ xuất bản bài viết, nếu trống sẽ lấy giờ thời điểm crawler"
												/>
												<span className="input-group-addon"
															onClick={(e) => this._handleDetect({type: 'detail', key: 'time'})}>
													<i className="icon-eye8"/>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane active" label="Đặc biệt" value="special" icon=" icon-puzzle2">
								<div className="row tabs-special">
									<div className="col-md-12">
										<div className="heading-elements">
											<div className="btn-group heading-btn">
														<span className="btn btn-sm"
																	onClick={(e) => {
																		e.preventDefault();
																		this.setState({
																			special: [...this.state.special, {
																				title: '',
																				thumbnail: '',
																				description: '',
																				url: '',
																			}]
																		}, () => {
																			console.log(this.state)
																		})
																	}}>
															<i className="icon-plus2"/>
													</span>
											</div>
										</div>
									</div>
								</div>
								{
									this.state.special && this.state.special.map((item, index) => {
										return (
											<div className="row" key={index}>
												<div className="col-md-12">
													<label>Cấu hình {index + 1}</label>
													<span className="btn btn-sm"
																onClick={(e) => {
																	e.preventDefault();
																	this.state.special.pop(index);
																	this.setState({
																		special: this.state.special
																	})
																}}>
															<i className="icon-subtract"/>
													</span>
												</div>
												{
													item && Object.keys(item).map((subItem, subIndex) => {
														return (
															<div className="col-md-6" key={subIndex}>
																<div className="form-group">
																	<label htmlFor="id">
																		Class {subItem}
																	</label>
																	<div className="input-group">
																		<input
																			id="subgroup"
																			className="form-control"
																			type="text"
																			value={item[subItem]}
																			onChange={() => {
																			}}
																			placeholder="Class nhóm bài viết"
																		/>
																		<span className="input-group-addon"
																					onClick={(e) => this._handleDetect({type: 'special', index, key: subItem})}>
																			<i className="icon-eye8"/>
																		</span>
																	</div>
																</div>
															</div>
														)
													})
												}
											</div>
										)
									})
								}
							</div>
						</Tabs>
					</div>
				</div>

				<LightBox close={this._overrideClose}
									open={this.state.showLightBox}
									loaded={(e) => this.loadedIframe(e)}
									isWait={true}
									isHide={this.state.isHiddenLightBox}
									mouseOver={this.mouseOver} setRef={this.refsIframe}
									url={`${Configs.api}/rewrite?url=${this.state.url}`}/>
			</div>
		)
	}
}

export default Index
