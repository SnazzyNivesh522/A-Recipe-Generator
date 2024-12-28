export default function Ingredients({ingredients}) {
    return (
        <>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredient-list">
                {ingredients.map((ingredient, index) => { return <li key={index}>{ingredient}</li> })}
            </ul>
        </>
    )
}