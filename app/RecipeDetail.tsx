import recipes from "@/lib/recipes";
import ReactMarkdown from 'react-markdown';

export const RecipeDetail = ({ id }: { id: number }) => {
  // get the recipe from the global recipes array
  const recipe = recipes.find(recipe => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{recipe.name}</h2>
      <div className="mb-4">
        {/* <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded" /> */}
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-lg font-bold mb-2">Ingredients</h3>
          <ul>
            <table className="w-full">
              {recipe.ingredients.map(ingredient => (
                <tr key={ingredient.name}>
                  <td>{ingredient.quantity[1]} {ingredient.quantity[0]}</td>
                  <td>{ingredient.name}</td>
                </tr>
              ))}
            </table>
          </ul>
        </div>
        <div className="prose">
          <h3 className="text-lg font-bold mb-2">Instructions</h3>
          {/* Render the instructions as markdown */}
          {<ReactMarkdown>{recipe.instructions}</ReactMarkdown>}
        </div>
      </div>

    </div>
  );

};
