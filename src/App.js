import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes"

const API_KEY = "f08843451d8bf01dfa48ba5932bae696";

class App extends Component {
  state = {
  	recipes: []
  }
  getRecipe = async (e) => {
  	const recipeName = e.target.elements.recipeName.value;
  	e.preventDefault();
  	const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);
  	const data = await api_call.json();
  	this.setState({recipes: data.recipes});
  	console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;