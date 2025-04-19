export default function IngredientsList({ ingredientList, toggleRecipeShown }) {
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
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div> : null}
            </section>
        </>
    )
}