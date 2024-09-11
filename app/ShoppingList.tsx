import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekMeals } from "@/lib/types";
import { generateShoppingList } from '@/lib/RecipeHelpers';

export const ShoppingList = ({ meals }: { meals: WeekMeals }) => {
  type CheckedItems = Record<string, boolean>;
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
  
  const shoppingList = generateShoppingList(meals);

  useEffect(() => {
    // Initialize checkedItems state when shoppingList changes
    const newCheckedItems: CheckedItems = {};
    Object.values(shoppingList).flat().forEach(item => {
      newCheckedItems[item.name] = false;
    });
    setCheckedItems(newCheckedItems);
  }, [meals, shoppingList]);

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
