import React from 'react';
import Config from '../../config';
import Error from "./Error"
import Label from "./Label"
import GoogleMap from "../GoogleMap"

class MapPicker extends React.Component {

	constructor() {
		super();
	}

	render() {
		const {id, label, onChange, defaultCenter, defaultZoom, isMarkerDrag, polygon, error, height,isAuto} = this.props;
		return (
			<div className="form-group">
				<Label htmlFor={id}>
					{label}
				</Label>
				<GoogleMap
					googleMapURL={Config.google_map_api}
					onChange={onChange}
					defaultCenter={defaultCenter}
					defaultZoom={parseInt(defaultZoom)}
					isMarkerDrag={isMarkerDrag}
					polygon={polygon}
					isAuto={isAuto}
					isMarkerShown
					loadingElement={<div style={{height: `100%`}}/>}
					containerElement={<div style={{height: height}}/>}
					mapElement={<div style={{height: `100%`}}/>}/>
				<Error id={id} error={error}/>
			</div>
		)
	}
}


export default MapPicker
