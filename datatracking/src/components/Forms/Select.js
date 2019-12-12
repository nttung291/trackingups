import React from 'react'
import Error from './Error'
import Label from './Label'
import Select from 'react-select'
import AsyncSelect from 'react-select/lib/Async';
import makeAnimated from 'react-select/lib/animated';
import _ from 'lodash'

class MySelect extends React.Component {

	handleChange = value => {
		this.props.getValue && !this.props.isMulti ?
			this.props.onChange(this.props.id, value.value)
			: this.props.onChange(this.props.id, value);

	};

	render() {
		const {id, options, error, isMulti, placeholder, label, data, selectedValue, async, loadOptions, defaultValue} = this.props;
		return (
			<div className="form-group">
				<Label htmlFor={id} error={error}>
					{label}
				</Label>
				{
					async ? (
						<AsyncSelect
							id={id}
							instanceId={id}
							loadOptions={loadOptions}
							// defaultValue={data && value ? data[_.findIndex(data, (o) => o.value === Number(value))] : null}
							defaultValue={defaultValue}
							isMulti={isMulti}
							onChange={this.handleChange}
							placeholder={placeholder}
							components={makeAnimated()}
							closeMenuOnSelect={false}
						/>
					) : (
						<Select
							id={id}
							instanceId={id}
							options={options}
							isMulti={isMulti}
							onChange={this.handleChange}
							defaultValue={defaultValue}
							placeholder={placeholder}
							components={makeAnimated()}
						/>
					)
				}
				<Error error={error}/>
			</div>
		);
	}
}

export default MySelect
