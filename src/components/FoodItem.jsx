import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div>
      {/* <div className="card" style="width: 18rem;">
      <img className={styles.itemImage} src={food.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button href="#" class="btn btn-primary"
           onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.itemButton}
          view recipe >
           </>
         </div>
      </div> */}

      
      <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
        <div className={styles.itemContent}>
          <p className={styles.itemName}>{food.title}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              console.log(food.id);
              setFoodId(food.id);
            }}
            className={styles.itemButton}
          >
            view recipe
          </button>
        </div>
      </div>
    </div>
  );
}
