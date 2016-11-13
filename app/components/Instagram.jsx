import React from 'react'
import Fetch from 'whatwg-fetch'

export default class Instagram extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			photo: ''

		}



		fetch('https://api.instagram.com/oauth/authorize/?client_id=fc73027687a140a1b33dc906183889cb&redirect_uri=http://funnycaption.herokuapp.com&response_type=token')
		.then(function(response) {
			console.log(response)
			return response.json()
		}).then(function(json) {
			console.log('parsed json', json)
		}).catch(function(error) {
			console.log('parsing failed', error)
		})

		
		// instagram api here
	}

	getPhoto() {


	}

    


	render() {
		
		return (
			<div>
				<img src={this.state} width="100" height="60"/>
			</div>
		)
		
	}



}