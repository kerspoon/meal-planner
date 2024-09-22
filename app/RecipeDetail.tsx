import { getIngredientById, getRecipeById, RecipeIngredient } from "@/lib/db";
import { colorFodmap, fmt2dp } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';

const IngredientDetail = (ingredient: RecipeIngredient) => {
  const info = getIngredientById(ingredient.id);
  if (!info) {
    return <div>Ingredient not found, {ingredient.id}</div>;
  }
  return (
    <tr key={ingredient.id}>
      <td>{fmt2dp(ingredient.quantity)} {ingredient.units}</td>
      <td className={`${colorFodmap(info.fodmap, false)}`} title={info.fodmap_comment}>
        {info.name} 
        {ingredient.details ? `(${ingredient.details})` : ''}
      </td>
    </tr>
  );
};

export const RecipeDetail = ({ id }: { id: number }) => {
  const recipe = getRecipeById(id);

  if (!recipe) {
    return <div>Recipe not found, {id}</div>;
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
