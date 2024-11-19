import { useEffect, useState } from "react";
import styles from './foodDetails.module.css'
import ItemList from "./ItemList";


export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "89e51ee409e44b48bfe267fbc96de250";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      {/* <div className="card" >
      <img className={styles.recipeImage} src={food.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{food.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="" />
      </div>
      <div className={styles.recipeDetails}>
      <span>
        <strong>{food.readyInMinutes} Minutes</strong>
      </span>
      <span>serves {food.servings}</span>
      <span>{food.vegetarian ? "vegetarian" : "Non-vegetarian"}</span>
      <span><strong>{food.vegan ? "vegan" : ""}</strong></span>
      </div>
      <div>
        ${""}
        <span><strong>{food.pricePerServing / 100} per serving</strong></span>
      </div>

      <h2>Ingredients</h2>
      
      <ItemList food={food} isLoading={isLoading}/>
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>,)
        )}
        </ol>
      </div>
    </div>
  );
}
