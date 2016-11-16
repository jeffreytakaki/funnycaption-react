import React from 'react'
import SignIn from '../components/SignIn.jsx'

export default class Nav extends React.Component {

	constructor(props) {
		super(props)		
	}

	render() {
		return (
			<header>
				<div className="container">
					<div className="row">
						<div className="col-md-3">Food List</div>
						<div className="col-md-3"></div>
						<div className="col-md-3"></div>
						<div className="col-md-3"><SignIn /></div>
					</div>
				
				</div>
			</header>
		)
	}



}
