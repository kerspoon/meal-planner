
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DaysOfWeek, WeekMeals, getRecipeById } from "@/lib/db";
import { AutocompleteMeal } from "@/app/AutocompleteMeal";
import { Button } from "@/components/ui/button";
import { mealColors } from '@/lib/utils';

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
    const recipe = getRecipeById(parseInt(recipeId));
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
        <div style={{display:'block'}}>
          <CardTitle className='float-left'>{day}</CardTitle>
          <Button className="float-right" variant="ghost" size="sm" onClick={() => setMeals((prevMeals: WeekMeals) => ({ ...prevMeals, [day]: [] }))}>x</Button>
        </div>
      </CardHeader>
      <CardContent
        onDragOver={onDragOver}
        onDrop={onDrop}
        className="min-h-[200px] border-2 border-dashed border-gray-300 p-4"
      >
        <AutocompleteMeal day={day} setMeals={setMeals} />
        {meals[day]?.map((meal, index: number) => (
          <div key={index} className={`flex justify-between items-center mb-2 mt-2 p-2 rounded cursor-pointer ${mealColors[meal.category]}`} onClick={() => {onRecipeClick(meal.id)}}>
            <span>{meal.name}</span>
            <div>
              <Button variant="ghost" size="sm" onClick={(e) => {
                e.stopPropagation();
                removeMeal(index);
              }}>x</Button>
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
