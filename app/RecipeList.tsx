
import { getRecipes, Recipe } from '@/lib/db';
import { mealColors } from "@/lib/utils";

export const RecipeList = ({ onRecipeClick }:
  {
    onRecipeClick: (recipeId: number) => void
  }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {getRecipes().map((recipe) => RenderRecipe(recipe, onRecipeClick))}
    </div>
  );
};

const RenderRecipe = (recipe: Recipe, onRecipeClick: (recipeId: number) => void): JSX.Element => {

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, recipeId: number): void => {
    e.dataTransfer.setData('recipeId', recipeId.toString());
  };

  const onClick = (recipeId: number): void => {
    console.log('Recipe clicked', recipeId);
    onRecipeClick(recipeId);
  };

  return (
    <div
      key={recipe.id}
      draggable
      onDragStart={(e) => onDragStart(e, recipe.id)}
      onClick={() => onClick(recipe.id)}
      className={`mb-2 p-2 rounded cursor-move ${mealColors[recipe.category]}`}
    >
      {recipe.name}
    </div>
  )
};
