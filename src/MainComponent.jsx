import { useState } from "react"
import ClaudeRecipe from "./components/ClaudeRecipie"
import IngredientsList from "./components/IngredientList"
import { getRecipeFromChefClaude } from "./ai"

export default function MainComponent() {

    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)
    const [claudeRecipe, setClaudeRecipe] = useState("");

    function addToList(formData) {
        const ingredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, ingredient])
    }

    async function toggleRecipeShown() {
        if (!recipeShown) {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
            setClaudeRecipe(recipeMarkdown)
        }
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }

    function clearIngredients() {
        setIngredients([])
        setRecipeShown(false)
    }

    return (
        <>
        <main>
            <div className="form-container">
                <form action={addToList} className="add-ingredient-form">
                    <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    />
                    <button>Add ingredient</button>
                </form>
                <button onClick={clearIngredients} className="clear-ingredients-button">Clear Ingredients</button>
            </div>
            { ingredients.length > 0 ? <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} recipeShown={recipeShown} /> : null}
            { recipeShown ? <ClaudeRecipe recipe={claudeRecipe} /> : null}
        </main>
        </>
    )
}