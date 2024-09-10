export const categories = {
    "Fruits": [
        "lime",
        "lime juice",
        "lemon",
        "lemon juice",
        "pomegranate"
    ],
    "Vegetables": [
        "avocado",
        "okra",
        "oyster mushrooms",
        "shiitake mushrooms",
        "portobello mushrooms",
        "chestnut mushrooms",
        "lemongrass",
        "garlic",
        "garlic cloves",
        "ginger",
        "red chillies",
        "spring onions",
        "brussel sprouts",
        "banana shallots",
        "shallots",
        "chickpeas",
        "aubergines",
        "baby aubergines",
        "whole aubergines",
        "vine tomatoes",
        "cherry tomatoes",
        "tomatoes",
        "red pepper",
        "red peppers",
        "red onion",
        "onion",
        "broccoli",
        "squash",
        "sweet potatoes",
        "courgettes",
        "sweetcorn",
        "artichokes",
        "spring greens",
        "potatoes",
        "yellow peppers",
        "basil",
        "coriander",
        "parsley",
        "flat-leaf parsley",
        "thyme",
    ],
    "Meat & Fish": [
        "tofu",
    ],
    "Dairy & Eggs": [
        "coconut yogurt",
        "eggs",
        "parmesan",
        "feta cheese",
        "stilton",
        "sour cream",
        "yogurt",
        "single cream",
    ],
    "Grains & Pasta": [
        "jasmine rice",
        "polenta",
        "bulgur wheat",
        "brown lentils",
    ],
    "Canned & Jarred Goods": [
        "coconut milk",
        "chopped tomatoes",
        "tinned tomatoes",
        "black beans",
        "cannellini beans",
        "red kidney beans",
        "pitted green olives",
        "vegetable stock"
    ],
    "Spices & Seasonings": [
        "sea salt",
        "salt",
        "ground cumin",
        "ground coriander",
        "chilli powder",
        "chilli flakes",
        "chaat masala",
        "mango powder",
        "harissa",
        "smoked paprika",
        "chipotle chilli flakes",
        "ground turmeric",
        "bay leaf",
        "rosemary",
        "rosemary sprigs",
        "za'atar",
        "black pepper",
        "kaffir lime leaves",
        "tom yum paste",
        "tamarind paste",
        "soy sauce",
        "white miso paste",
        "capers",
        "red wine vinegar",
        "sriracha",
        "hot chilli sauce",
    ],
    "Baking & Cooking": [
        "vegetable oil",
        "olive oil",
        "sesame oil",
        "brown sugar",
        "breadcrumbs",
        "extra virgin olive oil",
        "sesame seeds"
    ],
    "Frozen Foods": [],
    "Snacks": [
        "tortillas",
        "nachos",
        "focaccia",
        "cashews",
        "salted peanuts",
        "flaked almonds",
        "whole almonds",
        "almonds",
        "toasted almonds",
    ],
    "Miscellaneous": [
    ]
};

type IngredientCategories = Record<string, string>;
export const ingredientCategories: IngredientCategories = {};

Object.entries(categories).forEach( ([category, ingredients]) => {
    for (const ingredient of ingredients) {
        ingredientCategories[ingredient] = category;
    }
});

export const getCatagoryForIngredient = (ingredientName: string) => {
    return ingredientCategories[ingredientName.toLowerCase()] || "Miscellaneous";
}

// test('getCatagoryForIngredient', () => {
//     assert.strictEqual(getCatagoryForIngredient('banana'), 'Fruits');
//     assert.strictEqual(getCatagoryForIngredient('chicken'), 'Meat & Fish');
//     assert.strictEqual(getCatagoryForIngredient('olive oil'), 'Baking & Cooking Essentials');
//     assert.strictEqual(getCatagoryForIngredient('chocolate'), 'Miscellaneous');
// });