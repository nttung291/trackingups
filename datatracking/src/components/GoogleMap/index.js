import React from 'react'
import _ from "lodash"
import {SearchBox} from "react-google-maps/lib/components/places/SearchBox";
import {withScriptjs, withGoogleMap, GoogleMap, Polygon} from "react-google-maps"
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel";
import Configs from '../../config';
import './style.scss'

class Index extends React.Component {

	constructor(props) {
		super(props);
		const {defaultCenter} = this.props;
		let isNaN = defaultCenter && !_.isNaN(defaultCenter.lat) && !_.isNaN(defaultCenter.lng);
		this.state = {
			formatted_address: null,
			center: isNaN ? defaultCenter : Configs.defaultCenter,
			marker: isNaN ? defaultCenter : {lat: 0, lng: 0},
			zoom: isNaN ? this.props.defaultZoom : 5,
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("nextProps", nextProps)
		console.log("this.props", this.props)
		console.log("this.state.center", this.state)
		// if (nextProps.defaultCenter !== this.props.defaultCenter) {
		// 	this.setState({center: nextProps.defaultCenter, marker: nextProps.defaultCenter,zoom: nextProps.zoom})
		// }
		if (this.props.isAuto && (nextProps.defaultZoom !== this.props.defaultZoom)) {
			this.setState({zoom: nextProps.defaultZoom})
		}
	}

	//
	// shouldComponentUpdate(newProps, newState) {
	// 	console.log("newProps", newProps)
	// 	console.log("newState", newState)
	// 	console.log("this.state.center", this.state.center)
	// 	if (newState.center !== this.state.center) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	_setMarker = (e) => {
		const latitude = e.latLng.lat();
		const longtitude = e.latLng.lng();
		this.setState({marker: {lat: latitude, lng: longtitude}});
		this.props.onChange({
			type: 'setMarker',
			value: this.state.marker
		})
	};

	render() {
		console.log(this.state.marker)
		return (
			<GoogleMap
				zoom={this.state.zoom}
				center={this.state.center}
				onClick={this._setMarker}
				onBoundsChanged={() => {
					let data = {
						type: 'onBoundChange',
						value: this.state.marker,
					};
					if (this.props.isAuto) data.formatted_address = this.state.formatted_address;
					this.props.onChange(data)
				}}
				defaultOptions={{
					panControl: false,
					rotateControl: false,
					streetViewControl: false,
					scaleControl: false,
					mapTypeControl: false,
					zoomControl: true
				}}
			>
				<SearchBox
					ref="searchBox"
					controlPosition={google.maps.ControlPosition.TOP_LEFT}
					onPlacesChanged={() => {
						const places = this.refs.searchBox.getPlaces();
						const bounds = new google.maps.LatLngBounds();
						console.log(places[0].formatted_address, bounds);
						places.forEach(place => {
							if (place.geometry.viewport) {
								bounds.union(place.geometry.viewport)
							} else {
								bounds.extend(place.geometry.location)
							}
						});
						const nextMarkers = places.map(place => ({
							position: place.geometry.location,
						}));
						const nextCenter = _.get(nextMarkers, '0.position', {lat: 20.928908, lng: 105.728041});
						this.setState({
							center: {lat: nextCenter.lat(), lng: nextCenter.lng()},
							marker: {lat: nextCenter.lat(), lng: nextCenter.lng()},
							zoom: 15,
							formatted_address: places[0] && places[0].formatted_address ? places[0].formatted_address : null
						})
					}}>
					<input
						type="text"
						placeholder="Nhập địa chỉ"
						className="googlemap-input"
						onKeyDown={(e) => {
							if (e.keyCode === 13) {
								e.preventDefault();
								e.stopPropagation();
							}
						}}
					/>
				</SearchBox>
				{
					this.state.marker && (
						<MarkerWithLabel
							draggable={this.props.isMarkerDrag}
							position={this.state.marker}
							labelAnchor={new google.maps.Point(50, 70)}
							labelStyle={{
								backgroundColor: "white",
								color: "#000",
								borderRadius: "5px",
								fontSize: "13px",
								padding: "5px 10px"
							}}>
							{
								this.state.marker && (
									<div>
										<span>{parseFloat(this.state.marker.lat).toFixed(3)}</span>,
										<span>{parseFloat(this.state.marker.lng).toFixed(3)}</span>
									</div>
								)
							}
						</MarkerWithLabel>
					)
				}
				{
					this.props.polygon && (
						<Polygon
							paths={[].concat(this.props.polygon)}
							options={{
								fillColor: `red`,
								fillOpacity: 0.20,
								strokeColor: `red`,
								strokeOpacity: 1,
								strokeWeight: 1,
							}}
						/>
					)
				}
			</GoogleMap>
		)
	}
}

export default withScriptjs(withGoogleMap(Index))
