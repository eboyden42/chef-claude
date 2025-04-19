import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipie"
import IngredientsList from "./IngredientList"

export default function MainComponent() {

    /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */

    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    const ingredientList = ingredients.map((item) => <li key={item}>{item.charAt(0).toUpperCase()+item.slice(1)}</li>)

    function addToList(formData) {
        const ingredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, ingredient])
    }

    function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
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
            { ingredients.length > 0 ? <IngredientsList ingredientList={ingredientList} toggleRecipeShown={toggleRecipeShown} /> : null}
            { recipeShown ? <ClaudeRecipe /> : null}
        </main>
        </>
    )
}