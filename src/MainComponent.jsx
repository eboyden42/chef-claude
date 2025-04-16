import { useState } from "react"

export default function MainComponent() {

    const [ingredients, setIngredients] = useState([])
    const ingredientList = ingredients.map((item) => <li key={item}>{item.charAt(0).toUpperCase()+item.slice(1)}</li>)

    function addToList(formData) {
        const ingredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, ingredient])
    }

    return (
        <>
        <main>
            <form action={addToList} className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            { ingredients.length > 0 ?
            <section>
                <div className="ingredient-list">
                    <h2>Ingredients:</h2>
                    <ul>
                        {ingredientList}
                    </ul>
                </div>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section> : null}
        </main>
        </>
    )
}