import React, {Component} from 'react';

import {Route, Switch,Link, Redirect} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

class Router extends Component
{
	render()
	{
		 const getDog = props => {
	      let name = props.match.params.name;
	      let currDog = this.props.dogs.find(dog => 
	          dog.name.toLowerCase() === name.toLowerCase() );	
	      return <DogDetails  {...props} dog = {currDog} />
	  }

		return(
			 <Switch>
		        <Route  exact path = "/dog" render = { () => <DogList  dogs = {this.props.dogs } /> } />
		        <Route path = "/dog/:name" render = { getDog } />
		        <Redirect to = "/dog" />
		      </Switch>	
			);
	}
}

export default Router ;