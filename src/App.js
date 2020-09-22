import React, { useEffect,  useState } from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () => {

  const APP_ID = 'a7363d21';
  const APP_KEY = 'a9c831dd05c75e58992dc660ff771f8d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');




  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <h1 className='site-header'>Recepies</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Search for recipe..."></input>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipesList">
        {recipes.length <= 0 ? <h1>No Results were found</h1> : recipes.map((recipe, index) => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  )
}

export default App;
