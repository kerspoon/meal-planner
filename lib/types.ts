
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

export type Ingredient = {
    name: string;
    quantity: string;
  };
  
export type Recipe = {
    id: number;
    name: string;
    type: MealType;
    ingredients: Ingredient[];
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
  
export const recipes: Recipe[] = [
    { id: 1, name: 'Oatmeal', type: MealType.Breakfast, ingredients: [{ name: 'Oats', quantity: '1 cup' }, { name: 'Milk', quantity: '1 cup' }, { name: 'Banana', quantity: '1' }] },
    { id: 2, name: 'Avocado Toast', type: MealType.Breakfast, ingredients: [{ name: 'Bread', quantity: '2 slices' }, { name: 'Avocado', quantity: '1' }, { name: 'Eggs', quantity: '2' }] },
    { id: 3, name: 'Chicken Salad', type: MealType.Lunch, ingredients: [{ name: 'Chicken', quantity: '200g' }, { name: 'Lettuce', quantity: '1 cup' }, { name: 'Tomato', quantity: '1' }, { name: 'Cucumber', quantity: '1/2' }] },
    { id: 4, name: 'Veggie Wrap', type: MealType.Lunch, ingredients: [{ name: 'Tortilla', quantity: '1' }, { name: 'Hummus', quantity: '2 tbsp' }, { name: 'Mixed Vegetables', quantity: '1 cup' }] },
    { id: 5, name: 'Spaghetti Bolognese', type: MealType.Dinner, ingredients: [{ name: 'Spaghetti', quantity: '200g' }, { name: 'Ground Beef', quantity: '300g' }, { name: 'Tomato Sauce', quantity: '1 cup' }] },
    { id: 6, name: 'Grilled Salmon', type: MealType.Dinner, ingredients: [{ name: 'Salmon Fillet', quantity: '200g' }, { name: 'Lemon', quantity: '1' }, { name: 'Asparagus', quantity: '1 bunch' }] },
    { id: 7, name: 'Fruit Parfait', type: MealType.Dessert, ingredients: [{ name: 'Yogurt', quantity: '1 cup' }, { name: 'Mixed Berries', quantity: '1 cup' }, { name: 'Granola', quantity: '1/4 cup' }] },
    { id: 8, name: 'Chocolate Mousse', type: MealType.Dessert, ingredients: [{ name: 'Dark Chocolate', quantity: '100g' }, { name: 'Heavy Cream', quantity: '1 cup' }, { name: 'Eggs', quantity: '2' }] },
  ];

export type ShoppingList = Record<string, { name: string, quantities: string[] }[]>;