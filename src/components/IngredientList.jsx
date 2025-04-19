export default function IngredientsList({ ingredients, toggleRecipeShown, recipeShown }) {
    
    const ingredientList = ingredients.map((item) => <li key={item}>{item.charAt(0).toUpperCase()+item.slice(1)}</li>)
    
    return (
        <>
        <section>
                <div className="ingredient-list">
                    <h2>Ingredients:</h2>
                    <ul>
                        {ingredientList}
                    </ul>
                </div>
                { ingredientList.length > 3 ?
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>{recipeShown ? "Clear recipe" :"Get a recipe"}</button>
                </div> : null}
            </section>
        </>
    )
}