import assert from 'assert';
import { WeekMeals, ShoppingList } from './types';

// takes Recipe.ingredients.quantity as input and splits it into the quantity and unit
// e.g. "1 cup" => [1, "cup"], "200g" => [200, "g"], "1" => [1, ""], "1/2" => [1, "1/2"]
export const parseQuantity = (quantity: string): [number, string] => {
    const match = quantity.match(/^([\d.]+)\s*(.*)$/);
    if (match) {
        return [parseFloat(match[1]), match[2].trim()];
    }
    return [1, quantity]; // Default to 1 if no number is found
};

// test('parseQuantity', () => {
//     assert.deepStrictEqual(parseQuantity('1 cup'), [1, 'cup']);
//     assert.deepStrictEqual(parseQuantity('200g'), [200, 'g']);
//     assert.deepStrictEqual(parseQuantity('1'), [1, '']);
//     assert.deepStrictEqual(parseQuantity('1/2'), [1, '1/2']);
// });

// combineQuantities: Combines quantities of the same unit into a single quantity
// e.g. ["1 cup", "2 cups", "0.5 cup"] => { cup: 2.5 }
// e.g. ["200g", "0.5lb"] => { g: [200], lb: [0.5] }
export const combineQuantities = (quantities: string[]) => {
    const combinedQuantities: Record<string, number> = {};
    
    quantities.forEach(quantity => {
      const [value, unit] = parseQuantity(quantity);
      if (unit in combinedQuantities) {
        assert(typeof combinedQuantities[unit] === 'number');
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
// e.g. { cup: 2.5 } => ["2.5 cups"]
// e.g. { g: [200], lb: [0.5] } => ["200 g", "0.5 lb"]
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
// e.g. { "Oats": ["2 cups"], "Mince": ["200 g", "1 lb"] }
export const getIngredientsFromMeals = (meals: WeekMeals) => {
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
    return ingredients;
}

type IngredientCategories = Record<string, string>;
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
    "granola": "Snacks"
  };

export const getCatagoryForIngredient = (ingredientName: string) => {
    return ingredientCategories[ingredientName.toLowerCase()] || "Miscellaneous";
}

// test('getCatagoryForIngredient', () => {
//     assert.strictEqual(getCatagoryForIngredient('banana'), 'Fruits & Vegetables');
//     assert.strictEqual(getCatagoryForIngredient('chicken'), 'Meat & Fish');
//     assert.strictEqual(getCatagoryForIngredient('olive oil'), 'Baking & Cooking Essentials');
//     assert.strictEqual(getCatagoryForIngredient('chocolate'), 'Miscellaneous');
// });

// generateShoppingList: Generates a shopping list from the meals
export const generateShoppingList = (meals: WeekMeals) => {
    const ingredients: Record<string, string[]> = getIngredientsFromMeals(meals);

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

    Object.entries(ingredients).forEach(([name, quantities]) => {
      const combined = combineQuantities(quantities);
      const formattedQuantities = formatCombinedQuantities(combined);
      const category = getCatagoryForIngredient(name);
      categories[category].push({ name, quantities: formattedQuantities });
    });

    return categories;
};
