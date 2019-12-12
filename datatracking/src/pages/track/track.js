import {filterGet, request} from '../../services/request'
import Helpers from '../../functions/helpers'
import moment from 'moment'
import Config from '../../config/index'
import jsHttpCookie from "cookie";

export default {


	getCountArticle: (_fromDate ,_toDate , fromType, toType , postCode ,indexType) => {
		let condition = {locale: "en_US",
			shipmentType: "Package",
			fromType : fromType,
			toType : toType,
			indexType : indexType,
			shipperAccount: "",
			dateRangeFrom: moment(_fromDate).format('MM/DD/YYYY'),
			dateRangeTo: moment(_toDate).format('MM/DD/YYYY'),
			destinationCountry: "us",
			destinationPostalCode: postCode};
		let url = `${Config.api}/track/api/Track/GetTrackByReference?loc=en_US`;
		let options = {
			method: "post",
			body: JSON.stringify(condition)
		};
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		};
		return request(`${Config.api}/api/tracking`, null, {
			method: "post",
			body: JSON.stringify(condition)
		}).then((response) =>{
				return response;
			})
		// return fetch(url, {
		// 	headers,
		// 	...options
		// }).then((response) =>{
		// 	console.log(response);
		// })

	}

}
