import 'isomorphic-fetch'
import React from 'react'
import Panel from "../components/Panel";
import DatePicker from 'react-datepicker';
import "./react-datepicker.scss";
import service from "./track/track";
class Index extends React.Component {

	constructor() {
		super();
		this.state = {
			FromDate: new Date(),
			ToDate: new Date(),
			data: null,
			loading: false
		};
		this.handleChangeFromDate = this.handleChangeFromDate.bind(this);
		this.handleChangeToDate = this.handleChangeToDate.bind(this);
		this.getTracking = this.getTracking.bind(this);
	}


	handleChangeFromDate(date) {
		this.setState({
			FromDate: date
		});
	}

	handleChangeToDate(date) {
		this.setState({
			ToDate: date
		});
	}

	getTracking = async (fromDate, toDate) =>  {
		this.setState({
			data: null,
			loading: true
		});
		let data = await service.getCountArticle(fromDate , toDate , this.refs.fromType.value ,
			this.refs.toType.value , this.refs.postCode.value, this.refs.indexType.value);
		this.setState({
			data: data.response,
			loading: false
		});
	};


	render() {
		const Language = 'vi';

		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						TRANG CHỦ
						<Panel title="Bộ Lọc ">
							<div className="row">
								<div className="col-md-2">
									From date
									<DatePicker
										selected={this.state.FromDate}
										onChange={this.handleChangeFromDate}
									/>
								</div>
								<div className="col-md-2">
									To date
									<DatePicker
										selected={this.state.ToDate}
										onChange={this.handleChangeToDate}
									/>
								</div>
								<div className="col-md-2">
									From shipmentType
										<input type="text" className="form-control" ref="fromType"/>
								</div>
								<div className="col-md-2">
									To shipmentType
									<input type="text" className="form-control" ref="toType"/>
								</div>
								<div className="col-md-2">
									Post Code
									<input type="text" className="form-control" ref="postCode"/>
								</div>
								<div className="col-md-1">
									Index
									<input type="text" className="form-control" ref="indexType"/>
								</div>
								<div className="col-md-2">
									<button onClick={() => this.getTracking(this.state.FromDate,this.state.ToDate)}
													type="button" className="btn btn-primary">Get Tracking
									</button>
								</div>
							</div>
						</Panel>
						<Panel title=" ">
							{this.state.loading ? 'Loading ...' : null}
							{this.state.data !== null && this.state.data.length === 0 ? 'No tracking for this date range' : null}
							{
								this.state.data !== null && this.state.data.map((item, index) => {
									return (
										<div className="row" key={index}>
											{index + 1} :   {item.trackingNumber} - {item.packageStatus} - {item.packageStatusTime} {item.packageStatusDate}
										</div>
									)
								})
							}
						</Panel>
					</div>
				</div>
			</div>
		)
	}
}

export default Index
