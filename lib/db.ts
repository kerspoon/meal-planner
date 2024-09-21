
// -------------------------------------------- //
// Types
// -------------------------------------------- //

export enum MealType {
    Breakfast = 'breakfast',
    Lunch = 'lunch',
    Dinner = 'dinner',
    Dessert = 'dessert'
}

export type RecipeIngredient = {
    id: number, // forign key to ingredients table
    quantity: number,
    units: string,
    details?: string
};

export type Recipe = {
    id: number,
    name: string,
    category: MealType,
    ingredients: RecipeIngredient[],
    instructions: string,
    photos: string[]
};

export type FODMAPLevel = 'Low' | 'Moderate' | 'High';

export enum IngredientCategory {
    "Fruits" = 'Fruits',
    "Vegetables" = 'Vegetables',
    "Meat & Fish" = 'Meat & Fish',
    "Dairy & Eggs" = 'Dairy & Eggs',
    "Grains & Pasta" = 'Grains & Pasta',
    "Can & Jarred" = 'Can & Jarred',
    "Frozen" = 'Frozen',
    "Spices & Seasonings" = 'Spices & Seasonings',
    "Baking & Cooking" = 'Baking & Cooking',
    "Nuts & Seeds" = 'Nuts & Seeds',
    "Herbs" = 'Herbs',
    "Miscellaneous" = 'Miscellaneous',
}

export type Ingredient = {
    id: number,
    name: string,
    category: IngredientCategory | string,
    fodmap?: FODMAPLevel,
    fodmap_comment?: string
};

export enum DaysOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
};

export type WeekMeals = {  
    [DaysOfWeek.Monday]: Recipe[];
    [DaysOfWeek.Tuesday]: Recipe[];
    [DaysOfWeek.Wednesday]: Recipe[];
    [DaysOfWeek.Thursday]: Recipe[];
    [DaysOfWeek.Friday]: Recipe[];
    [DaysOfWeek.Saturday]: Recipe[];
    [DaysOfWeek.Sunday]: Recipe[];
};

// -------------------------------------------- //
// Data
// -------------------------------------------- //

var ingredients_max_id = 1;
var recipies_max_id = 1;

// e.g. 1: { id: 1, name: "Rice", category: IngredientCategory["Grains & Pasta"], fodmap: 'Low', fodmap_comment: "White rice is low FODMAP" }
const ingredients: { [key: number]: Ingredient } = {}

// e.g. 1: { id: 1, name: "Boiled Rice", category: MealType.Breakfast, ingredients: [{ id: 1, quantity: 100, units: "g", details: "rinced" }], instructions: "", photos: ["boiled-rice.png"]
const recipies: { [key: number]: Recipe } = {
};

// -------------------------------------------- //
// Indexes to allow for quick lookups
// -------------------------------------------- //

// e.g. { "Boiled Rice": 1 }
var recipies_idx_name: { [key: string]: number } = {
};

// e.g. { "Rice": 1 }
var ingredients_idx_name: { [key: string]: number } = {
};

// -------------------------------------------- //
// Functions
// -------------------------------------------- //

export function getRecipeNames(): string[] {
    return Object.keys(recipies_idx_name);
}

export function getRecipes(): Recipe[] {
    return Object.values(recipies);
}

export function getIngredients(): Ingredient[] {
    return Object.values(ingredients);
};

export function getRecipeById(id: number): Recipe {
    return recipies[id];
}

export function getRecipeByName(name: string): Recipe | null {
    const id = recipies_idx_name[name];
    return id ? getRecipeById(id) : null;
}

export function getIngredientById(id: number): Ingredient {
    return ingredients[id];
}

export function getIngredientByName(name: string): Ingredient | null {
    const id = ingredients_idx_name[name];
    return id ? getIngredientById(id) : null;
}

export function addRecipe(recipe: Recipe): number {
    if (recipies_idx_name[recipe.name]) {
        throw new Error(`Recipe with name ${recipe.name} already exists`);
    }
    recipies_max_id = recipies_max_id + 1;
    recipe.id = recipies_max_id; // assign the id, regardless of what was passed in.
    recipies[recipies_max_id] = recipe;
    recipies_idx_name[recipe.name] = recipies_max_id;
    return recipies_max_id;
}

export function addIngredient(ingredient: Ingredient): number {
    if (ingredients_idx_name[ingredient.name]) {
        throw new Error(`Ingredient with name ${ingredient.name} already exists`);
    }
    ingredients_max_id = ingredients_max_id + 1;
    ingredient.id = ingredients_max_id; // assign the id, regardless of what was passed in.
    ingredients[ingredients_max_id] = ingredient;
    ingredients_idx_name[ingredient.name] = ingredients_max_id;
    return ingredients_max_id;
}

export function removeRecipe(id: number): void {
    delete recipies[id];
}

export function removeIngredient(id: number): void {
    delete ingredients[id];
}

export function updateRecipe(recipe: Recipe): void {
    recipies[recipe.id] = recipe;
    // rebuild the full index (not quick, but simple)
    recipies_idx_name = {};
    for (const [id, recipe] of Object.entries(recipies)) {
        recipies_idx_name[recipe.name] = Number(id);
    }
}

export function updateIngredient(ingredient: Ingredient): void {
    ingredients[ingredient.id] = ingredient;
    // rebuild the full index (not quick, but simple)
    ingredients_idx_name = {};
    for (const [id, ingredient] of Object.entries(ingredients)) {
        ingredients_idx_name[ingredient.name] = Number(id);
    }
}

export function addIngredientIfNotExists(ingredient: Ingredient): void {
    if (!ingredients_idx_name[ingredient.name]) {
        addIngredient(ingredient);
    }
}

// -------------------------------------------- //
// Data
// -------------------------------------------- //

// load some initial data from data.ts
import { defaultIngredients, defaultRecipies } from "./data";

for (const ingredient of defaultIngredients) {
    addIngredient(ingredient as Ingredient);
};

for (const recipe of defaultRecipies) {
    addRecipe(recipe as Recipe);
};
