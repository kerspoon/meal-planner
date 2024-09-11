import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekMeals } from "@/lib/types";
import { generateShoppingList } from '@/lib/RecipeHelpers';
import { colorFodmap, useLocalStorage } from '@/lib/utils';

export const ShoppingList = ({ meals }: { meals: WeekMeals }) => {
  type CheckedItems = Record<string, boolean>;
  const [checkedItems, setCheckedItems] = useLocalStorage<CheckedItems>("checkedItems",{});
  
  const shoppingList = generateShoppingList(meals);

  useEffect(() => {
    // Initialize checkedItems state when meals changes
    const newCheckedItems: CheckedItems = {};
    Object.values(generateShoppingList(meals)).flat().forEach(item => {
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
                  title={item.fodmapNotes}
                >
                  <span 
                  className={`font-medium ${colorFodmap(item.fodmapLevel, checkedItems[item.name])} ${checkedItems[item.name] ? 'line-through' : ''}`}
                  >
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
