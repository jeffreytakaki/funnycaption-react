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
		this.saveRecipe = this.saveRecipe.bind(this)
		
	}

	componentWillMount() {
		var config = {
			apiKey: "AIzaSyC1I-eTkRWrTekurEs2tepEMxlaIQUTNkk",
			authDomain: "save-recipe.firebaseapp.com",
			databaseURL: "https://save-recipe.firebaseio.com",
			storageBucket: "save-recipe.appspot.com",
			messagingSenderId: "348011917644"
		};
		firebase.initializeApp(config);
		var database = firebase.database();
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

	saveRecipe(saveObject) {
		// can i refactor this?

		database.ref('save-recipe/').push({
			image: saveObject.image,
			title: saveObject.title,
			url: saveObject.url,
			recipe_id: saveObject.recipe_id,
		});		

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
