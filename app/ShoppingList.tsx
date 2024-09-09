

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ingredient, WeekMeals } from "@/lib/types";
import assert from 'assert';

export const ShoppingList = ({ meals }: { meals: WeekMeals }) => {
  type CheckedItems = Record<string, boolean>;
  type ShoppingList = Record<string, { name: string, quantities: string[] }[]>;
  type IngredientCategories = Record<string, string>;
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
  
  const categories: ShoppingList = {
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

  const ingredientCategories: IngredientCategories = {
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
    "chocolate": "Baki</Carontent>n & Cooking Essentials",
    "granola": "Snacks"
  };

    const parseQuantity = (quantity: string): [number, string] => {
        const match = quantity.match(/^([\d.]+)\s*(.*)$/);
        if (match) {
            return [parseFloat(match[1]), match[2].trim()];
        }
        return [1, quantity]; // Default to 1 if no number is found
    };

  const combineQuantities = (quantities: string[]) => {
    const combinedQuantities: Record<string, number | string[]> = {};
    
    quantities.forEach(quantity => {
      const [value, unit] = parseQuantity(quantity);
      
      if (unit in combinedQuantities) {
        if (unit === '' || /^[gml]$/.test(unit)) { // Numeric units: g, ml, or empty (assumed to be count)
          assert(typeof combinedQuantities[unit] === 'number');
          combinedQuantities[unit] += value;
        } else {
          assert(typeof combinedQuantities[unit] === 'object');
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

  const formatCombinedQuantities = (combinedQuantities: Record<string, number | string[]>) => {
    return Object.entries(combinedQuantities).map(([unit, value]) => {
      if (typeof value === 'number') {
        return `${value}${unit}`;
      } else {
        return value.join(', ');
      }
    });
  };

  const generateShoppingList = () => {
    const ingredients: Record<string, string[]> = {};
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
    const newCheckedItems: CheckedItems = {};
    Object.values(shoppingList).flat().forEach(item => {
      newCheckedItems[item.name] = false;
    });
    setCheckedItems(newCheckedItems);
  }, [meals]);

  const toggleItem = (itemName: string) => {
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
