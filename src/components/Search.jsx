import { useEffect, useState } from "react";
import styles from './Search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "89e51ee409e44b48bfe267fbc96de250";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
      className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
// export default Search;
