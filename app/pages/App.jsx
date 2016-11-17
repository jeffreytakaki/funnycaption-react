import React from 'react'
import Nav from './Nav.jsx'
import Food from '../components/Food.jsx'
import RecipeItem from '../components/RecipeItem.jsx'
import SavedRecipes from '../components/SavedRecipes.jsx'
import SavedItems from '../components/SavedItems.jsx'


export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			recipes: [],
			user: { 
                uid: '',
                photoURL: '',
                displayName: '',
                email: '',
                savedRecipes: []
            }
		}

		this.renderRecipeItem = this.renderRecipeItem.bind(this)
		this.saveRecipe = this.saveRecipe.bind(this)
	}

	renderRecipeItem(recipes) {
		// clear recipes
		this.state = {
			recipes: [],
			user: { 
                uid: '',
                photoURL: '',
                displayName: '',
                email: '',
                savedRecipes: []
            }
		}

		this.setState({
			recipes: recipes
		})
	}

	saveRecipe(saveObject) {
		let self = this
		let database = this.props.database
		let uid = this.props.user.uid || 'no-authentication'

		// why props not state?
		// if(uid != "no-authentication") {
		this.setState({
			user: {
				savedRecipes: this.state.user.savedRecipes.concat(saveObject)
			}
		})

		database.ref('save-recipe/' + uid).push({
			image: saveObject.image,
			title: saveObject.title,
			url: saveObject.url,
			recipe_id: saveObject.recipe_id,
		})
		// } else {
		// 	alert("Please sign in before added recipes!")
		// }		

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
					url = {recipe.recipe.url}
					saveRecipe={this.saveRecipe}/>
			)
		})

		let saveditems = this.props.user.savedRecipes.map((recipe, index) => {
			var setbreak ="";
			return (
					<SavedItems 
					key = {index}
					image = {recipe.image}
					title = {recipe.label}
					recipe_id = {recipe.label} 
					url = {recipe.url}
					saveRecipe={this.saveRecipe}/>
			)
		})


				
		return (
			
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							<Food renderRecipeItem={this.renderRecipeItem}/>
							<div className="container">
								{recipesitems}
							</div>	
						</div>
						<div className="col-md-3">
							{saveditems}
						</div>	
					</div>	
				</div>	
			
		)
	}



}
