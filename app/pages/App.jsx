import React from 'react'
import Nav from './Nav.jsx'
import Food from '../components/Food.jsx'
import RecipeItem from '../components/RecipeItem.jsx'
import { Link } from 'react-router'

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			recipes: []
		}
		
	}

	renderRecipeItem(recipe) {
		this.setState({
			recipes: this.state.recipes.concat([recipe])
		})

	}

	render() {
		let recipesitems = this.state.recipes.map((recipe, index) => {
			return (
					<RecipeItem 
					key = {index}
					image_url = {recipe.image_url}
					title = {recipe.title}
					recipe_id = {recipe.recipe_id} 
					source_url = {recipe.source_url}/>
					
			)
		})
		
		
		return (
			<div>
				<Food />
				<RecipeItem />
			</div>
		)
	}



}
