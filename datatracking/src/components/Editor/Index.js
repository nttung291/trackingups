import React from 'react'
import dynamic from 'next/dynamic'
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/js/languages/vi';
import './froala_style.min.scss';
import Configs from '../../config'
import Error from '../Forms/Error'
import Label from '../Forms/Label'
import './froala_editor.pkgd.min.scss';

const FroalaEditor = dynamic(import('react-froala-wysiwyg'), {
	ssr: false
});
class Editor extends React.Component {

	handleChange = value => {
		console.log(value)
		this.props.onChange(this.props.id, value)

	};

	render() {
		const {id, label, error, value} = this.props;

		return (
			<div className="form-group">
				<Label htmlFor={id} error={error}>
					{label}
				</Label>
				<FroalaEditor
					tag='textarea'
					id={id}
					config={Configs.editor}
					model={value}
					onModelChange={this.handleChange}/>
				<Error error={error}/>
			</div>
		);
	}
}

export default Editor
