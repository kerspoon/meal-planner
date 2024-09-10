
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mealColors, Recipe, DaysOfWeek, WeekMeals } from "@/lib/types";
import { AutocompleteMeal } from "@/app/AutocompleteMeal";
import { Button } from "@/components/ui/button";
import recipes from '@/lib/recipes';

export const DayPlanner = ({ day, meals, setMeals, onRecipeClick }: { 
  day: DaysOfWeek, 
  meals: WeekMeals, 
  setMeals: React.Dispatch<React.SetStateAction<WeekMeals>> 
  onRecipeClick: (recipeId: number) => void
}) => {
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const recipeId = e.dataTransfer.getData('recipeId');
    const recipe = recipes.find((r: Recipe) => r.id === parseInt(recipeId));
    if (recipe) {
      setMeals((prevMeals: WeekMeals) => ({
        ...prevMeals,
        [day]: [...(prevMeals[day] || []), recipe]
      }));
    }
  };

  const removeMeal = (index: number) => {
    setMeals((prevMeals: WeekMeals) => ({
      ...prevMeals,
      [day]: prevMeals[day]?.filter((_, i: number) => i !== index)
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{day}</CardTitle>
      </CardHeader>
      <CardContent
        onDragOver={onDragOver}
        onDrop={onDrop}
        className="min-h-[200px] border-2 border-dashed border-gray-300 p-4"
      >
        <AutocompleteMeal day={day} meals={meals} setMeals={setMeals} />
        {meals[day]?.map((meal, index: number) => (
          <div key={index} className={`flex justify-between items-center mb-2 mt-2 p-2 rounded cursor-pointer ${mealColors[meal.type]}`} onClick={() => {onRecipeClick(meal.id)}}>
            <span>{meal.name}</span>
            <div>
              <Button variant="ghost" size="sm" onClick={() => removeMeal(index)}>x</Button>
            </div>
          </div>
        ))}
        {(!meals[day] || meals[day].length === 0) && (
          <p className="text-center text-gray-500 mt-2">Or drag and drop meals here</p>
        )}
      </CardContent>
    </Card>
  );
};
