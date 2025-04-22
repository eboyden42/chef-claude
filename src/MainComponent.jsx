import { useState, useRef, useEffect } from "react"
import ClaudeRecipe from "./components/ClaudeRecipie"
import IngredientsList from "./components/IngredientList"
import { getRecipeFromChefClaude } from "./ai"

export default function MainComponent() {

    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)
    const [claudeRecipe, setClaudeRecipe] = useState("");
    const scrollToRecipe = useRef(null)
    
    useEffect(() => {
        console.log("running use effect...")
        if (scrollToRecipe.current !== null) {
            scrollToRecipe.current.scrollIntoView()
        }
    }, [claudeRecipe])

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
                <button onClick={clearIngredients} className="clear-ingredients-button">Clear All</button>
            </div>
            { ingredients.length > 0 ? <IngredientsList 
                ingredients={ingredients} 
                toggleRecipeShown={toggleRecipeShown} 
                recipeShown={recipeShown}
                scrollToRecipe={scrollToRecipe}
            /> : null}
            { recipeShown ? <ClaudeRecipe recipe={claudeRecipe} /> : null}
        </main>
        </>
    )
}