
import { mealColors, recipes } from "@/lib/types";

export const RecipeList = () => {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>, recipeId: number) => {
    e.dataTransfer.setData('recipeId', recipeId.toString());
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {recipes.map(recipe => (
            <div
            key={recipe.id}
            draggable
            onDragStart={(e) => onDragStart(e, recipe.id)}
            className={`mb-2 p-2 bg-gray-100 rounded cursor-move ${mealColors[recipe.type]}`}
          >
            {recipe.name}
          </div>
      ))}
    </div>
  );
};
