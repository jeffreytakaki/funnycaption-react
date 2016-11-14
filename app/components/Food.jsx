import React from 'react'
import Request from 'superagent'


export default class Food extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			ingredients: ''
		}
		this.getRecipe = this.getRecipe.bind(this)
		this.saveIngredients = this.saveIngredients.bind(this)
	}

	getRecipe(event) {
		var self = this;
		let getIngredient = event.target.value
		Request
		.get('http://food2fork.com/api/search')
		.query({ key: 'c03f17a97f23f8bb2f7004fb5fd2e3db' })
		.query({ q: getIngredient})
		.end(function(err, res){
			console.log(res)
			var recipes = JSON.parse(res.text)
			self.saveIngredients(recipes)
			console.log(recipes)
		});
	}

	saveIngredients(event) {
		this.setState({
			ingredients: event.target.value
		})

		let recipes = {
			ingredients: this.state.ingredients
		}

		this.props.renderRecipeItem(recipes)
	}

	render() {
		
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						{this.state.ingredients}<input onChange={this.saveIngredients} value={this.state.ingredients}/>
					</div>
					<div className="col-6">
						<button className="btn btn-primary" onClick={this.getRecipe}>Log Recipe</button>
					</div>
				</div>
			</div>
		)
		
	}



}