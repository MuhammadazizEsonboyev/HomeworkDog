import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './DogDetails.css';

class DogDetails extends Component
{
	render()
	{
		let { dog } = this.props;

		return(
				
				<div className = "container "> 
					<div className = "DogDetails row justify-content-center ">
						<div className = "col-11 col-md-8 col-lg-4 ">
							<div className = "DogDetails-card card ">
							 <img className = "card-img-top" src={dog.src} alt= {dog.name} />
							 <div className = "card-body"> 
							 	<h4 className = "card-title">{dog.name} 
							 		<span className = "card-subtitle text-muted"> {dog.age} years old</span>
							 	</h4>
							 </div>
							 <ul className = "list-group-flush">
							 {dog.facts.map(f => (<li className = "list-group-item">{f}</li>) )}
							 </ul>
							 <div className = "card-body">
							 	<Link to = "/dog" className = "btn btn-info "  >Go back</Link>
							 </div>
							</div>
						</div>
					</div>
				</div>
			
			);
	}
}

export default DogDetails ;