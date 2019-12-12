import React from 'react';

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: this.props.children[0].props.value,
		};
	}

	_handleChangeTab = (tab) => {
		this.setState({activeTab: tab}, () => {
			this.props.onChange(tab)
		});
	};

	render() {
		return (
			<div className="tabbable">
				<ul className="nav nav-tabs nav-tabs-bottom nav-justified">
					{this.props.children.map((child) => {
						const {label, value, icon} = child.props;
						return (
							<li key={label} className={this.state.activeTab === value ? 'active' : ''}
									onClick={() => this._handleChangeTab(value)}>
								<a>{label}<i className={`${icon} position-right`}/></a>
							</li>
						);
					})}
				</ul>
				<div className="tab-content">
					{this.props.children.map((child) => {
						if (child.props.value !== this.state.activeTab) return undefined;
						return child.props.children;
					})}
				</div>
			</div>
		);
	}
}

export default Tabs;
