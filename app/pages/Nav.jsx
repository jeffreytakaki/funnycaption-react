import React from 'react'
import SignIn from '../components/SignIn.jsx'

export default class Nav extends React.Component {

	constructor(props) {
		super(props)		
		this.handleAuth = this.handleAuth.bind(this);
	}

	handleAuth() {
		console.log('sign in')
	}

	render() {
		return (
			<div>
				<SignIn />
				<button onClick={this.handleAuth}>Sign In</button>
			</div>
		)
	}



}
