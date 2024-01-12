import React, { useState } from 'react';
import { INGREDIENTS, Ingredient } from './constants';
import './App.css';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(30);

  const addIngredient = (ingredient: Ingredient) => {
    setSelectedIngredients((prevState) => [...prevState, { ...ingredient }]);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + ingredient.price);
  };

  const renderIngredients = () => {
    return selectedIngredients.map((selectedIng, index) => (
      <div key={index} className={selectedIng.name}>
      </div>
    ));
  };

  return (
    <div className="mainBox">
      <div className="changeMenu">
        {INGREDIENTS.map((ing) => (
          <div className="ingredientsItem" key={ing.name}>
            <img src={ing.image} alt={ing.name} onClick={() => addIngredient(ing)} />
            <p>{ing.price} KGZ</p>
            <p>{ing.count} Pieces</p>
            <button className="removeBtn">Remove</button>
          </div>
        ))}
      </div>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {renderIngredients()}
        <div className="BreadBottom"></div>
        <p className="totalPrice">Total price: {totalPrice} KGZ</p>
      </div>
    </div>
  );
}

export default App;