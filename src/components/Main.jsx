import { useState, useRef, useEffect } from "react";
import Form from "./Form";
import GetRecipe from "./GetRecipe";
import Ingredients from "./Ingredients";
// import SampleRecipe from "./SampleRecipe";
import { getRecipeFromClaude, getRecipeFromMistral } from "../ai";
import Recipe from "./Recipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

  console.log(recipeSection);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current != null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]
  );
  async function getRecipe() {
    const generatedRecipeMarkdown = await getRecipeFromClaude(ingredients);
    // const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipeMarkdown);
    console.log(generatedRecipeMarkdown);

  }


  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get('ingredient');
    if (!ingredient) return;
    const formInputElement = document.querySelector('.form-control');
    formInputElement.value = '';
    setIngredients([...ingredients, ingredient]);

  }
  return (
    <main>
      <Form handleSubmit={handleSubmit} />
      {ingredients.length > 0 && <section>
        <Ingredients ingredients={ingredients} />
        {ingredients.length > 3 && <GetRecipe getRecipe={getRecipe} recipeSection={recipeSection} />}
        {/* {recipe && <SampleRecipe />} */}
        {recipe && <Recipe recipe={recipe} />}
      </section>}
    </main>
  );
};
// <main>
//   <form className="add-ingredient-form" onSubmit={(e) => handleSubmit(e)}>
//     <input
//       type="text"
//       className="form-control"
//       placeholder="e.g. oregano"
//       aria-label="Add Ingredient"
//       name="ingredient"
//     />
//     <button onClick={() => console.log("Clicked")} className="btn btn-dark btn-custom" type="button">
//       + Add ingredient
//     </button>
//   </form>
//   <section>
//     <h2>Ingredients on hand:</h2>
//     <ul className="ingredient-list">
//       {ingredients.map((ingredient, index) => { return <li key={index}>{ingredient}</li> })}
//     </ul>
//     <div className="get-recipe-container">
//       <div>
//         <h3>Read for a recipe?</h3>
//         <p>Generate a recipe from your list of ingredients.</p>
//       </div>
//       <button type="button" class="btn btn-primary">Get a Recipe</button>
//     </div>
//   </section>
// </main>


