export default function Form({handleSubmit,recipeSection}) {
    return (
        <>
            <form className="add-ingredient-form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    ref={recipeSection}
                    type="text"
                    className="form-control"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button className="btn btn-dark btn-custom">
                    + Add ingredient
                </button>
            </form>
        </>
    )
}