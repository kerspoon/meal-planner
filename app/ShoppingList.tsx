import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekMeals, IngredientCategory, FODMAPLevel } from '@/lib/db';
import { generateShoppingList } from '@/lib/RecipeHelpers';
import { colorFodmap } from '@/lib/utils';

export const ShoppingList = ({ meals }: { meals: WeekMeals }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const shoppingList = useMemo(() => generateShoppingList(meals), [meals]);

  const toggleItem = (itemName: string) => {
    setCheckedItems(prev => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  const groupedItems = useMemo(() => {
    const grouped: { [key in IngredientCategory]?: typeof shoppingList } = {};
    for (const item of shoppingList) {
      if (!grouped[item.category as IngredientCategory]) {
        grouped[item.category as IngredientCategory] = [];
      }
      grouped[item.category as IngredientCategory]!.push(item);
    }
    return grouped;
  }, [shoppingList]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shopping List</CardTitle>
      </CardHeader>
      <CardContent>
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-4">
              <h3 className="font-bold text-lg mb-2">{category}</h3>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start mb-2 pb-2 border-b cursor-pointer"
                  onClick={() => toggleItem(item.ingredient.name)}
                  title={item.ingredient.fodmap_comment}
                >
                  <span
                    className={`font-medium ${colorFodmap(item.ingredient.fodmap, checkedItems[item.ingredient.name])} ${
                      checkedItems[item.ingredient.name] ? 'line-through' : ''
                    }`}
                  >
                    {item.ingredient.name}
                  </span>
                  <div className="text-right">
                    <div
                      className={`text-sm ${
                        checkedItems[item.ingredient.name] ? 'line-through text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {item.quantity} {item.units}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        ))}
      </CardContent>
    </Card>
  );
};
