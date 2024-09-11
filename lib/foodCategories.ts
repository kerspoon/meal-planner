type FODMAPLevel = 'Low' | 'Moderate' | 'High';

interface Ingredient {
  name: string;
  fodmapLevel?: FODMAPLevel;
  fodmapNotes?: string;
}

type IngredientDatabase = Record<string, Ingredient[]>;

export const categories: IngredientDatabase = {
  "Fruits": [
    {
      name: "lime",
      fodmapLevel: "Low",
      fodmapNotes: "Similar to lemon in FODMAP content."
    },
    {
      name: "lime juice",
      fodmapLevel: "Low",
      fodmapNotes: "Assumed to be similar to lime fruit in FODMAP content."
    },
    {
      name: "lemon",
      fodmapLevel: "Low"
    },
    {
      name: "lemon juice",
      fodmapLevel: "Low",
      fodmapNotes: "Assumed to be similar to lemon fruit in FODMAP content."
    },
    {
      name: "pomegranate",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 55g portions."
    },
    {
      name: "banana",
      fodmapLevel: "Low",
      fodmapNotes: "Ripe bananas are moderate FODMAP in portions larger than 45g. Unripe (green) bananas are low FODMAP."
    },
    {
      name: "kiwi",
      fodmapLevel: "Low"
    },
    {
      name: "strawberries",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 75g portions."
    },
    {
      name: "raspberries",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 65g portions."
    },
    {
      name: "blueberries",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 50g portions."
    },
    {
      name: "pineapple",
      fodmapLevel: "Low",
      fodmapNotes: "Fresh pineapple is low FODMAP. Dried pineapple is moderate FODMAP in 25g portions."
    },
    {
      name: "papaya",
      fodmapLevel: "Low"
    },
    {
      name: "avocado",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 45g portions."
    },
    {
      name: "cherry tomatoes",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in fructose."
    },
    {
      name: "vine tomatoes",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Limit to 75g per serving."
    },
    {
      name: "tomatoes",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Limit to 75g per serving for raw tomatoes. Canned tomatoes are low FODMAP."
    },
    {
      name: "roma tomatoes",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Limit to 75g per serving. Assumed to be similar to regular tomatoes."
    }
  ],
  "Vegetables": [
    {
      name: "okra",
      fodmapLevel: "Low"
    },
    {
      name: "oyster mushrooms",
      fodmapLevel: "Low"
    },
    {
      name: "shiitake mushrooms",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in mannitol."
    },
    {
      name: "portobello mushrooms",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in mannitol."
    },
    {
      name: "chestnut mushrooms",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. Assumed to be similar to button mushrooms, which are high in mannitol."
    },
    {
      name: "lemongrass",
      fodmapLevel: "Low",
      fodmapNotes: "Assumed to be low FODMAP based on other herbs."
    },
    {
      name: "garlic",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in fructans."
    },
    {
      name: "garlic cloves",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in fructans."
    },
    {
      name: "ginger",
      fodmapLevel: "Low"
    },
    {
      name: "red chillies",
      fodmapLevel: "Low",
      fodmapNotes: "Green and red chillies are low FODMAP."
    },
    {
      name: "spring onions",
      fodmapLevel: "Low",
      fodmapNotes: "Green part is low FODMAP. White part is high FODMAP."
    },
    {
      name: "brussel sprouts",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 60g portions."
    },
    {
      name: "banana shallots",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in fructans. Similar to regular shallots."
    },
    {
      name: "shallots",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in fructans."
    },
    {
      name: "chickpeas",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Canned chickpeas are low FODMAP in 84g portions."
    },
    {
      name: "aubergines",
      fodmapLevel: "Low"
    },
    {
      name: "baby aubergines",
      fodmapLevel: "Low",
      fodmapNotes: "Assumed to be similar to regular aubergines."
    },
    {
      name: "whole aubergines",
      fodmapLevel: "Low"
    },
    {
      name: "red pepper",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 57g portions."
    },
    {
      name: "red peppers",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 57g portions."
    },
    {
      name: "yellow peppers",
      fodmapLevel: "Low",
      fodmapNotes: "Assumed to be similar to green peppers, which are low FODMAP."
    },
    {
      name: "red onion",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in fructans."
    },
    {
      name: "onion",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in fructans."
    },
    {
      name: "broccoli",
      fodmapLevel: "Low",
      fodmapNotes: "Broccoli heads are low FODMAP. Stalks are high FODMAP."
    },
    {
      name: "squash",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Butternut squash is low FODMAP in 60g portions."
    },
    {
      name: "sweet potatoes",
      fodmapLevel: "Low",
      fodmapNotes: "Low FODMAP in 1/2 cup (75g) servings."
    },
    {
      name: "courgettes",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 75g portions."
    },
    {
      name: "sweetcorn",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 1/2 cob or 38g of canned corn."
    },
    {
      name: "artichokes",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in fructans."
    },
    {
      name: "spring greens",
      fodmapLevel: "Low",
      fodmapNotes: "Assumed to be similar to other leafy greens."
    },
    {
      name: "potatoes",
      fodmapLevel: "Low"
    },
    {
      name: "spinach",
      fodmapLevel: "Low"
    },
    {
      name: "kale",
      fodmapLevel: "Low"
    },
    {
      name: "celery",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 15g portions."
    },
    {
      name: "carrot",
      fodmapLevel: "Low"
    },
    {
      name: "fennel",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Fennel bulb is low FODMAP in 60g portions. Fennel leaves are low FODMAP."
    },
    {
      name: "cucumber",
      fodmapLevel: "Low"
    },
    {
      name: "jalapeño",
      fodmapLevel: "Low",
      fodmapNotes: "Green jalapeños are low FODMAP. Pickled jalapeños are also low FODMAP."
    },
    {
      name: "scallions",
      fodmapLevel: "Low",
      fodmapNotes: "Green part is low FODMAP. White part is high FODMAP."
    },
    {
      name: "baby bok choy",
      fodmapLevel: "Low",
      fodmapNotes: "Assumed to be similar to pak choy, which is low FODMAP."
    },
    {
      name: "radishes",
      fodmapLevel: "Low"
    },
    {
      name: "parsnips",
      fodmapLevel: "Low"
    }
  ],
  "Meat & Fish": [
    {
      name: "tofu",
      fodmapLevel: "Low",
      fodmapNotes: "Firm and drained tofu is low FODMAP. Silken tofu is high FODMAP."
    },
    {
      name: "tempeh",
      fodmapLevel: "Low"
    }
  ],
  "Dairy & Eggs": [
    {
      name: "coconut yogurt",
      fodmapLevel: "Low",
      fodmapNotes: "Check for other FODMAP ingredients."
    },
    {
      name: "eggs",
      fodmapLevel: "Low",
      fodmapNotes: "All types of eggs are low FODMAP."
    },
    {
      name: "parmesan",
      fodmapLevel: "Low",
      fodmapNotes: "Hard cheeses are generally low in lactose."
    },
    {
      name: "feta cheese",
      fodmapLevel: "Low",
      fodmapNotes: "Low lactose content."
    },
    {
      name: "stilton",
      fodmapLevel: "Low",
      fodmapNotes: "Assumed to be low FODMAP like other hard cheeses."
    },
    {
      name: "sour cream",
      fodmapLevel: "Low",
      fodmapNotes: "Use in moderation as high fat content can trigger IBS symptoms in some people."
    },
    {
      name: "yogurt",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Regular yogurt is low FODMAP in 3 tbsp servings. Lactose-free yogurt is a better option."
    },
    {
      name: "single cream",
      fodmapLevel: "Low",
      fodmapNotes: "Use in moderation as high fat content can trigger IBS symptoms in some people."
    },
    {
      name: "almond milk",
      fodmapLevel: "Low",
      fodmapNotes: "Check for other FODMAP ingredients. Ensure milk is calcium enriched."
    },
    {
      name: "coconut milk",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. UHT coconut milk is low FODMAP in 150ml portions. Canned coconut milk is low FODMAP in 120ml portions."
    },
    {
      name: "soy milk",
      fodmapLevel: "Low",
      fodmapNotes: "Unsweetened soy milk made from hulled soya beans is low FODMAP in 120ml portions. Sweetened varieties are moderate FODMAP in 60ml portions."
    }
  ],
  "Grains & Pasta": [
    {
      name: "jasmine rice",
      fodmapLevel: "Low",
      fodmapNotes: "All types of rice are generally low FODMAP."
    },
    {
      name: "polenta",
      fodmapLevel: "Low"
    },
    {
      name: "bulgur wheat",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. Contains fructans."
    },
    {
      name: "brown lentils",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 46g (boiled) portions."
    },
    {
      name: "farro",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. Similar to wheat, contains fructans."
    },
    {
      name: "quinoa",
      fodmapLevel: "Low"
    },
    {
      name: "brown rice",
      fodmapLevel: "Low"
    },
    {
      name: "whole-grain spaghetti",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. Contains fructans."
    },
    {
      name: "gluten-free pasta",
      fodmapLevel: "Low",
      fodmapNotes: "Check for other FODMAP ingredients."
    }
  ],
  "Canned & Jarred Goods": [
    {
      name: "chopped tomatoes",
      fodmapLevel: "Low"
    },
    {
      name: "tinned tomatoes",
      fodmapLevel: "Low"
    },
    {
      name: "black beans",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in GOS."
    },
    {
      name: "cannellini beans",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in GOS."
    },
    {
      name: "red kidney beans",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in GOS."
    },
    {
      name: "pitted green olives",
      fodmapLevel: "Low"
    },
    {
      name: "vegetable stock",
      fodmapLevel: "Moderate",
      fodmapNotes: "FODMAP content varies. Check ingredients for onion and garlic. Consider using homemade low FODMAP stock."
    },
    {
      name: "kalamata olives",
      fodmapLevel: "Low"
    }
  ],
  "Spices & Seasonings": [
    {
      name: "sea salt",
      fodmapLevel: "Low"
    },
    {
      name: "salt",
      fodmapLevel: "Low"
    },
    {
      name: "ground cumin",
      fodmapLevel: "Low"
    },
    {
      name: "ground coriander",
      fodmapLevel: "Low"
    },
    {
      name: "chilli powder",
      fodmapLevel: "Low",
      fodmapNotes: "Check for added garlic or onion powder."
    },
    {
      name: "chilli flakes",
      fodmapLevel: "Low"
    },
    {
      name: "chaat masala",
      fodmapLevel: "Moderate",
      fodmapNotes: "May contain high FODMAP ingredients. Check composition."
    },
    {
      name: "mango powder",
      fodmapLevel: "Moderate",
      fodmapNotes: "Use in small amounts. Derived from unripe mangoes which are higher in FODMAPs."
    },
    {
      name: "harissa",
      fodmapLevel: "Moderate",
      fodmapNotes: "May contain garlic. Check ingredients and use in small amounts."
    },
    {
      name: "smoked paprika",
      fodmapLevel: "Low"
    },
    {
      name: "chipotle chilli flakes",
      fodmapLevel: "Low"
    },
    {
      name: "ground turmeric",
      fodmapLevel: "Low"
    },
    {
      name: "bay leaf",
      fodmapLevel: "Low"
    },
    {
      name: "rosemary",
      fodmapLevel: "Low"
    },
    {
      name: "rosemary sprigs",
      fodmapLevel: "Low"
    },
    {
      name: "za'atar",
      fodmapLevel: "Moderate",
      fodmapNotes: "May contain high FODMAP ingredients. Check composition and use in small amounts."
    },
    {
      name: "black pepper",
      fodmapLevel: "Low"
    },
    {
      name: "kaffir lime leaves",
      fodmapLevel: "Low"
    },
    {
      name: "tom yum paste",
      fodmapLevel: "Moderate",
      fodmapNotes: "May contain high FODMAP ingredients like garlic and shallots. Use in small amounts and check ingredients."
    },
    {
      name: "tamarind paste",
      fodmapLevel: "Low"
    },
    {
      name: "soy sauce",
      fodmapLevel: "Low",
      fodmapNotes: "The small amount of wheat in soy sauce is acceptable on a low FODMAP diet."
    },
    {
      name: "white miso paste",
      fodmapLevel: "Low",
      fodmapNotes: "Use in small amounts."
    },
    {
      name: "capers",
      fodmapLevel: "Low"
    },
    {
      name: "red wine vinegar",
      fodmapLevel: "Low"
    },
    {
      name: "sriracha",
      fodmapLevel: "Moderate",
      fodmapNotes: "May contain garlic. Check ingredients and use in small amounts."
    },
    {
      name: "hot chilli sauce",
      fodmapLevel: "Moderate",
      fodmapNotes: "May contain garlic or other high FODMAP ingredients. Check composition and use in small amounts."
    },
    {
      name: "tamari",
      fodmapLevel: "Low"
    },
    {
      name: "rice wine vinegar",
      fodmapLevel: "Low"
    },
    {
      name: "balsamic vinegar",
      fodmapLevel: "Low",
      fodmapNotes: "Limit to 1 tablespoon per sitting."
    },
    {
      name: "apple cider vinegar",
      fodmapLevel: "Low"
    },
    {
      name: "dried oregano",
      fodmapLevel: "Low"
    },
    {
      name: "dried basil",
      fodmapLevel: "Low"
    },
    {
      name: "dried fennel",
      fodmapLevel: "Low"
    },
    {
      name: "dried sage",
      fodmapLevel: "Low"
    },
    {
      name: "italian seasoning",
      fodmapLevel: "Low",
      fodmapNotes: "Check for added garlic or onion powder."
    },
    {
      name: "ground cinnamon",
      fodmapLevel: "Low"
    },
    {
      name: "ground nutmeg",
      fodmapLevel: "Low"
    },
    {
      name: "ground ginger",
      fodmapLevel: "Low"
    },
    {
      name: "vanilla extract",
      fodmapLevel: "Low"
    },
    {
      name: "nutritional yeast",
      fodmapLevel: "Low"
    },
    {
      name: "baking powder",
      fodmapLevel: "Low"
    },
    {
      name: "baking soda",
      fodmapLevel: "Low"
    },
    {
      name: "cocoa powder",
      fodmapLevel: "Low"
    },
    {
      name: "dijon mustard",
      fodmapLevel: "Low",
      fodmapNotes: "Limit to 1 tablespoon per sitting."
    },
    {
      name: "kimchi",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 70g portions."
    }
  ],
  "Baking & Cooking": [
    {
      name: "vegetable oil",
      fodmapLevel: "Low"
    },
    {
      name: "olive oil",
      fodmapLevel: "Low"
    },
    {
      name: "sesame oil",
      fodmapLevel: "Low"
    },
    {
      name: "brown sugar",
      fodmapLevel: "Low",
      fodmapNotes: "Use in moderation."
    },
    {
      name: "breadcrumbs",
      fodmapLevel: "Moderate",
      fodmapNotes: "FODMAP content depends on the type of bread used. Choose gluten-free breadcrumbs for a low FODMAP option."
    },
    {
      name: "extra virgin olive oil",
      fodmapLevel: "Low"
    },
    {
      name: "sunflower oil",
      fodmapLevel: "Low"
    },
    {
      name: "coconut oil",
      fodmapLevel: "Low"
    },
    {
      name: "maple syrup",
      fodmapLevel: "Low",
      fodmapNotes: "Use in moderation."
    },
    {
      name: "gluten-free flour",
      fodmapLevel: "Low",
      fodmapNotes: "Check for other FODMAP ingredients."
    },
    {
      name: "cornmeal",
      fodmapLevel: "Low"
    },
    {
      name: "rolled oats",
      fodmapLevel: "Low",
      fodmapNotes: "Large servings may be high in FODMAPs."
    },
    {
      name: "old-fashioned oats",
      fodmapLevel: "Low",
      fodmapNotes: "Large servings may be high in FODMAPs."
    },
    {
      name: "quick-cooking oats",
      fodmapLevel: "Low",
      fodmapNotes: "Large servings may be high in FODMAPs."
    }
  ],
  "Frozen Foods": [],
  "Nuts & Seeds": [
    {
      name: "cashews",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. High in GOS."
    },
    {
      name: "salted peanuts",
      fodmapLevel: "Low"
    },
    {
      name: "flaked almonds",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 12g (10 nuts) portions."
    },
    {
      name: "whole almonds",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 12g (10 nuts) portions."
    },
    {
      name: "almonds",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 12g (10 nuts) portions."
    },
    {
      name: "toasted almonds",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 12g (10 nuts) portions."
    },
    {
      name: "walnuts",
      fodmapLevel: "Low"
    },
    {
      name: "sesame seeds",
      fodmapLevel: "Low"
    },
    {
      name: "pumpkin seeds",
      fodmapLevel: "Low"
    },
    {
      name: "hemp seeds",
      fodmapLevel: "Low"
    },
    {
      name: "chia seeds",
      fodmapLevel: "Low"
    },
    {
      name: "ground flaxseed",
      fodmapLevel: "Low",
      fodmapNotes: "Limit to 15g per serving."
    },
    {
      name: "sunflower seeds",
      fodmapLevel: "Low"
    },
    {
      name: "almond butter",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 32g portions."
    },
    {
      name: "peanut butter",
      fodmapLevel: "Low",
      fodmapNotes: "Choose varieties without added high FODMAP ingredients."
    },
    {
      name: "tahini",
      fodmapLevel: "Moderate",
      fodmapNotes: "Portion Specific. Low FODMAP in 30g portions."
    }
  ],
  "Fresh Herbs": [
    {
      name: "chives",
      fodmapLevel: "Low"
    },
    {
      name: "basil",
      fodmapLevel: "Low"
    },
    {
      name: "coriander",
      fodmapLevel: "Low"
    },
    {
      name: "parsley",
      fodmapLevel: "Low"
    },
    {
      name: "thyme",
      fodmapLevel: "Low"
    },
    {
      name: "sage",
      fodmapLevel: "Low"
    },
    {
      name: "dill",
      fodmapLevel: "Low"
    },
    {
      name: "mint",
      fodmapLevel: "Low"
    },
    {
      name: "cilantro",
      fodmapLevel: "Low"
    }
  ],
  "Miscellaneous": [
    {
      name: "tortillas",
      fodmapLevel: "Moderate",
      fodmapNotes: "FODMAP content depends on the type of flour used. Choose corn or gluten-free tortillas for a low FODMAP option."
    },
    {
      name: "nachos",
      fodmapLevel: "Low",
      fodmapNotes: "Plain corn chips are low FODMAP. Check for added high FODMAP ingredients in flavored varieties."
    },
    {
      name: "focaccia",
      fodmapLevel: "High",
      fodmapNotes: "Avoid. Contains fructans."
    },
    {
      name: "roasted italian medley",
      fodmapLevel: "Moderate",
      fodmapNotes: "FODMAP content may vary depending on ingredients. Check for high FODMAP vegetables or seasonings."
    },
    {
      name: "garlic-infused olive oil",
      fodmapLevel: "Low",
      fodmapNotes: "FODMAPs are not fat soluble, so garlic-infused oil is low FODMAP."
    }
  ]
};

export const catagoryNames = Object.keys(categories);

type IngredientCategories = Record<string, string>;
export const ingredientCategories: IngredientCategories = {};

Object.entries(categories).forEach(([category, ingredients]) => {
  for (const ingredient of ingredients) {
    ingredientCategories[ingredient.name.toLowerCase()] = category;
  }
});

export const getCategoryForIngredient = (ingredientName: string) => {
  return ingredientCategories[ingredientName.toLowerCase()] || "Miscellaneous";
};

// test('getCatagoryForIngredient', () => {
//     assert.strictEqual(getCatagoryForIngredient('banana'), 'Fruits');
//     assert.strictEqual(getCatagoryForIngredient('chicken'), 'Meat & Fish');
//     assert.strictEqual(getCatagoryForIngredient('olive oil'), 'Baking & Cooking Essentials');
//     assert.strictEqual(getCatagoryForIngredient('chocolate'), 'Miscellaneous');
// });