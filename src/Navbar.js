import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

class Navbar extends Component
{
	render()
	{
		return(
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			  <Link className = "navbar-brand" to = "/dog" >Dog App</Link>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li className="nav-item ">
			        <NavLink className = "nav-link" exact to = "/dog" >Home</NavLink>
			      </li>
			      {this.props.dogs.map(d => (
			      	<li className = "nav-item">
						<NavLink className = "nav-link" exact to = {`/dog/${d.name}`} >{d.name}</NavLink>
			      	</li>
			      	))}
			    </ul>
			   
			  </div>
			</nav>
			);
	}
}

export default Navbar ;