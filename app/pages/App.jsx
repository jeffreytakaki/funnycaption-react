import React from 'react'
import Nav from './Nav.jsx'
import Food from '../components/Food.jsx'
import RecipeItem from '../components/RecipeItem.jsx'

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			recipes: []
		}

		this.renderRecipeItem = this.renderRecipeItem.bind(this)
		
	}

	renderRecipeItem(recipes) {
		// clear recipes
		this.state = {
			recipes: []
		}

		this.setState({
			recipes: recipes
		})
	}

	render() {
		let recipesitems = this.state.recipes.map((recipe, index) => {
			var setbreak;
			return (
					<RecipeItem 
					key = {index}
					image = {recipe.recipe.image}
					title = {recipe.recipe.label}
					recipe_id = {recipe.recipe.label} 
					url = {recipe.recipe.url}/>
			)
		})
				
		return (
			<div>
				<Food renderRecipeItem={this.renderRecipeItem}/>

				<div className="container">

				{recipesitems}
				</div>	
			</div>
		)
	}



}
