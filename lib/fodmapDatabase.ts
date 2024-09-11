
type FODMAPLevel = 'Low' | 'Moderate' | 'High';

interface FODMAPFood {
  id: number;
  name: string;
  category: string;
  fodmapLevel: FODMAPLevel;
  portion?: string;
  notes?: string;
  portionLevels?: {
    portion: string;
    fodmapLevel: FODMAPLevel;
  }[];
}

export const fodmapDatabase: FODMAPFood[] = [

  // fodmap_grains
  {
    id: 1,
    name: "Rice (white)",
    category: "Grains",
    fodmapLevel: "Low",
    notes: "All types of rice are generally low FODMAP."
  },
  {
    id: 2,
    name: "Rice (brown)",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 3,
    name: "Rice (basmati)",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 4,
    name: "Rice (red)",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 5,
    name: "Rice (glutinous)",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 6,
    name: "Rice bran",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 7,
    name: "Oats",
    category: "Grains",
    fodmapLevel: "Low",
    notes: "Large servings may be high in FODMAPs."
  },
  {
    id: 8,
    name: "Oat bran",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 9,
    name: "Buckwheat flakes",
    category: "Grains",
    fodmapLevel: "Low",
    notes: "Cooked buckwheat flakes are low FODMAP."
  },
  {
    id: 10,
    name: "Millet (hulled)",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 11,
    name: "Polenta",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 12,
    name: "Quinoa",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 13,
    name: "Maize",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 14,
    name: "Sago",
    category: "Grains",
    fodmapLevel: "Low",
    notes: "Cooked sago is low FODMAP."
  },
  {
    id: 15,
    name: "Tapioca starch",
    category: "Grains",
    fodmapLevel: "Low"
  },
  {
    id: 16,
    name: "Pearl barley",
    category: "Grains",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 17,
    name: "Buckwheat kernels",
    category: "Grains",
    fodmapLevel: "Moderate",
    portion: "54g",
    notes: "Limit to this portion size."
  },
  {
    id: 18,
    name: "Wheat",
    category: "Grains",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 19,
    name: "Bulghur wheat",
    category: "Grains",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 20,
    name: "Couscous",
    category: "Grains",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 21,
    name: "Semolina",
    category: "Grains",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 22,
    name: "Rye",
    category: "Grains",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 23,
    name: "Barley",
    category: "Grains",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 24,
    name: "Freekeh",
    category: "Grains",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },

  // fodmap_bread_products.ts

  {
    id: 25,
    name: "Wheat-free bread",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Brand example: Schär."
  },
  {
    id: 26,
    name: "Gluten-free bread",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Brand example: Schär."
  },
  {
    id: 27,
    name: "Wheat-free rolls",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 28,
    name: "Gluten-free rolls",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 29,
    name: "Wheat-free Ciabatta",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Brand example: Schär."
  },
  {
    id: 30,
    name: "Gluten-free Ciabatta",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Brand example: Schär."
  },
  {
    id: 31,
    name: "Wheat-free Pitta bread",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 32,
    name: "Gluten-free Pitta bread",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 33,
    name: "Wheat-free Naan bread",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 34,
    name: "Gluten-free Naan bread",
    category: "Bread Products",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 35,
    name: "100% Sourdough spelt bread",
    category: "Bread Products",
    fodmapLevel: "Low",
    portion: "2 slices (52g)",
    notes: "Only low FODMAP in this portion size."
  },
  {
    id: 36,
    name: "Wheat bread",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 37,
    name: "Rye bread",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 38,
    name: "Pumpernickel bread",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 39,
    name: "Raisin toast",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans and excess fructose."
  },
  {
    id: 40,
    name: "Pitta bread (wheat-based)",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 41,
    name: "Ciabatta (wheat-based)",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 42,
    name: "Focaccia",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 43,
    name: "Panini",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 44,
    name: "Naan bread (wheat-based)",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 45,
    name: "Chapatti",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 46,
    name: "Croissants",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 47,
    name: "Pastries",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans and often high in fat which can trigger IBS symptoms."
  },
  {
    id: 48,
    name: "Brioche",
    category: "Bread Products",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans and often high in fat which can trigger IBS symptoms."
  },

  // fodmap_flour_baking

  {
    id: 49,
    name: "Wheat-free flour",
    category: "Flour & Baking",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 50,
    name: "Gluten-free flour",
    category: "Flour & Baking",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 51,
    name: "Cornflour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 52,
    name: "Maize flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 53,
    name: "Millet flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 54,
    name: "Rice flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 55,
    name: "Sorghum flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 56,
    name: "Teff flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 57,
    name: "Tapioca flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 58,
    name: "Buckwheat flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 59,
    name: "Quinoa flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 60,
    name: "Pounded yam flour",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 61,
    name: "Potato starch",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 62,
    name: "Tapioca starch",
    category: "Flour & Baking",
    fodmapLevel: "Low"
  },
  {
    id: 63,
    name: "Raising agents",
    category: "Flour & Baking",
    fodmapLevel: "Low",
    notes: "e.g. Bicarbonate of soda, baking powder"
  },
  {
    id: 64,
    name: "Spelt flour (organic, sieved)",
    category: "Flour & Baking",
    fodmapLevel: "Moderate",
    notes: "Use in small amounts, contains less fructans than regular wheat flour"
  },
  {
    id: 65,
    name: "Wheat flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 66,
    name: "Rye flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 67,
    name: "Barley flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 68,
    name: "Soya flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains galacto-oligosaccharides (GOS)."
  },
  {
    id: 69,
    name: "Almond flour",
    category: "Flour & Baking",
    fodmapLevel: "Moderate",
    portion: "24g",
    notes: "Limit to this portion size."
  },
  {
    id: 70,
    name: "Coconut flour",
    category: "Flour & Baking",
    fodmapLevel: "Moderate",
    portion: "1/4 cup (30g)",
    notes: "Limit to this portion size."
  },
  {
    id: 71,
    name: "Chestnut flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. High in oligo-fructans."
  },
  {
    id: 72,
    name: "Amaranth flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 73,
    name: "Kamut flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 74,
    name: "Einkorn flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 75,
    name: "Emmer flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 76,
    name: "Lupin flour",
    category: "Flour & Baking",
    fodmapLevel: "High",
    notes: "Avoid. Contains galacto-oligosaccharides (GOS)."
  },

  // fodmap_fruits

  {
    id: 77,
    name: "Acai powder",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 78,
    name: "Ackee (tinned)",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 79,
    name: "Banana (unripe)",
    category: "Fruit",
    fodmapLevel: "Low",
    notes: "Green bananas are low FODMAP"
  },
  {
    id: 80,
    name: "Breadfruit",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 81,
    name: "Clementine",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 82,
    name: "Cranberries (fresh)",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 83,
    name: "Cumquats",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 84,
    name: "Guava (ripe)",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 85,
    name: "Jackfruit (young, canned, drained)",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 86,
    name: "Kiwi fruit",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 87,
    name: "Lemon",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 88,
    name: "Lime",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 89,
    name: "Mandarin",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 90,
    name: "Mixed peel (citrus fruit)",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 91,
    name: "Orange",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 92,
    name: "Papaya",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 93,
    name: "Passionfruit",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 94,
    name: "Pineapple (fresh)",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 95,
    name: "Plantain (peeled)",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 96,
    name: "Rhubarb",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 97,
    name: "Starfruit",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 98,
    name: "Tamarind",
    category: "Fruit",
    fodmapLevel: "Low"
  },
  {
    id: 99,
    name: "Avocado",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "45g",
    notes: "Limit to this portion size"
  },
  {
    id: 100,
    name: "Banana chips (dried)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "34g",
    notes: "Limit to this portion size"
  },
  {
    id: 101,
    name: "Banana (ripe)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "45g",
    notes: "Limit to this portion size"
  },
  {
    id: 102,
    name: "Blueberries",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "50g",
    notes: "Limit to this portion size"
  },
  {
    id: 103,
    name: "Boysenberry",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "24g",
    notes: "Limit to this portion size"
  },
  {
    id: 104,
    name: "Cantaloupe melon",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "150g",
    notes: "Limit to this portion size"
  },
  {
    id: 105,
    name: "Coconut (fresh)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "96g",
    notes: "Limit to this portion size"
  },
  {
    id: 106,
    name: "Coconut (dried)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "45g",
    notes: "Limit to this portion size"
  },
  {
    id: 107,
    name: "Grapefruit",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "100g",
    notes: "Limit to this portion size"
  },
  {
    id: 108,
    name: "Grapes (green)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "48g",
    notes: "Limit to this portion size"
  },
  {
    id: 109,
    name: "Grapes (red)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "42g",
    notes: "Limit to this portion size"
  },
  {
    id: 110,
    name: "Guava (tinned)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "54g",
    notes: "Limit to this portion size"
  },
  {
    id: 111,
    name: "Lychee",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "40g",
    notes: "Limit to this portion size"
  },
  {
    id: 112,
    name: "Mango (fresh)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "45g",
    notes: "Limit to this portion size"
  },
  {
    id: 113,
    name: "Melon (honeydew)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "100g",
    notes: "Limit to this portion size"
  },
  {
    id: 114,
    name: "Pineapple (dried)",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "25g",
    notes: "Limit to this portion size"
  },
  {
    id: 115,
    name: "Pomegranate",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "55g",
    notes: "Limit to this portion size"
  },
  {
    id: 116,
    name: "Raspberries",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "65g",
    notes: "Limit to this portion size"
  },
  {
    id: 117,
    name: "Strawberries",
    category: "Fruit",
    fodmapLevel: "Moderate",
    portion: "75g",
    notes: "Limit to this portion size"
  },
  {
    id: 118,
    name: "Apple",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 119,
    name: "Apricot",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in polyols."
  },
  {
    id: 120,
    name: "Blackberries",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 121,
    name: "Cherries",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose and polyols."
  },
  {
    id: 122,
    name: "Cranberries (dried)",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. Often contain added fructose."
  },
  {
    id: 123,
    name: "Currants",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 124,
    name: "Dates",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 125,
    name: "Figs (dried)",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 126,
    name: "Figs (fresh)",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 127,
    name: "Goji berries (dried)",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 128,
    name: "Guava (unripe)",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 129,
    name: "Mango (dried)",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 130,
    name: "Nectarine",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in polyols."
  },
  {
    id: 131,
    name: "Pawpaw (dried)",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 132,
    name: "Peach",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in polyols."
  },
  {
    id: 133,
    name: "Pear",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose and polyols."
  },
  {
    id: 134,
    name: "Persimmon",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 135,
    name: "Plum",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose and polyols."
  },
  {
    id: 136,
    name: "Prunes",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose and polyols."
  },
  {
    id: 137,
    name: "Raisins",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 138,
    name: "Sultanas",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 139,
    name: "Watermelon (seedless)",
    category: "Fruit",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose and polyols."
  },

  // Pasta/Pizza/Noodles
  {
    id: 140,
    name: "Wheat-free pasta",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 141,
    name: "Gluten-free pasta",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 142,
    name: "Buckwheat pasta",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low"
  },
  {
    id: 143,
    name: "Quinoa pasta",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low"
  },
  {
    id: 144,
    name: "Chickpea pasta",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low",
    notes: "Check portion size, as chickpeas can be high FODMAP in large amounts."
  },
  {
    id: 145,
    name: "Wheat-free pizza bases",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Brand example: Schär."
  },
  {
    id: 146,
    name: "Rice noodles",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low"
  },
  {
    id: 147,
    name: "Buckwheat noodles",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low"
  },
  {
    id: 148,
    name: "Kelp noodles",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low"
  },
  {
    id: 149,
    name: "Soba noodles",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "Low",
    notes: "Check ingredients, some may contain wheat."
  },
  {
    id: 150,
    name: "Wheat pasta",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 151,
    name: "Spelt pasta",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 152,
    name: "Gnocchi",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "High",
    notes: "Avoid. Usually contains wheat."
  },
  {
    id: 153,
    name: "Udon noodles",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "High",
    notes: "Avoid. Contains wheat."
  },
  {
    id: 154,
    name: "Ramen noodles",
    category: "Pasta/Pizza/Noodles",
    fodmapLevel: "High",
    notes: "Avoid. Usually contains wheat."
  },

  // Breakfast Cereals
  {
    id: 155,
    name: "Porridge oats",
    category: "Breakfast Cereals",
    fodmapLevel: "Low",
    notes: "Large servings may be high in FODMAPs."
  },
  {
    id: 156,
    name: "Gluten-free cornflakes",
    category: "Breakfast Cereals",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 157,
    name: "Rice Krispies",
    category: "Breakfast Cereals",
    fodmapLevel: "Low",
    portion: "30g",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 158,
    name: "Buckwheat flakes",
    category: "Breakfast Cereals",
    fodmapLevel: "Low"
  },
  {
    id: 159,
    name: "Wheat bran",
    category: "Breakfast Cereals",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 160,
    name: "Wheat germ",
    category: "Breakfast Cereals",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 161,
    name: "Muesli",
    category: "Breakfast Cereals",
    fodmapLevel: "High",
    notes: "Avoid. Usually contains wheat and high FODMAP fruits."
  },

  // Savoury Biscuits/Crackers
  {
    id: 162,
    name: "Gluten-free crackers",
    category: "Savoury Biscuits/Crackers",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Brand example: Schär."
  },
  {
    id: 163,
    name: "Rice crackers",
    category: "Savoury Biscuits/Crackers",
    fodmapLevel: "Low",
    notes: "Plain varieties."
  },
  {
    id: 164,
    name: "Rice cakes",
    category: "Savoury Biscuits/Crackers",
    fodmapLevel: "Low",
    notes: "Plain varieties."
  },
  {
    id: 165,
    name: "Corn cakes",
    category: "Savoury Biscuits/Crackers",
    fodmapLevel: "Low"
  },
  {
    id: 166,
    name: "Oat cakes",
    category: "Savoury Biscuits/Crackers",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 167,
    name: "Water biscuits",
    category: "Savoury Biscuits/Crackers",
    fodmapLevel: "Low",
    notes: "Check ingredients, some may contain wheat."
  },
  {
    id: 168,
    name: "Wheat crackers",
    category: "Savoury Biscuits/Crackers",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 169,
    name: "Rye crispbreads",
    category: "Savoury Biscuits/Crackers",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },

  // Breadcrumbs
  {
    id: 170,
    name: "Wheat-free breadcrumbs",
    category: "Breadcrumbs",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 171,
    name: "Gluten-free breadcrumbs",
    category: "Breadcrumbs",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 172,
    name: "Cornflake crumbs",
    category: "Breadcrumbs",
    fodmapLevel: "Low",
    notes: "Ensure they are gluten-free."
  },
  {
    id: 173,
    name: "Wheat breadcrumbs",
    category: "Breadcrumbs",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 174,
    name: "Panko breadcrumbs",
    category: "Breadcrumbs",
    fodmapLevel: "High",
    notes: "Avoid. Usually made from wheat."
  },

  // fodmap_vegetables

  {
    id: 175,
    name: "Alfalfa",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 176,
    name: "Aubergine",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 177,
    name: "Bamboo shoots",
    category: "Vegetables",
    fodmapLevel: "Low",
    notes: "Both canned and fresh are low FODMAP"
  },
  {
    id: 178,
    name: "Baby sweetcorn (canned)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 179,
    name: "Bean sprouts",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 180,
    name: "Green beans",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 181,
    name: "Beetroot (pickled)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 182,
    name: "Broccoli (heads only)",
    category: "Vegetables",
    fodmapLevel: "Low",
    notes: "Avoid the stalks"
  },
  {
    id: 183,
    name: "Cabbage (red, white, or Chinese)",
    category: "Vegetables",
    fodmapLevel: "Low",
    notes: "Limit to 1 cup or less per meal"
  },
  {
    id: 184,
    name: "Callaloo (tinned in brine)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 185,
    name: "Carrot",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 186,
    name: "Cassava",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 187,
    name: "Celeriac",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 188,
    name: "Chard/Swiss chard",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 189,
    name: "Chicory leaves",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 190,
    name: "Chilli (green, red or pickled Jalapeno)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 191,
    name: "Cho cho",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 192,
    name: "Choy sum",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 193,
    name: "Cucumber",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 194,
    name: "Edamame (frozen soybeans)",
    category: "Vegetables",
    fodmapLevel: "Low",
    portion: "1/2 cup",
    notes: "Limit to this portion size"
  },
  {
    id: 195,
    name: "Endive leaves",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 196,
    name: "Fennel (leaves)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 197,
    name: "Galangal",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 198,
    name: "Ginger",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 199,
    name: "Kale",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 200,
    name: "Lettuce (Cos, round, iceberg, radicchio, red coral, rocket)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 201,
    name: "Mushroom (Oyster or canned)",
    category: "Vegetables",
    fodmapLevel: "Low",
    notes: "Other mushroom varieties may be high FODMAP"
  },
  {
    id: 202,
    name: "Okra",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 203,
    name: "Olives (black or green)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 204,
    name: "Onion (pickled, large)",
    category: "Vegetables",
    fodmapLevel: "Low",
    notes: "Fresh onions are high FODMAP"
  },
  {
    id: 205,
    name: "Cornichons",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 206,
    name: "Pak choy",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 207,
    name: "Parsnips",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 208,
    name: "Potato",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 209,
    name: "Sweetcorn (canned)",
    category: "Vegetables",
    fodmapLevel: "Low",
    portion: "1/2 cob",
    notes: "Limit to this portion size"
  },
  {
    id: 210,
    name: "Water chestnuts",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 211,
    name: "Yam",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 212,
    name: "Pepper (green)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 213,
    name: "Pumpkin (fresh or canned)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 214,
    name: "Radish",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 215,
    name: "Seaweed (nori)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 216,
    name: "Spring onion (green part only)",
    category: "Vegetables",
    fodmapLevel: "Low",
    notes: "White part is high FODMAP"
  },
  {
    id: 217,
    name: "Spinach",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 218,
    name: "Swede",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 219,
    name: "Sweet potato",
    category: "Vegetables",
    fodmapLevel: "Low",
    portion: "1/2 cup",
    notes: "Limit to this portion size"
  },
  {
    id: 220,
    name: "Tenderstem broccoli (stalks only)",
    category: "Vegetables",
    fodmapLevel: "Low",
    notes: "Heads are high FODMAP"
  },
  {
    id: 221,
    name: "Tomatoes (canned)",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 222,
    name: "Turnip",
    category: "Vegetables",
    fodmapLevel: "Low"
  },
  {
    id: 223,
    name: "Artichoke (heart, canned)",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "70g",
    notes: "Limit to this portion size"
  },
  {
    id: 224,
    name: "Beetroot (canned)",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "120g",
    notes: "Limit to this portion size"
  },
  {
    id: 225,
    name: "Brussel sprouts",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "60g",
    notes: "Limit to this portion size"
  },
  {
    id: 226,
    name: "Butternut squash",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "60g",
    notes: "Limit to this portion size"
  },
  {
    id: 227,
    name: "Celery",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "15g",
    notes: "Limit to this portion size"
  },
  {
    id: 228,
    name: "Corn on the cob",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "63g",
    notes: "Limit to this portion size"
  },
  {
    id: 229,
    name: "Courgette",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "75g",
    notes: "Limit to this portion size"
  },
  {
    id: 230,
    name: "Fennel bulb",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "60g",
    notes: "Limit to this portion size"
  },
  {
    id: 231,
    name: "Leek (leaves)",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "75g",
    notes: "Limit to this portion size"
  },
  {
    id: 232,
    name: "Kimchi",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "70g",
    notes: "Limit to this portion size"
  },
  {
    id: 233,
    name: "Marrow",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "75g",
    notes: "Limit to this portion size"
  },
  {
    id: 234,
    name: "Peas (green, canned)",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "55g",
    notes: "Limit to this portion size"
  },
  {
    id: 235,
    name: "Pepper (red)",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "57g",
    notes: "Limit to this portion size"
  },
  {
    id: 236,
    name: "Sundried tomatoes",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "16g",
    notes: "Limit to this portion size"
  },
  {
    id: 237,
    name: "Tomatoes on the vine (raw)",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "75g",
    notes: "Limit to this portion size"
  },
  {
    id: 238,
    name: "Tomatoes (raw)",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "75g",
    notes: "Limit to this portion size"
  },
  {
    id: 239,
    name: "Wakame flakes",
    category: "Vegetables",
    fodmapLevel: "Moderate",
    portion: "10g",
    notes: "Limit to this portion size"
  },
  {
    id: 240,
    name: "Artichoke (Globe, Jerusalem)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 241,
    name: "Asparagus",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 242,
    name: "Beetroot (fresh)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 243,
    name: "Broccoli (stalks only)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 244,
    name: "Cabbage (savoy)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 245,
    name: "Cauliflower",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in mannitol."
  },
  {
    id: 246,
    name: "Cherry tomatoes",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructose."
  },
  {
    id: 247,
    name: "Chilli (raw jalapeno, ancho, dried chipotle)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 248,
    name: "Garlic",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 249,
    name: "Wild garlic",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 250,
    name: "Leek (bulb)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 251,
    name: "Mange tout",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 252,
    name: "Mushroom (Button)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in mannitol."
  },
  {
    id: 253,
    name: "Mushroom (Enoki)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in mannitol."
  },
  {
    id: 254,
    name: "Mushroom (dried Porcini)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in mannitol."
  },
  {
    id: 255,
    name: "Mushroom (Portobello)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in mannitol."
  },
  {
    id: 256,
    name: "Mushroom (Shiitake)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in mannitol."
  },
  {
    id: 257,
    name: "Mushroom (Chanterelle)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in mannitol."
  },
  {
    id: 258,
    name: "Onions (Shallots)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 259,
    name: "Onions (red onion)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 260,
    name: "Onions (white part of spring onions)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 261,
    name: "Onions (white onion)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 262,
    name: "Peas",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans and GOS."
  },
  {
    id: 263,
    name: "Sugar snap peas",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 264,
    name: "Tenderstem broccoli (heads only)",
    category: "Vegetables",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },

  // Milk
  {
    id: 265,
    name: "Lactose-free milk",
    category: "Milk",
    fodmapLevel: "Low",
    notes: "E.g., Lactofree brand. Ensure milk is calcium enriched."
  },
  {
    id: 266,
    name: "Almond milk",
    category: "Milk",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Ensure milk is calcium enriched."
  },
  {
    id: 267,
    name: "Hemp milk",
    category: "Milk",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Ensure milk is calcium enriched."
  },
  {
    id: 268,
    name: "Macadamia milk",
    category: "Milk",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Ensure milk is calcium enriched."
  },
  {
    id: 269,
    name: "Rice milk",
    category: "Milk",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Ensure milk is calcium enriched."
  },
  {
    id: 270,
    name: "Quinoa milk",
    category: "Milk",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Ensure milk is calcium enriched."
  },
  {
    id: 271,
    name: "Coconut milk powder",
    category: "Milk",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 272,
    name: "Cow's milk",
    category: "Milk",
    fodmapLevel: "High",
    portionLevels: [
      { portion: "60ml", fodmapLevel: "Moderate" },
      { portion: ">60ml", fodmapLevel: "High" }
    ],
    notes: "Contains lactose. Small amounts may be tolerated."
  },
  {
    id: 273,
    name: "Goat's milk",
    category: "Milk",
    fodmapLevel: "High",
    portionLevels: [
      { portion: "80ml", fodmapLevel: "Moderate" },
      { portion: ">80ml", fodmapLevel: "High" }
    ],
    notes: "Contains lactose. Small amounts may be tolerated."
  },
  {
    id: 274,
    name: "Sheep's milk",
    category: "Milk",
    fodmapLevel: "High",
    notes: "Contains lactose."
  },
  {
    id: 275,
    name: "Coconut milk (canned)",
    category: "Milk",
    fodmapLevel: "Moderate",
    portion: "<120ml",
    notes: "For cooking. Larger amounts may be high FODMAP."
  },
  {
    id: 276,
    name: "Coconut milk (UHT)",
    category: "Milk",
    fodmapLevel: "Low",
    portion: "150ml",
    notes: "Long life, unsweetened."
  },
  {
    id: 277,
    name: "Oat milk",
    category: "Milk",
    fodmapLevel: "Moderate",
    portion: "<30ml",
    notes: "Larger amounts are high FODMAP."
  },
  {
    id: 278,
    name: "Soya milk (sweetened)",
    category: "Milk",
    fodmapLevel: "Moderate",
    portion: "60ml",
    notes: "Made from hulled soya beans."
  },
  {
    id: 279,
    name: "Soya milk (unsweetened)",
    category: "Milk",
    fodmapLevel: "Low",
    portion: "120ml",
    notes: "Made from hulled soya beans."
  },
  {
    id: 280,
    name: "A2 milk",
    category: "Milk",
    fodmapLevel: "High",
    portionLevels: [
      { portion: "35ml", fodmapLevel: "Moderate" },
      { portion: ">35ml", fodmapLevel: "High" }
    ],
    notes: "Contains lactose, but may be better tolerated by some people."
  },

  // Yoghurts
  {
    id: 281,
    name: "Lactose-free yoghurt",
    category: "Yoghurts",
    fodmapLevel: "Low",
    notes: "E.g., Lactofree brand. Check for other FODMAP ingredients."
  },
  {
    id: 282,
    name: "Coconut yoghurt",
    category: "Yoghurts",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 283,
    name: "Natural yoghurt",
    category: "Yoghurts",
    fodmapLevel: "Moderate",
    portion: "3 tbsp",
    notes: "Larger amounts are high FODMAP."
  },
  {
    id: 284,
    name: "Greek yoghurt",
    category: "Yoghurts",
    fodmapLevel: "Moderate",
    portion: "2 tbsp",
    notes: "Larger amounts are high FODMAP."
  },
  {
    id: 285,
    name: "Cow's milk yoghurt",
    category: "Yoghurts",
    fodmapLevel: "High",
    notes: "Contains lactose."
  },
  {
    id: 286,
    name: "Goat's milk yoghurt",
    category: "Yoghurts",
    fodmapLevel: "High",
    notes: "Contains lactose."
  },
  {
    id: 287,
    name: "Drinking yoghurt",
    category: "Yoghurts",
    fodmapLevel: "High",
    notes: "Contains lactose."
  },
  {
    id: 288,
    name: "Fromage frais",
    category: "Yoghurts",
    fodmapLevel: "High",
    notes: "Contains lactose."
  },

  // Cheese
  {
    id: 289,
    name: "Cheddar",
    category: "Cheese",
    fodmapLevel: "Low",
    notes: "Hard cheeses are generally low in lactose."
  },
  {
    id: 290,
    name: "Parmesan",
    category: "Cheese",
    fodmapLevel: "Low",
    notes: "Hard cheeses are generally low in lactose."
  },
  {
    id: 291,
    name: "Mozzarella",
    category: "Cheese",
    fodmapLevel: "Low",
    notes: "Low lactose content."
  },
  {
    id: 292,
    name: "Feta",
    category: "Cheese",
    fodmapLevel: "Low",
    notes: "Low lactose content."
  },
  {
    id: 293,
    name: "Brie",
    category: "Cheese",
    fodmapLevel: "Low",
    notes: "Low lactose content."
  },
  {
    id: 294,
    name: "Camembert",
    category: "Cheese",
    fodmapLevel: "Low",
    notes: "Low lactose content."
  },
  {
    id: 295,
    name: "Goat's cheese",
    category: "Cheese",
    fodmapLevel: "Low",
    notes: "Hard varieties are low in lactose."
  },
  {
    id: 296,
    name: "Haloumi",
    category: "Cheese",
    fodmapLevel: "Moderate",
    portion: "2 slices (60g)",
    notes: "Limit to this portion size."
  },
  {
    id: 297,
    name: "Cream cheese",
    category: "Cheese",
    fodmapLevel: "Moderate",
    portion: "2 tbsp",
    notes: "Limit to this portion size."
  },
  {
    id: 298,
    name: "Cottage cheese",
    category: "Cheese",
    fodmapLevel: "Moderate",
    portion: "2 tbsp",
    notes: "Limit to this portion size."
  },
  {
    id: 299,
    name: "Ricotta",
    category: "Cheese",
    fodmapLevel: "Moderate",
    portion: "2 tbsp",
    notes: "Limit to this portion size."
  },
  {
    id: 300,
    name: "Mascarpone",
    category: "Cheese",
    fodmapLevel: "High",
    notes: "Contains significant amounts of lactose."
  },
  {
    id: 301,
    name: "Processed cheese",
    category: "Cheese",
    fodmapLevel: "High",
    notes: "Often contains added milk solids, increasing lactose content."
  },

  // Pulses and Legumes
  {
    id: 302,
    name: "Mung beans, sprouted",
    category: "Pulses and Legumes",
    fodmapLevel: "Low"
  },
  {
    id: 303,
    name: "Urid dahl",
    category: "Pulses and Legumes",
    fodmapLevel: "Low"
  },
  {
    id: 304,
    name: "Chickpeas (canned)",
    category: "Pulses and Legumes",
    fodmapLevel: "Moderate",
    portion: "84g",
    portionLevels: [
      { portion: "84g", fodmapLevel: "Low" },
      { portion: ">84g", fodmapLevel: "High" }
    ],
    notes: "Rinse well before use."
  },
  {
    id: 305,
    name: "Hummus",
    category: "Pulses and Legumes",
    fodmapLevel: "Moderate",
    portion: "20g",
    portionLevels: [
      { portion: "20g", fodmapLevel: "Low" },
      { portion: ">20g", fodmapLevel: "High" }
    ]
  },
  {
    id: 306,
    name: "Lentils, green or red (boiled)",
    category: "Pulses and Legumes",
    fodmapLevel: "Moderate",
    portion: "46g",
    portionLevels: [
      { portion: "46g", fodmapLevel: "Low" },
      { portion: ">46g", fodmapLevel: "High" }
    ]
  },
  {
    id: 307,
    name: "Lentils (canned)",
    category: "Pulses and Legumes",
    fodmapLevel: "Moderate",
    portion: "65g",
    portionLevels: [
      { portion: "65g", fodmapLevel: "Low" },
      { portion: ">65g", fodmapLevel: "High" }
    ],
    notes: "Rinse well before use."
  },
  {
    id: 308,
    name: "Lentils (Puy, cooked)",
    category: "Pulses and Legumes",
    fodmapLevel: "Moderate",
    portion: "30g",
    portionLevels: [
      { portion: "30g", fodmapLevel: "Low" },
      { portion: ">30g", fodmapLevel: "High" }
    ]
  },
  {
    id: 309,
    name: "Broad beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 310,
    name: "Soy beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 311,
    name: "Butter beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 312,
    name: "Baked beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS and fructans."
  },
  {
    id: 313,
    name: "Kidney beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 314,
    name: "Adzuki beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 315,
    name: "Black beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 316,
    name: "Borlotti beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 317,
    name: "Haricot beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 318,
    name: "Lima beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 319,
    name: "Mung beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS. Sprouted mung beans are low FODMAP."
  },
  {
    id: 320,
    name: "Pinto beans",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 321,
    name: "Chana dal",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 322,
    name: "Falafel",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS and often contains high FODMAP ingredients like garlic and onion."
  },
  {
    id: 323,
    name: "Lentil burger",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS and often contains high FODMAP ingredients."
  },
  {
    id: 324,
    name: "Split peas, boiled",
    category: "Pulses and Legumes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },

  // Fish
  {
    id: 325,
    name: "Fresh white fish",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh fish is naturally low in FODMAPs."
  },
  {
    id: 326,
    name: "Fresh salmon",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh fish is naturally low in FODMAPs."
  },
  {
    id: 327,
    name: "Fresh tuna",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh fish is naturally low in FODMAPs."
  },
  {
    id: 328,
    name: "Fresh cod",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh fish is naturally low in FODMAPs."
  },
  {
    id: 329,
    name: "Fresh haddock",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh fish is naturally low in FODMAPs."
  },
  {
    id: 330,
    name: "Canned tuna in water",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "Ensure no high FODMAP ingredients are added."
  },
  {
    id: 331,
    name: "Canned salmon",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "Ensure no high FODMAP ingredients are added."
  },
  {
    id: 332,
    name: "Canned sardines in oil",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "Ensure no high FODMAP ingredients are added."
  },
  {
    id: 333,
    name: "Smoked salmon",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "Check for any added high FODMAP ingredients in flavored varieties."
  },
  {
    id: 334,
    name: "Fresh prawns",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh shellfish is naturally low in FODMAPs."
  },
  {
    id: 335,
    name: "Fresh mussels",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh shellfish is naturally low in FODMAPs."
  },
  {
    id: 336,
    name: "Fresh oysters",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh shellfish is naturally low in FODMAPs."
  },
  {
    id: 337,
    name: "Fresh crab",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh shellfish is naturally low in FODMAPs."
  },
  {
    id: 338,
    name: "Fresh lobster",
    category: "Fish",
    fodmapLevel: "Low",
    notes: "All fresh shellfish is naturally low in FODMAPs."
  },
  {
    id: 339,
    name: "Fish or shellfish in batter or breadcrumbs",
    category: "Fish",
    fodmapLevel: "Moderate",
    notes: "FODMAP content depends on the batter or breadcrumb ingredients. Choose gluten-free options when possible."
  },

  // Meat and Poultry
  {
    id: 340,
    name: "Fresh beef",
    category: "Meat and Poultry",
    fodmapLevel: "Low",
    notes: "All fresh, unprocessed meats are naturally low in FODMAPs."
  },
  {
    id: 341,
    name: "Fresh chicken",
    category: "Meat and Poultry",
    fodmapLevel: "Low",
    notes: "All fresh, unprocessed poultry is naturally low in FODMAPs."
  },
  {
    id: 342,
    name: "Fresh turkey",
    category: "Meat and Poultry",
    fodmapLevel: "Low",
    notes: "All fresh, unprocessed poultry is naturally low in FODMAPs."
  },
  {
    id: 343,
    name: "Fresh lamb",
    category: "Meat and Poultry",
    fodmapLevel: "Low",
    notes: "All fresh, unprocessed meats are naturally low in FODMAPs."
  },
  {
    id: 344,
    name: "Fresh pork",
    category: "Meat and Poultry",
    fodmapLevel: "Low",
    notes: "All fresh, unprocessed meats are naturally low in FODMAPs."
  },
  {
    id: 345,
    name: "Bacon",
    category: "Meat and Poultry",
    fodmapLevel: "Low",
    notes: "Check for any added high FODMAP ingredients or sweeteners."
  },
  {
    id: 346,
    name: "Ham",
    category: "Meat and Poultry",
    fodmapLevel: "Low",
    notes: "Check for any added high FODMAP ingredients or sweeteners."
  },
  {
    id: 347,
    name: "Fresh duck",
    category: "Meat and Poultry",
    fodmapLevel: "Low",
    notes: "All fresh, unprocessed poultry is naturally low in FODMAPs."
  },
  {
    id: 348,
    name: "Meat or poultry in breadcrumbs",
    category: "Meat and Poultry",
    fodmapLevel: "Moderate",
    notes: "FODMAP content depends on the breadcrumb ingredients. Choose gluten-free options when possible."
  },

  // Nuts & Seeds
  {
    id: 349,
    name: "Almonds",
    category: "Nuts & Seeds",
    fodmapLevel: "Moderate",
    portion: "10 nuts (12g)",
    portionLevels: [
      { portion: "10 nuts (12g)", fodmapLevel: "Low" },
      { portion: ">10 nuts", fodmapLevel: "High" }
    ],
    notes: "Limit intake to 10 almonds per sitting."
  },
  {
    id: 350,
    name: "Brazil nuts",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 351,
    name: "Chestnuts",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 352,
    name: "Hazelnuts",
    category: "Nuts & Seeds",
    fodmapLevel: "Moderate",
    portion: "30g",
    portionLevels: [
      { portion: "30g", fodmapLevel: "Low" },
      { portion: ">30g", fodmapLevel: "High" }
    ],
    notes: "Limit intake to 30g per sitting."
  },
  {
    id: 353,
    name: "Macadamia nuts",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 354,
    name: "Peanuts",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 355,
    name: "Pecan nuts",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 356,
    name: "Pine nuts",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 357,
    name: "Walnuts",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 358,
    name: "Chia seeds",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 359,
    name: "Egusi seeds",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 360,
    name: "Hemp seeds",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 361,
    name: "Poppy seeds",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 362,
    name: "Pumpkin seeds",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 363,
    name: "Sesame seeds",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 364,
    name: "Sunflower seeds",
    category: "Nuts & Seeds",
    fodmapLevel: "Low"
  },
  {
    id: 365,
    name: "Linseeds (Flaxseeds)",
    category: "Nuts & Seeds",
    fodmapLevel: "Low",
    portion: "15g",
    notes: "Limit to this portion size."
  },
  {
    id: 366,
    name: "Tahini",
    category: "Nuts & Seeds",
    fodmapLevel: "Moderate",
    portion: "30g",
    portionLevels: [
      { portion: "30g", fodmapLevel: "Low" },
      { portion: ">30g", fodmapLevel: "High" }
    ],
    notes: "Limit intake to 30g per sitting."
  },
  {
    id: 367,
    name: "Cashew nuts",
    category: "Nuts & Seeds",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 368,
    name: "Pistachios",
    category: "Nuts & Seeds",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 369,
    name: "Caraway seeds",
    category: "Nuts & Seeds",
    fodmapLevel: "Moderate",
    portion: "15g",
    portionLevels: [
      { portion: "15g", fodmapLevel: "Low" },
      { portion: ">15g", fodmapLevel: "High" }
    ],
    notes: "Limit intake to 15g per sitting."
  },

  // Vegetarian Substitutes
  {
    id: 370,
    name: "Quorn mince",
    category: "Vegetarian Substitutes",
    fodmapLevel: "Low",
    notes: "Check for added high FODMAP ingredients in flavored varieties."
  },
  {
    id: 371,
    name: "Tempeh",
    category: "Vegetarian Substitutes",
    fodmapLevel: "Low"
  },
  {
    id: 372,
    name: "Tofu (firm and drained)",
    category: "Vegetarian Substitutes",
    fodmapLevel: "Low"
  },
  {
    id: 373,
    name: "Quorn mince containing onion",
    category: "Vegetarian Substitutes",
    fodmapLevel: "High",
    notes: "Avoid. Contains high FODMAP ingredients."
  },
  {
    id: 374,
    name: "Soy protein textured (TVP)",
    category: "Vegetarian Substitutes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 375,
    name: "Tofu (silken)",
    category: "Vegetarian Substitutes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },
  {
    id: 376,
    name: "Soya beans",
    category: "Vegetarian Substitutes",
    fodmapLevel: "High",
    notes: "Avoid. High in GOS."
  },

  // Fats and Oils
  {
    id: 377,
    name: "Butter",
    category: "Fats and Oils",
    fodmapLevel: "Low"
  },
  {
    id: 378,
    name: "Cream (double)",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Use in moderation as high fat content can trigger IBS symptoms in some people."
  },
  {
    id: 379,
    name: "Cream (single)",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Use in moderation as high fat content can trigger IBS symptoms in some people."
  },
  {
    id: 380,
    name: "Whipping cream",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Use in moderation as high fat content can trigger IBS symptoms in some people."
  },
  {
    id: 381,
    name: "Sour cream",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Use in moderation as high fat content can trigger IBS symptoms in some people."
  },
  {
    id: 382,
    name: "Crème fraiche",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Use in moderation as high fat content can trigger IBS symptoms in some people."
  },
  {
    id: 383,
    name: "Coconut cream",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Use in moderation as high fat content can trigger IBS symptoms in some people."
  },
  {
    id: 384,
    name: "Cooking oils",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "All types of cooking oils are low FODMAP."
  },
  {
    id: 385,
    name: "Margarine",
    category: "Fats and Oils",
    fodmapLevel: "Low"
  },
  {
    id: 386,
    name: "Low fat spreads",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Check for added high FODMAP ingredients."
  },
  {
    id: 387,
    name: "Ghee",
    category: "Fats and Oils",
    fodmapLevel: "Low"
  },
  {
    id: 388,
    name: "Lard",
    category: "Fats and Oils",
    fodmapLevel: "Low"
  },
  {
    id: 389,
    name: "Suet",
    category: "Fats and Oils",
    fodmapLevel: "Low"
  },
  {
    id: 390,
    name: "Garlic infused oil",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "FODMAPs are not fat soluble, so garlic-infused oil is low FODMAP."
  },
  {
    id: 391,
    name: "Peanut butter",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Choose varieties without added high FODMAP ingredients."
  },
  {
    id: 392,
    name: "Mayonnaise",
    category: "Fats and Oils",
    fodmapLevel: "Low",
    notes: "Choose varieties without added high FODMAP ingredients like garlic or onion."
  },
  {
    id: 393,
    name: "Pesto sauce",
    category: "Fats and Oils",
    fodmapLevel: "Moderate",
    portion: "20g",
    portionLevels: [
      { portion: "20g", fodmapLevel: "Low" },
      { portion: ">20g", fodmapLevel: "High" }
    ],
    notes: "Limit to 20g per serving. Traditional pesto often contains garlic, which is high FODMAP."
  },
  {
    id: 394,
    name: "Almond butter",
    category: "Fats and Oils",
    fodmapLevel: "Moderate",
    portion: "32g",
    portionLevels: [
      { portion: "32g", fodmapLevel: "Low" },
      { portion: ">32g", fodmapLevel: "High" }
    ],
    notes: "Limit to 32g per serving."
  },
  {
    id: 395,
    name: "Salad dressings containing onion and garlic",
    category: "Fats and Oils",
    fodmapLevel: "High",
    notes: "Avoid. Contains high FODMAP ingredients."
  },
  // Savoury snacks
  {
    id: 396,
    name: "Plain or ready salted crisps",
    category: "Savoury Snacks",
    fodmapLevel: "Low",
    notes: "Check ingredients for fructose, sorbitol, onion or garlic."
  },
  {
    id: 397,
    name: "Gluten-free breadsticks",
    category: "Savoury Snacks",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Brand example: Schär."
  },
  {
    id: 398,
    name: "Pretzels",
    category: "Savoury Snacks",
    fodmapLevel: "Low",
    notes: "Choose gluten-free varieties if available."
  },
  {
    id: 399,
    name: "Corn chips (plain)",
    category: "Savoury Snacks",
    fodmapLevel: "Low",
    notes: "Check for added high FODMAP flavourings."
  },
  {
    id: 400,
    name: "Flavoured crisps containing onion and garlic",
    category: "Savoury Snacks",
    fodmapLevel: "High",
    notes: "Avoid. Contains high FODMAP ingredients."
  },

  // Pastry
  {
    id: 401,
    name: "Wheat-free pastry",
    category: "Pastry",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 402,
    name: "Gluten-free pastry",
    category: "Pastry",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 403,
    name: "Wonton wrapper",
    category: "Pastry",
    fodmapLevel: "Low",
    notes: "Check ingredients, some may contain wheat."
  },
  {
    id: 404,
    name: "Filo pastry",
    category: "Pastry",
    fodmapLevel: "Moderate",
    portion: "40g",
    portionLevels: [
      { portion: "40g", fodmapLevel: "Low" },
      { portion: ">40g", fodmapLevel: "High" }
    ],
    notes: "Limit to 40g per serving."
  },
  {
    id: 405,
    name: "Wheat-based pastry",
    category: "Pastry",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 406,
    name: "Tempura batter",
    category: "Pastry",
    fodmapLevel: "High",
    notes: "Avoid. Usually contains wheat flour."
  },

  // Sugar, Preserves and Sweeteners
  {
    id: 407,
    name: "Glucose",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 408,
    name: "Sucrose",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 409,
    name: "Sugar",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 410,
    name: "Dextrose",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 411,
    name: "Maple syrup",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Low",
    notes: "Use in moderation."
  },
  {
    id: 412,
    name: "Treacle",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Low",
    notes: "Use in moderation."
  },
  {
    id: 413,
    name: "Jam (no added fructose)",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Low",
    notes: "Check ingredients for high FODMAP fruits or sweeteners."
  },
  {
    id: 414,
    name: "Marmalade (no added fructose)",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Low",
    notes: "Check ingredients for high FODMAP fruits or sweeteners."
  },
  {
    id: 415,
    name: "Golden syrup",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Moderate",
    portion: "12g",
    portionLevels: [
      { portion: "12g", fodmapLevel: "Low" },
      { portion: ">12g", fodmapLevel: "High" }
    ],
    notes: "Limit to 12g per serving."
  },
  {
    id: 416,
    name: "Quince paste",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "Moderate",
    portion: "27g",
    portionLevels: [
      { portion: "27g", fodmapLevel: "Low" },
      { portion: ">27g", fodmapLevel: "High" }
    ],
    notes: "Limit to 27g per serving."
  },
  {
    id: 417,
    name: "Agave syrup",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. High in fructose."
  },
  {
    id: 418,
    name: "Honey",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. High in fructose."
  },
  {
    id: 419,
    name: "Molasses syrup",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. High in fructose."
  },
  {
    id: 420,
    name: "Jam (mixed berries)",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. Often contains high FODMAP fruits and added fructose."
  },
  {
    id: 421,
    name: "Jams and marmalades containing fructose",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. High in fructose."
  },
  {
    id: 422,
    name: "Jams and marmalades containing polyols",
    category: "Sugar, Preserves and Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. Contains polyols."
  },
  // Artificial Sweeteners
  {
    id: 423,
    name: "Aspartame",
    category: "Artificial Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 424,
    name: "Acesulfame K",
    category: "Artificial Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 425,
    name: "Saccharin",
    category: "Artificial Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 426,
    name: "Sucralose",
    category: "Artificial Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 427,
    name: "Stevia",
    category: "Artificial Sweeteners",
    fodmapLevel: "Low"
  },
  {
    id: 428,
    name: "Sorbitol",
    category: "Artificial Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. High in polyols."
  },
  {
    id: 429,
    name: "Mannitol",
    category: "Artificial Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. High in polyols."
  },
  {
    id: 430,
    name: "Xylitol",
    category: "Artificial Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. High in polyols."
  },
  {
    id: 431,
    name: "Isomalt",
    category: "Artificial Sweeteners",
    fodmapLevel: "High",
    notes: "Avoid. High in polyols."
  },

  // Confectionary
  {
    id: 432,
    name: "Cocoa powder",
    category: "Confectionary",
    fodmapLevel: "Low"
  },
  {
    id: 433,
    name: "Dark chocolate",
    category: "Confectionary",
    fodmapLevel: "Moderate",
    portion: "80g",
    portionLevels: [
      { portion: "80g", fodmapLevel: "Low" },
      { portion: ">80g", fodmapLevel: "High" }
    ],
    notes: "Limit to 80g per serving."
  },
  {
    id: 434,
    name: "Milk chocolate",
    category: "Confectionary",
    fodmapLevel: "Moderate",
    portion: "30g",
    portionLevels: [
      { portion: "30g", fodmapLevel: "Low" },
      { portion: ">30g", fodmapLevel: "High" }
    ],
    notes: "Limit to 30g per serving."
  },
  {
    id: 435,
    name: "White chocolate",
    category: "Confectionary",
    fodmapLevel: "Moderate",
    portion: "30g",
    portionLevels: [
      { portion: "30g", fodmapLevel: "Low" },
      { portion: ">30g", fodmapLevel: "High" }
    ],
    notes: "Limit to 30g per serving."
  },
  {
    id: 436,
    name: "Sugar-free mints",
    category: "Confectionary",
    fodmapLevel: "High",
    notes: "Avoid. Often contain polyols."
  },
  {
    id: 437,
    name: "Sugar-free chewing gum",
    category: "Confectionary",
    fodmapLevel: "High",
    notes: "Avoid. Often contain polyols."
  },
  {
    id: 438,
    name: "Sugar-free sweets",
    category: "Confectionary",
    fodmapLevel: "High",
    notes: "Avoid. Often contain polyols."
  },
  {
    id: 439,
    name: "Sugar-free chocolate",
    category: "Confectionary",
    fodmapLevel: "High",
    notes: "Avoid. Often contain polyols."
  },
  {
    id: 440,
    name: "Sweets containing fructose",
    category: "Confectionary",
    fodmapLevel: "High",
    notes: "Avoid. High in fructose."
  },
  {
    id: 441,
    name: "Carob powder",
    category: "Confectionary",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },

  // Cakes and Biscuits
  {
    id: 442,
    name: "Gluten-free biscuits",
    category: "Cakes and Biscuits",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients. Brand example: Schär."
  },
  {
    id: 443,
    name: "Oat-based biscuits",
    category: "Cakes and Biscuits",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 444,
    name: "Flourless cakes",
    category: "Cakes and Biscuits",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 445,
    name: "Meringues",
    category: "Cakes and Biscuits",
    fodmapLevel: "Low",
    notes: "Check for other FODMAP ingredients."
  },
  {
    id: 446,
    name: "Wheat-based biscuits",
    category: "Cakes and Biscuits",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 447,
    name: "Wheat-based cakes",
    category: "Cakes and Biscuits",
    fodmapLevel: "High",
    notes: "Avoid. Contains fructans."
  },
  {
    id: 448,
    name: "Cereal bars containing high FODMAP ingredients",
    category: "Cakes and Biscuits",
    fodmapLevel: "High",
    notes: "Avoid. Often contain dried fruits, honey, or other high FODMAP ingredients."
  },

  // Drinks
  {
    id: 449,
    name: "Water",
    category: "Drinks",
    fodmapLevel: "Low"
  },
  {
    id: 450,
    name: "De-caffeinated drinks",
    category: "Drinks",
    fodmapLevel: "Low",
    notes: "Check for added sweeteners or other FODMAP ingredients."
  },
  {
    id: 451,
    name: "Cranberry juice",
    category: "Drinks",
    fodmapLevel: "Low",
    notes: "Check for added sweeteners."
  },
  {
    id: 452,
    name: "Green tea",
    category: "Drinks",
    fodmapLevel: "Low"
  },
  {
    id: 453,
    name: "Peppermint tea",
    category: "Drinks",
    fodmapLevel: "Low"
  },
  {
    id: 454,
    name: "Tomato juice",
    category: "Drinks",
    fodmapLevel: "Low"
  },
  {
    id: 455,
    name: "Coconut water",
    category: "Drinks",
    fodmapLevel: "Moderate",
    portion: "150g",
    portionLevels: [
      { portion: "150g", fodmapLevel: "Low" },
      { portion: ">150g", fodmapLevel: "High" }
    ],
    notes: "Limit to 150g per serving."
  },
  {
    id: 456,
    name: "Apple juice",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 457,
    name: "Pear juice",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose and sorbitol."
  },
  {
    id: 458,
    name: "Mango juice",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. High in excess fructose."
  },
  {
    id: 459,
    name: "Chai tea",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. Often contains high FODMAP ingredients like honey or milk."
  },
  {
    id: 460,
    name: "Chamomile tea",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. Contains excess fructans."
  },
  {
    id: 461,
    name: "Dandelion tea",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. Contains excess fructans."
  },
  {
    id: 462,
    name: "Fennel tea",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. Contains excess fructans."
  },
  {
    id: 463,
    name: "Oolong tea",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. Contains excess fructans."
  },
  {
    id: 464,
    name: "Kombucha tea",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. Often contains high FODMAP ingredients."
  },
  {
    id: 465,
    name: "Aloe drinks",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. High in fructans."
  },
  {
    id: 466,
    name: "Fruit cordials",
    category: "Drinks",
    fodmapLevel: "High",
    notes: "Avoid. Often high in fructose or contain high FODMAP fruits."
  },

  // Alcohol
  {
    id: 467,
    name: "Beer",
    category: "Alcohol",
    fodmapLevel: "Low",
    notes: "Limit to one serving. Gluten-free beer is preferable."
  },
  {
    id: 468,
    name: "Chinese (Shaoxing) cooking wine",
    category: "Alcohol",
    fodmapLevel: "Low"
  },
  {
    id: 469,
    name: "Gin",
    category: "Alcohol",
    fodmapLevel: "Low",
    notes: "Limit intake. Alcohol can be a gut irritant."
  },
  {
    id: 470,
    name: "Vodka",
    category: "Alcohol",
    fodmapLevel: "Low",
    notes: "Limit intake. Alcohol can be a gut irritant."
  },
  {
    id: 471,
    name: "Whiskey",
    category: "Alcohol",
    fodmapLevel: "Low",
    notes: "Limit intake. Alcohol can be a gut irritant."
  },
  {
    id: 472,
    name: "Wine (red, white, sparkling)",
    category: "Alcohol",
    fodmapLevel: "Low",
    notes: "Limit to one glass (150ml) per sitting. Alcohol can be a gut irritant."
  },
  {
    id: 473,
    name: "Dessert wine",
    category: "Alcohol",
    fodmapLevel: "High",
    notes: "Avoid. High in fructose."
  },
  {
    id: 474,
    name: "Rum",
    category: "Alcohol",
    fodmapLevel: "High",
    notes: "Avoid. Often contains added fructose."
  },

  // Miscellaneous
  {
    id: 475,
    name: "Protein supplement",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    notes: "Check for added high FODMAP ingredients."
  },
  {
    id: 476,
    name: "Nutritional yeast",
    category: "Miscellaneous",
    fodmapLevel: "Low"
  },
  {
    id: 477,
    name: "Miso paste",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    notes: "Use in small amounts."
  },
  {
    id: 478,
    name: "Vinegar",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    notes: "All types of vinegar are low FODMAP."
  },
  {
    id: 479,
    name: "Soy sauce",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    notes: "The small amount of wheat in soy sauce is acceptable on a low FODMAP diet."
  },
  {
    id: 480,
    name: "Worcestershire sauce",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    notes: "Check for high FODMAP ingredients in some brands."
  },
  {
    id: 481,
    name: "Fish sauce",
    category: "Miscellaneous",
    fodmapLevel: "Low"
  },
  {
    id: 482,
    name: "Oyster sauce",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    notes: "Use in small amounts. Check for high FODMAP additives."
  },
  {
    id: 483,
    name: "Balsamic vinegar",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    portion: "1 tablespoon",
    notes: "Limit to 1 tablespoon per sitting."
  },
  {
    id: 484,
    name: "Curry powder",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    notes: "Check for added onion or garlic powder."
  },
  {
    id: 485,
    name: "Mustard",
    category: "Miscellaneous",
    fodmapLevel: "Low",
    notes: "Limit to 1 tablespoon per sitting."
  },
  {
    id: 486,
    name: "Wasabi paste",
    category: "Miscellaneous",
    fodmapLevel: "Low"
  },
  {
    id: 487,
    name: "Gochujang paste",
    category: "Miscellaneous",
    fodmapLevel: "Moderate",
    portion: "1 teaspoon",
    notes: "Limit to 1 teaspoon per sitting."
  },
  // Additional items
  {
    id: 488,
    name: "Jelly",
    category: "Desserts",
    fodmapLevel: "Low",
    notes: "Check for high FODMAP fruit flavors or artificial sweeteners."
  },
  {
    id: 489,
    name: "Custard",
    category: "Desserts",
    fodmapLevel: "Moderate",
    portion: "60ml",
    portionLevels: [
      { portion: "60ml", fodmapLevel: "Low" },
      { portion: ">60ml", fodmapLevel: "High" }
    ],
    notes: "Lactose-free custard is preferable. Limit to 60ml per serving."
  },
  {
    id: 490,
    name: "Vanilla ice-cream",
    category: "Desserts",
    fodmapLevel: "Moderate",
    portion: "2 scoops (88g)",
    portionLevels: [
      { portion: "2 scoops (88g)", fodmapLevel: "Low" },
      { portion: ">2 scoops", fodmapLevel: "High" }
    ],
    notes: "Lactose-free ice-cream is preferable. Limit to 2 scoops per serving."
  },
  {
    id: 491,
    name: "Eggs",
    category: "Eggs",
    fodmapLevel: "Low",
    notes: "All types of eggs are low FODMAP."
  },
  {
    id: 492,
    name: "Scotch eggs",
    category: "Eggs",
    fodmapLevel: "Moderate",
    notes: "FODMAP content may vary depending on the coating. Choose versions with low FODMAP breadcrumbs if available."
  }
];