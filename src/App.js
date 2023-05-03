// src/App.js
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App () {
  
  const [foodsVar, setFood] = useState(foods);

  const newFood = (newFood) => {
    setFood([newFood, ...foodsVar]);
  }

  const filterFood = (text) => {
    setFood(foods.filter(food => food.name.toLowerCase().includes(text.toLowerCase())));
  }

  const deleteHandler = (foodName)=>{
    setFood(foodsVar.filter(food => food.name !== foodName)); //LIFT STATE UP
  }

  return (
    <div className="App">
      <AddFoodForm newFood={newFood}/>
      <Search filter={filterFood}/>
      <div className='row'>
        {foodsVar.length > 0 ? foodsVar.map((food, k) => (
          <FoodBox key={k} food={food} deleteHandler={deleteHandler}/>
        )) : 
        <p>Ohhps, there is no more content to show</p>}
      </div>
    </div>
  )
}
export default App;
