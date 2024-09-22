import { WeekMeals, RecipeIngredient, Ingredient, getIngredientById } from './db';

type ShoppingListItem = {
    ingredient: Ingredient;
    quantity: number;
    units: string;
    category: string;
};

const combineQuantities = (items: ShoppingListItem[]): ShoppingListItem[] => {
    const combinedItems: { [key: string]: ShoppingListItem } = {};

    for (const item of items) {
        const key = `${item.ingredient.id}-${item.units}`;
        if (combinedItems[key]) {
            combinedItems[key].quantity += item.quantity;
        } else {
            combinedItems[key] = { ...item };
        }
    }

    return Object.values(combinedItems).map(item => ({
        ...item,
        quantity: Math.round(item.quantity * 100) / 100 // Round to 2 decimal places
    }));
};

const sortShoppingList = (list: ShoppingListItem[]): ShoppingListItem[] => {
    return list.sort((a, b) => {
        return a.ingredient.name.localeCompare(b.ingredient.name);
    });
};

export const generateShoppingList = (meals: WeekMeals): ShoppingListItem[] => {
    const allIngredients: RecipeIngredient[] = Object.values(meals)
        .flatMap(dailyMeals => dailyMeals.flatMap(meal => meal.ingredients));

    const shoppingList: ShoppingListItem[] = allIngredients.map(ingredient => {
        const fullIngredient = getIngredientById(ingredient.id);
        if (!fullIngredient) {
            throw new Error(`Ingredient with id ${ingredient.id} not found`);
        }
        return {
            ingredient: fullIngredient,
            quantity: ingredient.quantity,
            units: ingredient.units,
            category: fullIngredient.category
        };
    });

    const combinedList = combineQuantities(shoppingList);
    return sortShoppingList(combinedList);
};
