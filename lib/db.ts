import { defaultIngredients, defaultRecipies } from "./data";

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
// Local Storage Keys
// -------------------------------------------- //

const INGREDIENTS_KEY = 'ingredients';
const RECIPES_KEY = 'recipes';
const INGREDIENTS_MAX_ID_KEY = 'ingredients_max_id';
const RECIPES_MAX_ID_KEY = 'recipes_max_id';

// -------------------------------------------- //
// Helper Functions
// -------------------------------------------- //

function getFromLocalStorage<T>(key: string, defaultValue: T): T {
    const storedValue = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    return storedValue ? JSON.parse(storedValue) : defaultValue;
}

function setToLocalStorage<T>(key: string, value: T): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

// -------------------------------------------- //
// Data
// -------------------------------------------- //

let ingredients: { [key: number]: Ingredient } = getFromLocalStorage(INGREDIENTS_KEY, {});
let recipes: { [key: number]: Recipe } = getFromLocalStorage(RECIPES_KEY, {});
let ingredients_max_id: number = getFromLocalStorage(INGREDIENTS_MAX_ID_KEY, 0);
let recipes_max_id: number = getFromLocalStorage(RECIPES_MAX_ID_KEY, 0);

// Rebuild indexes
let recipes_idx_name: { [key: string]: number } = {};
let ingredients_idx_name: { [key: string]: number } = {};

for (const [id, recipe] of Object.entries(recipes)) {
    recipes_idx_name[recipe.name] = Number(id);
}

for (const [id, ingredient] of Object.entries(ingredients)) {
    ingredients_idx_name[ingredient.name] = Number(id);
}

// -------------------------------------------- //
// Functions
// -------------------------------------------- //

export function getRecipeNames(): string[] {
    return Object.keys(recipes_idx_name);
}

export function getRecipes(): Recipe[] {
    return Object.values(recipes);
}

export function getIngredients(): Ingredient[] {
    return Object.values(ingredients);
}

export function getRecipeById(id: number): Recipe {
    return recipes[id];
}

export function getRecipeByName(name: string): Recipe | null {
    const id = recipes_idx_name[name];
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
    if (recipes_idx_name[recipe.name]) {
        throw new Error(`Recipe with name ${recipe.name} already exists`);
    }
    recipes_max_id++;
    recipe.id = recipes_max_id;
    recipes[recipes_max_id] = recipe;
    recipes_idx_name[recipe.name] = recipes_max_id;
    setToLocalStorage(RECIPES_KEY, recipes);
    setToLocalStorage(RECIPES_MAX_ID_KEY, recipes_max_id);
    return recipes_max_id;
}

export function addIngredient(ingredient: Ingredient): number {
    if (ingredients_idx_name[ingredient.name]) {
        throw new Error(`Ingredient with name ${ingredient.name} already exists`);
    }
    ingredients_max_id++;
    ingredient.id = ingredients_max_id;
    ingredients[ingredients_max_id] = ingredient;
    ingredients_idx_name[ingredient.name] = ingredients_max_id;
    setToLocalStorage(INGREDIENTS_KEY, ingredients);
    setToLocalStorage(INGREDIENTS_MAX_ID_KEY, ingredients_max_id);
    return ingredients_max_id;
}

export function removeRecipe(id: number): void {
    delete recipes_idx_name[getRecipeById(id).name];
    delete recipes[id];
    setToLocalStorage(RECIPES_KEY, recipes);
}

export function removeIngredient(id: number): void {
    delete ingredients_idx_name[getIngredientById(id).name];
    delete ingredients[id];
    setToLocalStorage(INGREDIENTS_KEY, ingredients);
}

export function updateRecipe(recipe: Recipe): void {
    recipes[recipe.id] = recipe;
    recipes_idx_name = {};
    for (const [id, recipe] of Object.entries(recipes)) {
        recipes_idx_name[recipe.name] = Number(id);
    }
    setToLocalStorage(RECIPES_KEY, recipes);
}

export function updateIngredient(ingredient: Ingredient): void {
    ingredients[ingredient.id] = ingredient;
    ingredients_idx_name = {};
    for (const [id, ingredient] of Object.entries(ingredients)) {
        ingredients_idx_name[ingredient.name] = Number(id);
    }
    setToLocalStorage(INGREDIENTS_KEY, ingredients);
}

export function addIngredientIfNotExists(ingredient: Ingredient): void {
    if (!ingredients_idx_name[ingredient.name]) {
        addIngredient(ingredient);
    }
}

// -------------------------------------------- //
// Initial Data Loading
// -------------------------------------------- //

export function loadInitialData(): void {
    ingredients = {};
    recipes = {};
    ingredients_max_id = 0;
    recipes_max_id = 0;
    recipes_idx_name = {};
    ingredients_idx_name = {};

    for (const ingredient of defaultIngredients) {
        addIngredient(ingredient as Ingredient);
    }

    for (const recipe of defaultRecipies) {
        addRecipe(recipe as Recipe);
    }
}

// Check if it's the first time loading the app
if (Object.keys(ingredients).length === 0 && Object.keys(recipes).length === 0) {
    loadInitialData();
}