import React from 'react'

export default class SavedItems extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		
		}
	}

	render() {
		return (
			<div className="row" data-recipe_id={this.props.recipe_id} data-title={this.props.title} data-url={this.props.url} data-image={this.props.image}>
				<div className="col-md-4">
					<a href={this.props.url}> <img src={this.props.image} alt={this.props.title} /> </a>
				</div>
				<div className="col-md-4">
					<h3>{this.props.title}</h3>
				</div>
				<div className="col-md-4">
					<div className="row">
						// <div className="col-md-12">
						// 	<button onClick={this.saveRecipe} className="btn btn-info">Save Recipe</button>
						// </div>
					</div>		
				</div>
			</div>	
		)
		
	}
}





