import React from 'react'


let RecipeItem = props => (

	<div className="container">
		<div className="row">
			<div className="col-6">
				<a href={props.source_url}> <img src={props.image_url} alt={props.title} /> </a>
			</div>
			<div className="col-6">
				<h3>{props.title}</h3>
			</div>
			<div className="col-6">
				<div className="row">
					<div className="col-6">
					<button className="btn btn-info">Save Recipe</button>
						// <h3>{props.save}</h3>
					</div>
				</div>		
			</div>
		</div>	
	</div>
		
)

export default RecipeItem