import React from 'react'

// export default class RecipeItems extends React.Component {


// 	const Recipe = ({ recipe }) => (
// 	  <div className="col-md-6">
// 	    { book.name }
// 	  </div>
// 	);

// 	const RecipesRow = ({ bookPair }) => (
// 	  <div className="row">
// 	    {
// 	      bookPair.map((recipe, index) => (
// 	        <Recipe key={ index } name={ recipe }/>
// 	      ))
// 	    }
// 	  </div>
// 	);

// 	const RecipesContainer = ({ recipes }) => (

// 	  <div className="container">
// 	    {
// 	      books.reduce((pairs, book, index) => { // split the books into pairs
// 	        if(index % 2 === 0) {
// 	           pairs.push([]);
// 	        }
// 	        pairs[pairs.length - 1].push(book);
// 	        return pairs;
// 	      }, []).map((pair, index) => ( // map the pairs to row
// 	        <BooksRow key={ index } bookPair={ pair } />
// 	      ))
// 	    }
// 	  </div>
// 	);


// export default RecipeItem


// import React from 'react'

export default class RecipeItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}

	}

	
	render() {
		
		return (
			<div className="row" data-recipe_id={this.props.recipe_id}>
				<div className="col-md-4">
					<a href={this.props.url}> <img src={this.props.image} alt={this.props.title} /> </a>
				</div>
				<div className="col-md-4">
					<h3>{this.props.title}</h3>
				</div>
				<div className="col-md-4">
					<div className="row">
						<div className="col-md-12">
							<button className="btn btn-info">Save Recipe</button>
						</div>
					</div>		
				</div>
			</div>	
		)
	}
}

// export default RecipeItem























// let RecipeItem = props => (

	
// 		<div className="row" data-recipe_id={this.props.recipe_id}>
// 			<div className="col-6">
// 				<a href={this.props.url}> <img src={this.props.image} alt={this.props.title} /> </a>
// 			</div>
// 			<div className="col-6">
// 				<h3>{this.props.title}</h3>
// 			</div>
// 			<div className="col-6">
// 				<div className="row">
// 					<div className="col-6">
// 						<button className="btn btn-info">Save Recipe</button>
// 					</div>
// 				</div>		
// 			</div>
// 		</div>	
	
		
// )

// export default RecipeItem







