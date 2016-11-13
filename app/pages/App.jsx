import React from 'react'
import Nav from './Nav.jsx'
import Instagram from '../components/Instagram.jsx'
import { Link } from 'react-router'

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			users: []
		}
		
	}

	render() {
		
		
		return (
			<div>
				<Instagram />
				
				
				<p> Hello from App! </p>
			</div>
		)
	}



}
