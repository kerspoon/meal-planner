'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const mealTypes = ['breakfast', 'lunch', 'dinner', 'dessert'];

const mealColors = {
  breakfast: 'bg-yellow-200',
  lunch: 'bg-green-200',
  dinner: 'bg-blue-200',
  dessert: 'bg-purple-200'
};

const recipes = [
  { id: 1, name: 'Oatmeal', type: 'breakfast', ingredients: [{ name: 'Oats', quantity: '1 cup' }, { name: 'Milk', quantity: '1 cup' }, { name: 'Banana', quantity: '1' }] },
  { id: 2, name: 'Avocado Toast', type: 'breakfast', ingredients: [{ name: 'Bread', quantity: '2 slices' }, { name: 'Avocado', quantity: '1' }, { name: 'Eggs', quantity: '2' }] },
  { id: 3, name: 'Chicken Salad', type: 'lunch', ingredients: [{ name: 'Chicken', quantity: '200g' }, { name: 'Lettuce', quantity: '1 cup' }, { name: 'Tomato', quantity: '1' }, { name: 'Cucumber', quantity: '1/2' }] },
  { id: 4, name: 'Veggie Wrap', type: 'lunch', ingredients: [{ name: 'Tortilla', quantity: '1' }, { name: 'Hummus', quantity: '2 tbsp' }, { name: 'Mixed Vegetables', quantity: '1 cup' }] },
  { id: 5, name: 'Spaghetti Bolognese', type: 'dinner', ingredients: [{ name: 'Spaghetti', quantity: '200g' }, { name: 'Ground Beef', quantity: '300g' }, { name: 'Tomato Sauce', quantity: '1 cup' }] },
  { id: 6, name: 'Grilled Salmon', type: 'dinner', ingredients: [{ name: 'Salmon Fillet', quantity: '200g' }, { name: 'Lemon', quantity: '1' }, { name: 'Asparagus', quantity: '1 bunch' }] },
  { id: 7, name: 'Fruit Parfait', type: 'dessert', ingredients: [{ name: 'Yogurt', quantity: '1 cup' }, { name: 'Mixed Berries', quantity: '1 cup' }, { name: 'Granola', quantity: '1/4 cup' }] },
  { id: 8, name: 'Chocolate Mousse', type: 'dessert', ingredients: [{ name: 'Dark Chocolate', quantity: '100g' }, { name: 'Heavy Cream', quantity: '1 cup' }, { name: 'Eggs', quantity: '2' }] },
];

enum DaysOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}
const daysOfWeek = Object.values(DaysOfWeek);

const AutocompleteMeal = ({ day, meals, setMeals }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      const filteredSuggestions = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const addMeal = (recipe) => {
    setMeals(prevMeals => ({
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

const DayPlanner = ({ day, meals, setMeals }) => {
  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const recipeId = e.dataTransfer.getData('recipeId');
    const recipe = recipes.find(r => r.id === parseInt(recipeId));
    if (recipe) {
      setMeals(prevMeals => ({
        ...prevMeals,
        [day]: [...(prevMeals[day] || []), recipe]
      }));
    }
  };

  const removeMeal = (index) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [day]: prevMeals[day].filter((_, i) => i !== index)
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
        {meals[day]?.map((meal, index) => (
          <div key={index} className={`flex justify-between items-center mb-2 mt-2 p-2 bg-gray-100 rounded ${mealColors[meal.type]}`}>
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

const RecipeList = () => {
  const onDragStart = (e, recipeId) => {
    e.dataTransfer.setData('recipeId', recipeId);
  };

  return (
    <Tabs defaultValue="breakfast">
      <TabsList>
        {mealTypes.map(type => (
          <TabsTrigger key={type} value={type}>{type}</TabsTrigger>
        ))}
      </TabsList>
      {mealTypes.map(type => (
        <TabsContent key={type} value={type}>
          {recipes.filter(recipe => recipe.type === type).map(recipe => (
            <div
              key={recipe.id}
              draggable
              onDragStart={(e) => onDragStart(e, recipe.id)}
              className={`mb-2 p-2 bg-gray-100 rounded cursor-move ${mealColors[recipe.type]}`}
            >
              {recipe.name}
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

const ShoppingList = ({ meals }) => {
  const [checkedItems, setCheckedItems] = useState({});
  
  const categories = {
    "Fruits & Vegetables": [],
    "Meat & Fish": [],
    "Dairy & Eggs": [],
    "Grains & Pasta": [],
    "Canned & Jarred Goods": [],
    "Spices & Seasonings": [],
    "Baking & Cooking Essentials": [],
    "Frozen Foods": [],
    "Snacks": [],
    "Miscellaneous": []
  };

  const ingredientCategories = {
    "banana": "Fruits & Vegetables",
    "lettuce": "Fruits & Vegetables",
    "tomato": "Fruits & Vegetables",
    "avocado": "Fruits & Vegetables",
    "cucumber": "Fruits & Vegetables",
    "lemon": "Fruits & Vegetables",
    "asparagus": "Fruits & Vegetables",
    "berries": "Fruits & Vegetables",
    "chicken": "Meat & Fish",
    "salmon": "Meat & Fish",
    "beef": "Meat & Fish",
    "milk": "Dairy & Eggs",
    "yogurt": "Dairy & Eggs",
    "eggs": "Dairy & Eggs",
    "cream": "Dairy & Eggs",
    "oats": "Grains & Pasta",
    "bread": "Grains & Pasta",
    "tortilla": "Grains & Pasta",
    "spaghetti": "Grains & Pasta",
    "tomato sauce": "Canned & Jarred Goods",
    "hummus": "Canned & Jarred Goods",
    "salt": "Spices & Seasonings",
    "pepper": "Spices & Seasonings",
    "olive oil": "Baking & Cooking Essentials",
    "flour": "Baking & Cooking Essentials",
    "chocolate": "Baking & Cooking Essentials",
    "granola": "Snacks"
  };

  const parseQuantity = (quantity) => {
    const match = quantity.match(/^([\d.]+)\s*(.*)$/);
    if (match) {
      return [parseFloat(match[1]), match[2].trim()];
    }
    return [1, quantity]; // Default to 1 if no number is found
  };

  const combineQuantities = (quantities) => {
    const combinedQuantities = {};
    
    quantities.forEach(quantity => {
      const [value, unit] = parseQuantity(quantity);
      
      if (unit in combinedQuantities) {
        if (unit === '' || /^[gml]$/.test(unit)) { // Numeric units: g, ml, or empty (assumed to be count)
          combinedQuantities[unit] += value;
        } else {
          combinedQuantities[unit].push(quantity);
        }
      } else {
        if (unit === '' || /^[gml]$/.test(unit)) {
          combinedQuantities[unit] = value;
        } else {
          combinedQuantities[unit] = [quantity];
        }
      }
    });
    
    return combinedQuantities;
  };

  const formatCombinedQuantities = (combinedQuantities) => {
    return Object.entries(combinedQuantities).map(([unit, value]) => {
      if (typeof value === 'number') {
        return `${value}${unit}`;
      } else {
        return value.join(', ');
      }
    });
  };

  const generateShoppingList = () => {
    const ingredients = {};
    Object.values(meals).flat().forEach(meal => {
      meal.ingredients.forEach(ing => {
        if (ingredients[ing.name]) {
          ingredients[ing.name].push(ing.quantity);
        } else {
          ingredients[ing.name] = [ing.quantity];
        }
      });
    });
    
    Object.entries(ingredients).forEach(([name, quantities]) => {
      const combined = combineQuantities(quantities);
      const formattedQuantities = formatCombinedQuantities(combined);
      const category = ingredientCategories[name.toLowerCase()] || "Miscellaneous";
      categories[category].push({ name, quantities: formattedQuantities });
    });

    return categories;
  };

  const shoppingList = generateShoppingList();

  useEffect(() => {
    // Initialize checkedItems state when shoppingList changes
    const newCheckedItems = {};
    Object.values(shoppingList).flat().forEach(item => {
      newCheckedItems[item.name] = false;
    });
    setCheckedItems(newCheckedItems);
  }, [meals]);

  const toggleItem = (itemName) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shopping List</CardTitle>
      </CardHeader>
      <CardContent>
        {Object.entries(shoppingList).map(([category, items]) => (
          items.length > 0 && (
            <div key={category} className="mb-4">
              <h3 className="font-bold text-lg mb-2">{category}</h3>
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-start mb-2 pb-2 border-b cursor-pointer"
                  onClick={() => toggleItem(item.name)}
                >
                  <span className={`font-medium ${checkedItems[item.name] ? 'line-through text-gray-400' : ''}`}>
                    {item.name}
                  </span>
                  <div className="text-right">
                    {item.quantities.map((qty, i) => (
                      <div key={i} className={`text-sm ${checkedItems[item.name] ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                        {qty}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        ))}
      </CardContent>
    </Card>
  );
};

const ComprehensiveMealPlanner = () => {
  const [meals, setMeals] = useState({});

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comprehensive Meal Planner</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recipe List</CardTitle>
            </CardHeader>
            <CardContent>
              <RecipeList />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {daysOfWeek.map(day => (
              <DayPlanner key={day} day={day} meals={meals} setMeals={setMeals} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <ShoppingList meals={meals} />
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveMealPlanner;