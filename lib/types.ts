
export enum MealType {
    Breakfast = 'breakfast',
    Lunch = 'lunch',
    Dinner = 'dinner',
    Dessert = 'dessert'
  }
  
export const mealColors: Record<MealType, string> = {
    breakfast: 'bg-yellow-200',
    lunch: 'bg-green-200',
    dinner: 'bg-blue-200',
    dessert: 'bg-purple-200'
  };

// unit, quantity 
// e.g. ['cup', 1], ['tbsp', 2.5], ['', 3], ['g', 100], ['kg', 0.1]
export type IngredientQuantity = [string, number];

// e.g. ['flour', ['cup', 1]], ['sugar', ['tbsp', 2.5]], ['salt', ['', 3]], ['butter', ['g', 100]], ['milk', ['kg', 0.1]]
export type Ingredient = {
    name: string;
    quantity: IngredientQuantity;
  };

// e.g. { id: 1, name: 'Pancakes', type: 'breakfast', ingredients: [{ name: 'flour', quantity: ['cup', 1] }, { name: 'sugar', quantity: ['tbsp', 2.5] }], instructions: '...' }
export type Recipe = {
    id: number;
    name: string;
    type: MealType;
    ingredients: Ingredient[];
    instructions: string; // Markdown formatted
  };

export enum DaysOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
  }

export type WeekMeals = {
    [key in DaysOfWeek]: Recipe[];
  };

export type ShoppingList = Record<string, { name: string, quantities: string[] }[]>;