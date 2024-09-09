
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { WeekMeals, Recipe, DaysOfWeek, recipes} from "@/lib/types";

type AutocompleteMealProps = {
    day: DaysOfWeek;
    meals: WeekMeals;
    setMeals: React.Dispatch<React.SetStateAction<WeekMeals>>;
  };

export const AutocompleteMeal = ({ day, meals, setMeals }: AutocompleteMealProps) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      const filteredSuggestions = recipes.filter((recipe: Recipe) =>
        recipe.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const addMeal = (recipe: Recipe) => {
    setMeals((prevMeals: WeekMeals) => ({
      ...prevMeals,
      [day]: [...(prevMeals[day] || []), recipe]
    }));
    setInput('');
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search meals..."
        value={input}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-60 overflow-auto">
          {suggestions.map(recipe => (
            <li
              key={recipe.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => addMeal(recipe)}
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};