import { getCatagoryForIngredient } from './foodCategories';
import { WeekMeals, ShoppingList, IngredientQuantity } from './types';

// combineQuantities: Combines quantities of the same unit into a single quantity
// e.g. [['cup', 1], ['cup', 1], ['cup', 0.5]] => { cup: 2.5 }
// e.g. [['g', 100], ['lb', 0.5]] => { g: 100, lb: 0.5 }
export const combineQuantities = (quantities: IngredientQuantity[]) => {
    const combinedQuantities: Record<string, number> = {};
    
    quantities.forEach(quantity => {
      const [unit, value] = quantity;
      if (unit in combinedQuantities) {
        combinedQuantities[unit] += value;
      }
      else {
        combinedQuantities[unit] = value;
      }
    });
    return combinedQuantities;
};

// test('combineQuantities', () => {
//     assert.deepStrictEqual(combineQuantities(['1 cups', '2 cups', '0.5 cups']), { cup: 3.5 });
//     assert.deepStrictEqual(combineQuantities(['200g', '0.5lb']), { g: 200.5, lb: 0.5 });
//     assert.deepStrictEqual(combineQuantities(['1/2', '1/2']), { '1/2': 2 });
// });

// formatCombinedQuantities: Formats the combined quantities into a human-readable string
// e.g. { cup: 2.5 } => ["2.5 cup"]
// e.g. { g: 100, lb: 0.5 } => ["200 g", "0.5 lb"]
export const formatCombinedQuantities = (combinedQuantities: Record<string, number>) => {
    return Object.entries(combinedQuantities).map(([unit, value]) => {
      return `${value} ${unit}`;
    });
};

// test('formatCombinedQuantities', () => {
//     assert.deepStrictEqual(formatCombinedQuantities({ cups: 2.5 }), ['2.5 cups']);
//     assert.deepStrictEqual(formatCombinedQuantities({ g: 200, lb: 0.5 }), ['200 g', '0.5 lb']);
// });


// return an object with ingredients from each meal of each day
// the value of each is an array of quantities
// e.g. returns { "Oats": ['cup', 1], "Mince": [['g', 200], ['lb', 2]] }
export const getIngredientsFromMeals = (meals: WeekMeals) => {
    const ingredients: Record<string, IngredientQuantity[]> = {};

    Object.values(meals).flat().forEach(meal => {
      meal.ingredients.forEach(ing => {
        if (ingredients[ing.name]) {
          ingredients[ing.name].push(ing.quantity);
        } else {
          ingredients[ing.name] = [ing.quantity];
        }
      });
    });
    return ingredients;
}


// generateShoppingList: Generates a shopping list from the meals
export const generateShoppingList = (meals: WeekMeals) => {
    const ingredients: Record<string, IngredientQuantity[]> = getIngredientsFromMeals(meals);

    const categories: ShoppingList = {
        "Fruits": [],
        "Vegetables": [],
        "Meat & Fish": [],
        "Dairy & Eggs": [],
        "Grains & Pasta": [],
        "Canned & Jarred Goods": [],
        "Spices & Seasonings": [],
        "Baking & Cooking": [],
        "Frozen Foods": [],
        "Snacks": [],
        "Miscellaneous": []
    };

    Object.entries(ingredients).forEach(([name, quantities]) => {
      const combined = combineQuantities(quantities);
      const formattedQuantities = formatCombinedQuantities(combined);
      const category = getCatagoryForIngredient(name);
      categories[category].push({ name, quantities: formattedQuantities });
    });

    //sort the ingredients in each category
    Object.values(categories).forEach(category => {
      category.sort((a, b) => a.name.localeCompare(b.name));
    });


    return categories;
};
