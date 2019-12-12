import 'isomorphic-fetch'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link';
import NavBar from '../containers/NavBar'
import SlideBar from '../containers/SlideBar'
import WrapContent from '../containers/WrapContent'

class AboutUs extends React.Component {


	render() {
		const {stars} = this.props
		console.log(this.props)
		return (
			<div>
				Tesst
			</div>
		)
	}
}

export default AboutUs
