export default function GetRecipe({getRecipe,recipeSection}) {
    return (
        <>
            <div className="get-recipe-container">
                <div ref={recipeSection}>
                    <h3>Read for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button type="button" className="btn btn-primary" onClick={getRecipe}>Get a Recipe</button>
            </div>
        </>
    )
}