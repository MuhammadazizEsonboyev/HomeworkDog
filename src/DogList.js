import React, {Component} from 'react';
import './DogList.css';
import {Link } from 'react-router-dom'

class DogList extends Component
{
	render()
	{
		return(
			<div className = "DogList">
				<h1 className = "display-3">Click a Dog!</h1>
				<div className = "container">
					<div className = "row">
						{this.props.dogs.map(d => 
							<div className = "Dog col-md-4 text-center">
								<img src={d.src} alt={d.name}/>
								<h3>
									<Link className = "underline" exact to = {`/dog/${d.name}`}>{d.name}</Link>
								</h3>
							</div>
							)}
					</div>
				</div>
			</div>
			);
	}
}

export default DogList ;