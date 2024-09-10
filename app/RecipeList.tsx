
import recipes from "@/lib/recipes";
import { mealColors, Recipe } from "@/lib/types";


export const RecipeList = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {recipes.map(RenderRecipe)}
    </div>
  );
};

const RenderRecipe = (recipe: Recipe) => {

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, recipeId: number) => {
    e.dataTransfer.setData('recipeId', recipeId.toString());
  };

  return (
    <div
      key={recipe.id}
      draggable
      onDragStart={(e) => onDragStart(e, recipe.id)}
      className={`mb-2 p-2 rounded cursor-move ${mealColors[recipe.type]}`}
    >
      {recipe.name}
    </div>
  )
};

