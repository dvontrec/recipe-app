import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import'./RecipeList.css';

class RecipeList extends Component
{
	static defaultProps = {
		recipes : [
			{
				title:"pasta", 
			    ingredients:["flour", "water"],
			    img:"spaghetti.jpeg",
			    instructions:"Whip it bruh, just trust me.  i does this day in and day out."
			},
			{
				title:"pasta", 
			    ingredients:["flour", "water"],
			    img:"spaghetti.jpeg",
			    instructions:"Whip it bruh, just trust me.  i does this day in and day out."
			},
			{
				title:"pasta", 
			    ingredients:["flour", "water"],
			    img:"spaghetti.jpeg",
			    instructions:"Whip it bruh, just trust me.  i does this day in and day out."
			}
		]
	}

	static propTypes = 
	{
		recipes : PropTypes.arrayOf(PropTypes.object).isRequired
	}
	render()
	{
		const recipes = this.props.recipes.map((r, index) => (
			<Recipe key={index} {...r} />
			));

		return (
			<div className="recipe-list">
				{recipes}
			</div>)
		;
	}
}

export default RecipeList;