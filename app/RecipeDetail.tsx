import { getIngredientInfo } from "@/lib/foodCategories";
import recipes from "@/lib/recipes";
import { Ingredient } from "@/lib/types";
import { colorFodmap, fmt2dp } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';

const IngredientDetail = (ingredient: Ingredient) => {
  const info = getIngredientInfo(ingredient.name);
  if (!info) {
    return <div>{ingredient.name}</div>;
  }
  return (
    <tr key={ingredient.name}>
      <td>{fmt2dp(ingredient.quantity[1])} {ingredient.quantity[0]}</td>
      <td className={`${colorFodmap(info.fodmapLevel, false)}`} title={info.fodmapNotes}>{ingredient.name}</td>
    </tr>
  );
};

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
              {recipe.ingredients.map(IngredientDetail)}
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
