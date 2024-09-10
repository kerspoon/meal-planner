import { MealType, Recipe } from "./types";

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Quick Thai Okra with Oyster Mushrooms & Coconut Milk",
    type: MealType.Dinner,
    ingredients: [
      { name: "okra", quantity: ["g", 250] },
      { name: "shiitake mushrooms", quantity: ["g", 125] },
      { name: "lemongrass", quantity: ["stick", 1] },
      { name: "kaffir lime leaves", quantity: ["", 2] },
      { name: "sea salt", quantity: ["tsp", 1] },
      { name: "sesame oil", quantity: ["tbsp", 1] },
      { name: "garlic", quantity: ["cloves", 2] },
      { name: "ginger", quantity: ["cm", 5] },
      { name: "tom yum paste", quantity: ["tbsp", 2] },
      { name: "coconut milk", quantity: ["ml", 400] },
      { name: "soy sauce", quantity: ["to taste", 0] },
      { name: "red chillies", quantity: ["", 1] },
      { name: "spring onions", quantity: ["", 3] }
    ],
    instructions: `

1. Preheat the oven to 180°C fan/200°C/gas 6. Mix the okra, mushrooms, lemongrass, lime leaves and salt with the oil in a small roasting tin, then transfer to the oven and roast for 15 minutes.
2. Mix together the garlic, ginger, tom yum paste, coconut milk and water. Once the vegetables have had 15 minutes, pour the coconut mixture over, then return to the oven for a further 15 minutes.
3. Taste and season with soy sauce, scatter over the red chilli and spring onions and serve with rice or quick cook noodles.

  `
  },
  {
    id: 2,
    name: "Crispy Tamarind Sprouts with Peanuts & Shallots",
    type: MealType.Dinner,
    ingredients: [
      { name: "brussel sprouts", quantity: ["g", 500] },
      { name: "banana shallots", quantity: ["g", 200] },
      { name: "chickpeas", quantity: ["g", 400] },
      { name: "ground cumin", quantity: ["tsp", 1] },
      { name: "ground coriander", quantity: ["tsp", 1] },
      { name: "chilli powder", quantity: ["tsp", 1] },
      { name: "vegetable oil", quantity: ["tbsp", 1] },
      { name: "sea salt", quantity: ["tsp", 2] },
      { name: "vegetable oil", quantity: ["tbsp", 1] },
      { name: "tamarind paste", quantity: ["tbsp", 1] },
      { name: "brown sugar", quantity: ["tsp", 1] },
      { name: "salted peanuts", quantity: ["g", 20] },
      { name: "coriander", quantity: ["handful", 1] },
      { name: "mango powder", quantity: ["tsp", 1] },
      { name: "coconut yogurt", quantity: ["tbsp", 4] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6. Mix the sprouts with the shallots, chickpeas, spices, oil and salt in a roasting tin, then transfer to the oven for 25 minutes, until the vegetables are crisp and browned.

2. Meanwhile, mix the oil with the tamarind paste and sugar. Once the vegetables are cooked, toss with the dressing, then scatter over the peanuts, fresh coriander and the chaat masala and/or mango powder, if using. Serve with the yogurt, piled into flatbreads or naan.

Note: The tamarind paste used here is the kind you get at the supermarket in a small own-brand jar - not the very concentrated paste that you get at Asian grocery stores. If using the latter, halve the amount.
      `
  },
  {
    id: 3,
    name: "Aubergine with Tomatoes, Harissa & Almonds",
    type: MealType.Dinner,
    ingredients: [
      { name: "aubergines", quantity: ["", 2] },
      { name: "olive oil", quantity: ["tbsp", 2] },
      { name: "sea salt", quantity: ["tsp", 1] },
      { name: "harissa", quantity: ["tbsp", 2] },
      { name: "vine tomatoes", quantity: ["", 8] },
      { name: "flaked almonds", quantity: ["g", 40] },
      { name: "coriander", quantity: ["g", 25] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Lay the aubergine slices in a roasting tin. Large enough to hold them all in a single layer. Mix the harissa with the oil, then brush half over the aubergines. Sprinkle over half the sea salt, then scatter over the aubergines are cooked through.

3. Tuck the tomato halves around the aubergines, season everything with the sea salt and transfer to the oven for 30 minutes. Tip over the almonds and cook for a further 15 minutes, until the aubergines are cooked through.

4. Scatter with the coriander and serve with couscous and yogurt alongside.
      `
  },
  {
    id: 4,
    name: "Miso Aubergines with Tofu, Sesame & Chilli",
    type: MealType.Dinner,
    ingredients: [
      { name: "aubergines", quantity: ["", 2] },
      { name: "olive oil", quantity: ["tbsp", 1] },
      { name: "tofu", quantity: ["g", 250] },
      { name: "sesame oil", quantity: ["tbsp", 1] },
      { name: "white miso paste", quantity: ["tbsp", 2] },
      { name: "ginger", quantity: ["cm", 5] },
      { name: "garlic", quantity: ["cloves", 2] },
      { name: "spring onions", quantity: ["", 4] },
      { name: "chilli powder", quantity: ["", 1] },
      { name: "lime juice", quantity: ["tbsp", 2] },
      { name: "soy sauce", quantity: ["tbsp", 2] },
      { name: "sesame seeds", quantity: ["tbsp", 3] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6. Cut deep cross-hatches into each aubergine half, then transfer to a roasting tin along with the tofu.

2. Mix the miso paste with the sesame oil, ginger and garlic, then rub this into the aubergines and over the tofu. Transfer to the oven and roast for 25 minutes.

3. Meanwhile, mix the chilli, ginger, garlic, spring onions together. Tip this over the aubergines along with the lime juice, soy sauce and sesame oil, add them to the tray and cook for a further 20 minutes.

4. Scatter with the sesame seeds. Serve hot, with rice alongside.

Note: You probably already have your favourite tofu brand - I've found that the smoked organic ones bring even more flavour to this dish.
    `
  },
  {
    id: 5,
    name: "Three Bean Chilli with Avocado Salsa",
    type: MealType.Dinner,
    ingredients: [
      { name: "chestnut mushrooms", quantity: ["g", 250] },
      { name: "onion", quantity: ["", 1] },
      { name: "red peppers", quantity: ["", 1] },
      { name: "ground coriander", quantity: ["tsp", 2] },
      { name: "ground cumin", quantity: ["tsp", 2] },
      { name: "chipotle chilli flakes", quantity: ["tsp", 1] },
      { name: "smoked paprika", quantity: ["tsp", 1] },
      { name: "sea salt", quantity: ["tsp", 1] },
      { name: "olive oil", quantity: ["tbsp", 1] },
      { name: "cannellini beans", quantity: ["g", 400] },
      { name: "black beans", quantity: ["g", 400] },
      { name: "red kidney beans", quantity: ["g", 400] },
      { name: "tinned tomatoes", quantity: ["g", 800] },
      { name: "vegetable stock", quantity: ["ml", 200] },
      { name: "avocado", quantity: ["", 1] },
      { name: "lime", quantity: ["", 1] },
      { name: "red onion", quantity: ["", 0.5] },
      { name: "sea salt", quantity: ["tsp", 1] },
      { name: "coriander", quantity: ["", 1] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Mix the mushrooms, onion and red pepper with the spices, salt and olive oil in a large, deep roasting tin. Transfer to the oven and roast for 25 minutes.

3. Drain and rinse all the beans and add to the tin with the chopped tomatoes and stock. Give everything a good stir, then return to the oven and cook, uncovered, for 35 minutes.

4. Just before the chilli is ready, mix the chopped avocado with the lime juice, red onion and sea salt to taste. Serve the chilli scattered with coriander leaves, with the avocado salsa, and with yogurt and tortillas or nachos alongside.

Note: Watch out for steam once the chilli has finished cooking - stand well back from the oven when you open it.
      `
  },

  {
    id: 6,
    name: "Escalivada: Slow Roasted Peppers, Aubergines & Tomatoes with a Basil & Almond Dressing",
    type: MealType.Dinner,
    ingredients: [
      { name: "aubergines", quantity: ["", 2] },
      { name: "red peppers", quantity: ["", 3] },
      { name: "tomatoes", quantity: ["", 6] },
      { name: "red onion", quantity: ["", 1] },
      { name: "thyme", quantity: ["handful", 1] },
      { name: "garlic", quantity: ["cloves", 4] },
      { name: "olive oil", quantity: ["tbsp", 1] },
      { name: "sea salt", quantity: ["tsp", 2] },
      { name: "almonds", quantity: ["g", 25] },
      { name: "lemon juice", quantity: ["tbsp", 1] },
      { name: "extra virgin olive oil", quantity: ["tbsp", 1] },
      { name: "basil", quantity: ["g", 75] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6. Tip the whole aubergines, red peppers, vine tomatoes, onion, thyme, garlic, olive oil and 1 teaspoon of salt into a large roasting tin, then use your hands to coat everything really well in the oil and salt.
    
2. Transfer to the oven and roast for 1 hour, chucking the almonds in for the last 10 minutes to toast.
    
3. Remove the tin from the oven - the veg should be charred all over and very soft when prodded. Rescue the garlic, and leave the rest of the veg to sit while you whisk the lemon juice, extra virgin olive oil and the other teaspoon of sea salt together with the squeezed-out and mashed roasted garlic. Using a knife and fork, remove the inedible tops and stems, then roughly tear the softened vegetables apart.
    
4. Scatter over the basil and the dressing, then mix really well together. Serve warm, with good crusty bread or pearl barley.
        `
  },
  {
    id: 7,
    name: "Oven Baked Ratatouille: Slow Cooked Courgette, Aubergine, Peppers & Tomatoes",
    type: MealType.Dinner,
    ingredients: [
      { name: "courgettes", quantity: ["", 2] },
      { name: "aubergines", quantity: ["", 1] },
      { name: "red peppers", quantity: ["", 2] },
      { name: "red onion", quantity: ["", 1] },
      { name: "garlic", quantity: ["cloves", 2] },
      { name: "olive oil", quantity: ["tbsp", 2] },
      { name: "sea salt", quantity: ["tsp", 2] },
      { name: "black pepper", quantity: ["to taste", 1] },
      { name: "basil", quantity: ["g", 25] },
      { name: "tinned tomatoes", quantity: ["g", 800] },
      { name: "breadcrumbs", quantity: ["g", 75] },
      { name: "parmesan", quantity: ["g", 30] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Mix the vegetables, garlic, oil, salt, pepper and basil in a medium-sized roasting tin or lasagne dish, then top with the tinned tomatoes. Smooth the tomatoes over the vegetables, then transfer to the oven and roast for 30 minutes.

3. Remove the tin from the oven and increase the heat to 200°C fan/220°C/gas 7. Give the vegetables a bit of a stir, then top with the breadcrumbs and parmesan and return to the oven for a further 30 minutes.

4. Leave the ratatouille to cool down for 10-15 minutes, then serve with plenty of crusty bread.

Note: Don't panic if it looks like there's too much liquid in the tin after the first 30 minutes; this absorbs perfectly by the end.
    `
  },
  {
    id: 8,
    name: "All-in-One Sticky Rice with Broccoli, Squash, Chilli & Ginger",
    type: MealType.Dinner,
    ingredients: [
      { name: "jasmine rice", quantity: ["g", 150] },
      { name: "coconut milk", quantity: ["ml", 400] },
      { name: "soy sauce", quantity: ["tbsp", 1] },
      { name: "ginger", quantity: ["cm", 2.5] },
      { name: "garlic", quantity: ["cloves", 1] },
      { name: "squash", quantity: ["g", 300] },
      { name: "broccoli", quantity: ["g", 300] },
      { name: "cashews", quantity: ["g", 30] },
      { name: "sesame oil", quantity: ["tbsp", 2] },
      { name: "lime juice", quantity: ["tbsp", 2] },
      { name: "soy sauce", quantity: ["tbsp", 2] },
      { name: "ginger", quantity: ["cm", 2.5] },
      { name: "red chillies", quantity: ["", 1] },
      { name: "coriander", quantity: ["g", 20] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Mix the rice, coconut milk, soy sauce, ginger and garlic in a small roasting tin and top with the squash. Cover tightly with foil, then transfer to the oven and cook for 45 minutes.

3. Top the rice and squash with the broccoli, then re-cover and return to the oven for a final 15 minutes. Pop the cashew nuts into the oven on a small tray to toast at the same time.

4. Mix together the oil, lime juice, soy sauce, ginger, chilli and coriander, adjusting the soy and lime juice to taste.

5. Tip the dressing over the hot broccoli, rice and squash, scatter with the toasted cashews and serve hot.

Note: Deseed the chilli if you prefer a less hot dressing.
        `
  },
  {
    id: 9,
    name: "All-in-One Sticky Rice with Broccoli, Squash, Chilli & Ginger",
    type: MealType.Dinner,
    ingredients: [
      { name: "jasmine rice", quantity: ["g", 150] },
      { name: "coconut milk", quantity: ["ml", 400] },
      { name: "soy sauce", quantity: ["tbsp", 3] },
      { name: "ginger", quantity: ["cm", 5] },
      { name: "garlic", quantity: ["cloves", 1] },
      { name: "squash", quantity: ["g", 300] },
      { name: "broccoli", quantity: ["g", 300] },
      { name: "cashews", quantity: ["g", 30] },
      { name: "sesame oil", quantity: ["tbsp", 2] },
      { name: "lime juice", quantity: ["tbsp", 2] },
      { name: "red chillies", quantity: ["", 1] },
      { name: "coriander", quantity: ["g", 20] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Mix the rice, coconut milk, soy sauce, ginger and garlic in a small roasting tin and top with the squash. Cover tightly with foil, then transfer to the oven and cook for 45 minutes.

3. Top the rice and squash with the broccoli, then re-cover and return to the oven for a final 15 minutes. Pop the cashew nuts into the oven on a small tray to toast at the same time.

4. Mix together the oil, lime juice, soy sauce, ginger, chilli and coriander, adjusting the soy and lime juice to taste.

5. Tip the dressing over the hot broccoli, rice and squash, scatter with the toasted cashews and serve hot.

Note: Deseed the chilli if you prefer a less hot dressing.
    `
  },
  {
    id: 10,
    name: "Warming Sweet Potato & Mushroom Polenta with Tomatoes",
    type: MealType.Dinner,
    ingredients: [
      { name: "polenta", quantity: ["g", 150] },
      { name: "vegetable stock", quantity: ["ml", 400] },
      { name: "olive oil", quantity: ["tbsp", 5] },
      { name: "sweet potatoes", quantity: ["g", 300] },
      { name: "black pepper", quantity: ["to taste", 1] },
      { name: "chestnut mushrooms", quantity: ["g", 300] },
      { name: "cherry tomatoes", quantity: ["g", 250] },
      { name: "garlic", quantity: ["cloves", 2] },
      { name: "sea salt", quantity: ["tsp", 1] },
      { name: "parsley", quantity: ["g", 15] },
      { name: "lemon juice", quantity: ["", 1] },
      { name: "chilli flakes", quantity: ["tsp", 0.5] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Line a roasting tin with baking paper, then tip in the polenta, vegetable stock, 2 tablespoons of olive oil and the sweet potatoes. Stir, season well with black pepper, then transfer to the oven and cook, uncovered, for 40 minutes.

3. Meanwhile, mix together the parsley, lemon juice, extra virgin olive oil and chilli flakes for the dressing.

4. Stir the mushrooms, tomatoes, garlic, salt, pepper and another tablespoon of olive oil together and set aside.

5. Once the polenta has had 40 minutes, take the tin out of the oven and give it a good stir. Top with the mushroom and tomato mixture and return to the oven for a further 15 minutes, after which the mushrooms should be softened and the polenta crisp. Serve with the dressing alongside and a green salad.
    `
  },
  {
    id: 11,
    name: "Simple All-in-One Daal with Roasted Shallots, Coriander, Pomegranate & Cashews",
    type: MealType.Dinner,
    ingredients: [
      { name: "shallots", quantity: ["g", 250] },
      { name: "vegetable oil", quantity: ["tbsp", 1] },
      { name: "bay leaf", quantity: ["", 1] },
      { name: "ground cumin", quantity: ["tsp", 1] },
      { name: "ground coriander", quantity: ["tsp", 1] },
      { name: "ground turmeric", quantity: ["tsp", 0.5] },
      { name: "black pepper", quantity: ["tsp", 1] },
      { name: "brown lentils", quantity: ["g", 225] },
      { name: "ginger", quantity: ["cm", 5] },
      { name: "garlic", quantity: ["cloves", 2] },
      { name: "sea salt", quantity: ["tsp", 2] },
      { name: "coconut milk", quantity: ["ml", 150] },
      { name: "lime juice", quantity: ["", 1] },
      { name: "pomegranate", quantity: ["", 1] },
      { name: "coriander", quantity: ["handful", 1] },
      { name: "cashews", quantity: ["handful", 1] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Tip the banana shallots into a small deep roasting tin and mix well with the vegetable oil, bay leaf and spices. Transfer to the oven and roast for 25 minutes.

3. After 25 minutes, add the rinsed lentils, boiling water, ginger and garlic to the tin. Give everything a good stir, then cover tightly with foil and return to the oven for 1 hour.

4. As soon as the lentils have had an hour, season generously with the salt and stir through the coconut milk or single cream. Taste and add lime juice and more salt as needed. Scatter over the pomegranate seeds, coriander and cashews, and serve with rice or naan bread.
    `
  },
  {
    id: 12,
    name: "Caponata Style Aubergines with Olives, Capers & Tomatoes",
    type: MealType.Dinner,
    ingredients: [
      { name: "baby aubergines", quantity: ["g", 800] },
      { name: "red onion", quantity: ["", 1] },
      { name: "olive oil", quantity: ["tbsp", 2] },
      { name: "sea salt", quantity: ["tsp", 2] },
      { name: "garlic", quantity: ["cloves", 2] },
      { name: "rosemary", quantity: ["sprigs", 3] },
      { name: "capers", quantity: ["g", 25] },
      { name: "pitted green olives", quantity: ["g", 75] },
      { name: "tinned tomatoes", quantity: ["g", 800] },
      { name: "red wine vinegar", quantity: ["tsp", 2] },
      { name: "basil", quantity: ["g", 25] },
      { name: "almonds", quantity: ["g", 30] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Slice the baby aubergines lengthways, leaving the stems intact, then transfer to a roasting tin along with the onion. Rub everything well with the olive oil, sea salt and garlic and top with the rosemary. Transfer to the oven and roast for 40 minutes.

3. Add the capers, olives, tinned tomatoes and red wine vinegar, stir gently, then return to the oven to cook for a further 20 minutes, until the sauce has reduced down. Taste and adjust the seasoning as needed. Scatter over the torn basil and almonds and serve with bulgur wheat or focaccia.
            `
  },
  {
    id: 13,
    name: "Fajita Spiced Mushrooms & Peppers with Stilton & Sour Cream",
    type: MealType.Dinner,
    ingredients: [
      { name: "portobello mushrooms", quantity: ["g", 300] },
      { name: "chestnut mushrooms", quantity: ["g", 150] },
      { name: "red peppers", quantity: ["", 2] },
      { name: "onion", quantity: ["", 1] },
      { name: "chipotle chilli flakes", quantity: ["tsp", 1] },
      { name: "ground cumin", quantity: ["tsp", 2] },
      { name: "ground coriander", quantity: ["tsp", 2] },
      { name: "sea salt", quantity: ["tsp", 2] },
      { name: "olive oil", quantity: ["tbsp", 1] },
      { name: "coriander", quantity: ["g", 25] },
      { name: "stilton", quantity: ["g", 100] },
      { name: "sour cream", quantity: ["ml", 150] },
      { name: "tortillas", quantity: ["", 1] }
    ],
    instructions: `
1. Preheat the grill to max. Tip the mushrooms, peppers and onion to a grill tray large enough to hold everything in one layer, and mix with the spices, salt and olive oil. Transfer to the grill for 5-10 minutes, until the peppers are charred and the mushrooms have softened.

2. Scatter over the coriander and stilton and serve with the sour cream in warm tortillas.
    `
  },
  {
    id: 14,
    name: "Oven Baked Shakshuka: Roasted Peppers, Tomatoes & Chilli with Eggs",
    type: MealType.Breakfast,
    ingredients: [
      { name: "red onion", quantity: ["", 1] },
      { name: "red peppers", quantity: ["", 2] },
      { name: "yellow peppers", quantity: ["", 2] },
      { name: "vine tomatoes", quantity: ["g", 300] },
      { name: "red chillies", quantity: ["", 2] },
      { name: "garlic", quantity: ["cloves", 2] },
      { name: "olive oil", quantity: ["tbsp", 1] },
      { name: "sea salt", quantity: ["tsp", 1] },
      { name: "ground cumin", quantity: ["tsp", 1] },
      { name: "ground coriander", quantity: ["tsp", 1] },
      { name: "smoked paprika", quantity: ["tsp", 1.5] },
      { name: "tinned tomatoes", quantity: ["g", 400] },
      { name: "eggs", quantity: ["", 4] },
      { name: "za'atar", quantity: ["tbsp", 1] },
      { name: "coriander", quantity: ["", 1] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Mix the onion, peppers, tomatoes, chillies and garlic with the oil, salt and spices in a large roasting tin, then transfer to the oven and roast for 30 minutes.

3. Lower the temperature to 160°C fan/180°C/gas 4. Squash the cooked tomatoes down well with a wooden spoon, then add the tinned tomatoes and mix everything together. Make four indentations in the tomato mixture, crack an egg into each, then return to the oven for a further 10 minutes, or until the eggs are just cooked to your liking.

4. Scatter with the za'atar, if using, and the freshly chopped coriander. Serve with lots of hot buttered toast or pitta breads.

Note: The eggs will take more or less time depending on whether they're fridge cold.
            `
  },
  {
    id: 15,
    name: "Chipotle Roasted Sweetcorn with Squash, Black Beans, Feta & Lime",
    type: MealType.Dinner,
    ingredients: [
      { name: "squash", quantity: ["g", 750] },
      { name: "sweetcorn", quantity: ["", 4] },
      { name: "black beans", quantity: ["g", 400] },
      { name: "chipotle chilli flakes", quantity: ["tsp", 1] },
      { name: "ground coriander", quantity: ["tsp", 1] },
      { name: "ground cumin", quantity: ["tsp", 1] },
      { name: "sea salt", quantity: ["tsp", 1] },
      { name: "olive oil", quantity: ["tbsp", 2] },
      { name: "lime", quantity: ["", 1] },
      { name: "feta cheese", quantity: ["g", 200] },
      { name: "coriander", quantity: ["g", 25] },
      { name: "spring onions", quantity: ["", 2] },
      { name: "sour cream", quantity: ["tbsp", 4] }
    ],
    instructions: `
1. Preheat the oven to 180°C fan/200°C/gas 6.

2. Mix together the squash, sweetcorn and black beans in a roasting tin along with the spices, salt and olive oil, then transfer to the oven and roast for 45 minutes.

3. Squeeze over the lime juice, then scatter over the feta, coriander and spring onions. Serve with the sour cream and rice alongside.
    `
  },
  {
    id: 16,
    name: "Crunchy Roast Potato, Artichoke & Spring Green Hash with Baked Eggs",
    type: MealType.Breakfast,
    ingredients: [
      { name: "potatoes", quantity: ["g", 800] },
      { name: "artichokes", quantity: ["g", 560] },
      { name: "garlic", quantity: ["cloves", 2] },
      { name: "sea salt", quantity: ["tsp", 2] },
      { name: "black pepper", quantity: ["to taste", 1] },
      { name: "spring greens", quantity: ["g", 200] },
      { name: "eggs", quantity: ["", 4] },
      { name: "sriracha", quantity: ["tbsp", 0.5] },
      { name: "yogurt", quantity: ["tbsp", 3] }
    ],
    instructions: `
1. Preheat the oven to 200°C fan/220°C/gas 7.

2. Mix the potatoes, artichokes, oil, garlic, salt and black pepper in a roasting tin, then transfer to the oven and roast for 50 minutes.

3. Reduce the heat to 150°C fan/170°C/gas 4, and remove the tin from the oven. Stir through the spring greens, then create four indentations in the vegetables and crack an egg into each one. Season the eggs with a little salt, then return to the oven for a further 10 minutes, until the whites of the eggs are just set.

4. Meanwhile, mix the chilli sauce with the natural yogurt. Serve alongside the eggs and potatoes as soon as they're out of the oven.
    `
  },
  {
    id: 17,
    name: "Super Seedy Breakfast Porridge",
    type: MealType.Breakfast,
    ingredients: [
      { name: "rolled oats", quantity: ["cup", 2 / 3] },
      { name: "almond milk", quantity: ["cup", 0.5] },
      { name: "pumpkin seeds", quantity: ["tbsp", 2] },
      { name: "ground ginger", quantity: ["pinch", 1] },
      { name: "ground cinnamon", quantity: ["pinch", 1] },
      { name: "ground nutmeg", quantity: ["pinch", 1] },
      { name: "hemp seeds", quantity: ["tbsp", 2] },
      { name: "almond butter", quantity: ["tbsp", 1] },
      { name: "chia seeds", quantity: ["tsp", 2] },
      { name: "vanilla extract", quantity: ["tsp", 0.5] },
      { name: "maple syrup", quantity: ["", 0] },
      { name: "berries", quantity: ["", 0] }
    ],
    instructions: `Bring the oats and 2/3 cup water to a boil in a medium saucepan over medium-high heat. Reduce the heat to low and stir in the almond milk, pumpkin seeds, ginger, cinnamon, and nutmeg. Cook, stirring occasionally, for about 5 minutes, until the oats are tender.
Remove from the heat and stir in the hemp seeds, almond butter, chia seeds, and vanilla. Taste, adding maple syrup as desired for a sweeter porridge.`
  },
  {
    id: 18,
    name: "Superfood Green Smoothie",
    type: MealType.Breakfast,
    ingredients: [
      { name: "almond milk", quantity: ["cup", 1] },
      { name: "hemp seeds", quantity: ["tbsp", 2] },
      { name: "spinach", quantity: ["cup", 0.5] },
      { name: "broccoli sprouts", quantity: ["handful", 1] },
      { name: "kiwi", quantity: ["", 1] },
      { name: "strawberries", quantity: ["", 5] },
      { name: "peanut butter", quantity: ["tbsp", 2] },
      { name: "banana", quantity: ["", 0.5] },
      { name: "maple syrup", quantity: ["tsp", 1] }
    ],
    instructions: `Place all ingredients in a blender and puree until very smooth and creamy. Depending on the power of your blender, you may need to add more liquid.
  
To make a smoothie bowl, reduce the liquid by half (use ½ cup almond milk), then blend as directed. Divide the contents into two bowls and drizzle with peanut butter and top with more berries, if desired. Garnish with more fresh fruit, seeds, nut butter, and Crispy Oat Granola (page 228).`
  },
  {
    id: 19,
    name: "Crispy Oat Granola",
    type: MealType.Breakfast,
    ingredients: [
      { name: "rolled oats", quantity: ["cup", 2] },
      { name: "coconut", quantity: ["cup", 1] },
      { name: "walnuts", quantity: ["cup", 1] },
      { name: "chia seeds", quantity: ["tbsp", 2] },
      { name: "hemp seeds", quantity: ["tbsp", 2] },
      { name: "ground flaxseed", quantity: ["tbsp", 2] },
      { name: "ground cinnamon", quantity: ["tsp", 1] },
      { name: "salt", quantity: ["tsp", 0.75] },
      { name: "sunflower oil", quantity: ["tbsp", 2] },
      { name: "maple syrup", quantity: ["cup", 0.25] },
      { name: "vanilla extract", quantity: ["tsp", 1] },
      { name: "dried cranberries", quantity: ["cup", 0.5] }
    ],
    instructions: `This granola is the perfect topper for smoothies and smoothie bowls. We also love noshing on this crispy, subtly sweet granola with a touch of plant-based milk or on its own. While the cranberries are an optional add-in, we are obsessed with their tart, sweet flavour and chewy texture!
  
Makes 4 ¼ cups

Preheat the oven to 250˚F. Line a rimmed baking sheet with parchment.

In a large bowl, combine the oats, coconut, walnuts, chia seeds, hemp seeds, flaxseed, cinnamon, and salt.

In a small saucepan over medium heat, whisk the sunflower oil into the maple syrup. Bring to a simmer, then remove from the heat and add the vanilla.

Add the syrup mixture to the oat ingredients and mix thoroughly. Spread the granola in a single layer on the prepared baking sheet.

Bake for 90 minutes, stirring every 15 minutes, until golden brown.

Cool completely, then stir in the dried cranberries, if using.

Transfer to an airtight container and store for several weeks in the fridge, or in the freezer for up to 3 months.`
}, {
    id: 20,
    name: "The Daily Salad",
    type: MealType.Lunch,
    ingredients: [
      { name: "leafy greens", quantity: ["cup", 4] },
      { name: "pickled beetroot", quantity: ["cup", 0.5] },
      { name: "chickpeas", quantity: ["cup", 0.5] },
      { name: "sunflower seeds", quantity: ["cup", 0.25] },
      { name: "broccoli sprouts", quantity: ["handful", 1] },
      { name: "carrot", quantity: ["", 1] },
      { name: "cherry tomatoes", quantity: ["", 10] },
      { name: "orange juice", quantity: ["cup", 0.25] },
      { name: "apple cider vinegar", quantity: ["tbsp", 2] },
      { name: "tahini", quantity: ["tbsp", 2] },
      { name: "salt", quantity: ["tsp", 0.25] },
      { name: "black pepper", quantity: ["tsp", 0.25] }
    ],
    instructions: `We call this the daily salad because we believe in the power of eating raw vegetables every single day, and what better way than a Fiber Fueled salad? If you're looking for a filling, satisfying, and easy-to-throw-together option, this is it. We call for pickled beets in this recipe. They're low FODMAP even though plain beets are fairly high.
  
Salad:
In a large bowl, toss together the greens, pickled beets, chickpeas, sunflower seeds, sprouts, shredded carrot, sliced cherry tomatoes, and any other Supercharge toppings, if using. Set aside.

Oil-Free Orange Dressing:
Whisk together the orange juice, vinegar, tahini, salt, and pepper in a small bowl or mason jar until smooth. Starting with 1 tablespoon at a time, whisk in water until your desired consistency is reached (the dressing should be pourable but not runny). Add salt and pepper, as desired. If using later, the dressing will keep in the fridge for up to 5 days.

When ready to serve, drizzle each salad with ¼ cup dressing, toss well, and add salt and pepper to taste.

Optional:
Add 1 cup Supercharged Roasted Roots (page 231), chopped parsley, and cubed, baked tofu`
}, {
    id: 21,
    name: "Supercharged Roasted Roots",
    type: MealType.Dinner,
    ingredients: [
      { name: "sweet potato", quantity: ["cup", 2] },
      { name: "parsnips", quantity: ["", 2] },
      { name: "radishes", quantity: ["", 6] },
      { name: "olive oil", quantity: ["tbsp", 1] },
      { name: "vegetable broth", quantity: ["tbsp", 2] },
      { name: "salt", quantity: ["tsp", 0.5] },
      { name: "black pepper", quantity: ["tsp", 0.5] }
    ],
    instructions: `This topping is designed to supercharge your meals wherever you want a little fibre boost. Add a handful to salads, Nourishing Buddha Bowls (page 295), or Tofu Scramble Bowls (page 286), or just enjoy them on their own.

This mix is perfect for Week 1, but the technique can be used on almost any vegetable out there, though cooking times may need to be adjusted.

Serves 4

Preheat the oven to 425˚F.

Toss the cubed sweet potato, chopped parsnips, chopped radishes, olive oil (or garlic-infused olive oil, see page 246), broth, salt, and pepper together in a large bowl until well combined. Place on a rimmed baking sheet in a single layer (you may need to use two, depending on size) and cover with foil.

Roast for 35 minutes, or until mostly soft. Remove from the oven, remove the foil, and stir. Return to the oven for 10 more minutes, or until the edges become lightly crisp.`
},
  {
    id: 22,
    name: "Down 'n' Dirty Kale Salad",
    type: MealType.Lunch,
    ingredients: [
      { name: "kale", quantity: ["cup", 1] },
      { name: "tamari", quantity: ["tsp", 3] },
      { name: "spinach", quantity: ["cup", 1] },
      { name: "chives", quantity: ["tbsp", 2] },
      { name: "salt", quantity: ["tsp", 0.25] },
      { name: "black pepper", quantity: ["tsp", 0.125] },
      { name: "avocado", quantity: ["", 0.25] },
      { name: "almond butter", quantity: ["tbsp", 2] },
      { name: "celery", quantity: ["stalk", 0.5] },
      { name: "walnuts", quantity: ["tbsp", 2] },
      { name: "scallions", quantity: ["cup", 0.25] }
    ],
    instructions: `This is one of our favourite ways to enjoy kale! The avocado–almond butter dressing is creamy and bursting with flavour. Simple to make, filled with flavour and texture, and brimming with plant-powered nutrients! We use this one as a side dish for multiple meals throughout the four-week plan.

In a medium bowl, drizzle the kale with 1 teaspoon tamari and massage with your hands to soften and break down the kale. Add the spinach, chives, salt, and pepper and toss together once more.

In a separate small bowl, mash the avocado with the almond butter and whisk in the remaining 2 teaspoons of tamari to thin. Pour the avocado mixture over the kale and combine thoroughly with your hands or with tongs, massaging to coat every piece.

Add the chopped celery, roughly chopped walnuts (optional), and chopped scallions (green parts only, optional) and serve.`
  },
  {
    id: 23,
    name: "Plant-Powered Polenta Ragu",
    type: MealType.Dinner,
    ingredients: [
      { name: "olive oil", quantity: ["tsp", 2] },
      { name: "chopped tomatoes", quantity: ["cup", 1] },
      { name: "salt", quantity: ["", 0] },
      { name: "black pepper", quantity: ["", 0] },
      { name: "lentils", quantity: ["cup", 1] },
      { name: "roasted italian medley", quantity: ["cup", 2] },
      { name: "dried oregano", quantity: ["tsp", 0.5] },
      { name: "dried basil", quantity: ["tsp", 0.5] },
      { name: "red pepper flakes", quantity: ["", 0] },
      { name: "almond milk", quantity: ["cup", 1.5] },
      { name: "cornmeal", quantity: ["cup", 0.5] },
      { name: "parsley", quantity: ["", 0] },
      { name: "fresh basil", quantity: ["", 0] }
    ],
    instructions: `Creamy polenta is stick-to-your-ribs comfort food, especially when combined with our quick ragu of Italian vegetables and lentils. After Week 1, try this ragu with Pepita Parmesan (page 301), a nutty parm that's delicious on everything from pasta to polenta to popcorn.

Quick Ragu:
Heat a medium saucepan over medium heat and add the olive oil (or garlic-infused olive oil, see page 246, or vegetable broth). Add in the tomatoes and a pinch of salt and black pepper. Cook, stirring often, for about 10 minutes, until the tomatoes have broken down. Add the lentils, Roasted Italian Medley, oregano, basil, and red pepper flakes, if using. Cook, stirring occasionally, for 10 minutes, or until thickened. Taste as you go and add more salt, pepper, and dried herbs as desired.

Polenta:
Whisk together ½ cup water and the almond milk in a medium saucepan over medium heat. When bubbles start to surface, whisk in the cornmeal and salt. Reduce the heat to a simmer and cook for 10 to 15 minutes, until thickened. Taste as you go and add more salt and pepper to taste.

To serve, divide the polenta into two bowls and top with the ragu. Garnish with fresh chopped parsley and basil.`
  },
  {
    id: 24,
    name: "Homemade Rocket-Walnut Pesto Pasta",
    type: MealType.Dinner,
    ingredients: [
      { name: "rocket", quantity: ["cup", 3] },
      { name: "walnuts", quantity: ["cup", 0.5] },
      { name: "nutritional yeast", quantity: ["tbsp", 2] },
      { name: "lemon juice", quantity: ["tbsp", 2] },
      { name: "vegetable broth", quantity: ["cup", 0.25] },
      { name: "salt", quantity: ["tsp", 0.25] },
      { name: "black pepper", quantity: ["tsp", 0.25] },
      { name: "olive oil", quantity: ["tbsp", 1] },
      { name: "gluten-free pasta", quantity: ["ounce", 8] },
      { name: "roasted italian medley", quantity: ["cup", 2] }
    ],
    instructions: `Make the pesto: Place the rocket, lightly toasted walnuts, and nutritional yeast in the base of a food processor and blend until very finely chopped. With the motor running, add in the lemon juice, vegetable broth or water, salt, and pepper. Add more salt and pepper to taste. Drizzle in the olive oil, if using, and set aside.

Bring a large pot of salted water to a boil. Add the pasta and cook until just al dente according to package directions. Reserve ½ cup of pasta water and drain the pasta.

Place the pasta back into the pot along with the pesto. Toss, adding splashes of pasta water as needed to coat the pasta. Stir in the leftover Roasted Italian Medley and serve. If you prefer your pasta a little spicy, enjoy this with crushed red pepper flakes.`
  },
  {
    id: 25,
    name: "Roasted Italian Medley",
    type: MealType.Dinner,
    ingredients: [
      { name: "aubergine", quantity: ["", 1] },
      { name: "courgette", quantity: ["", 2] },
      { name: "red bell pepper", quantity: ["", 1] },
      { name: "roma tomatoes", quantity: ["", 2] },
      { name: "fennel", quantity: ["", 1] },
      { name: "italian seasoning", quantity: ["tsp", 1] },
      { name: "vegetable broth", quantity: ["cup", 0.25] },
      { name: "olive oil", quantity: ["tsp", 2.5] },
      { name: "salt", quantity: ["tsp", 0.5] },
      { name: "black pepper", quantity: ["tsp", 0.5] },
      { name: "red pepper flakes", quantity: ["tsp", 0.25] }
    ],
    instructions: `This one-pan side dish is designed to make meal prep for Week 1 even easier. You'll use these vegetables over and over again in different ways: in the Plant-Powered Polenta Ragu (page 235), the Muhammara Sandwich (page 233), and the Pesto Pasta (239).

Makes 6 cups

Preheat the oven to 400˚F.

In a large bowl, toss together the cubed aubergine, diced courgette, cubed red bell pepper, diced Roma tomatoes, diced fennel (fronds removed), Italian seasoning, vegetable broth, olive oil, salt, black pepper, and red pepper flakes (optional). Place in a single layer on a rimmed baking sheet (you may need two baking sheets, depending on the size), then place on the top rack of the oven.

Cook for 35 to 40 minutes, depending on the size of your vegetables, until the vegetables are very tender.

Keep in the fridge for up to 6 days. Enjoy any extras as is, on salads, or combined with cooked whole-grain pasta.`
  }, 
  {
    id: 26,
    name: "Muhammara Dip",
    type: MealType.Lunch,
    ingredients: [
      { name: "red bell peppers", quantity: ["", 6] },
      { name: "walnuts", quantity: ["cup", 1] },
      { name: "olive oil", quantity: ["tbsp", 2] },
      { name: "lemon juice", quantity: ["cup", 0.25] },
      { name: "balsamic vinegar", quantity: ["cup", 0.25] },
      { name: "ground cumin", quantity: ["tsp", 1] },
      { name: "sea salt", quantity: ["tsp", 1] },
      { name: "red pepper flakes", quantity: ["tsp", 0.5] }
    ],
    instructions: `Muhammara, made from roasted red peppers, walnuts, cumin, and red pepper flakes, is a hot pepper dip with Syrian roots. We love this smoky spread with vegetables and toasted sourdough, and in our Muhammara Sandwich (page 243).

Preheat the oven to 450˚F.

Place the whole bell peppers directly onto a rimmed baking sheet and roast for 25 minutes, turning after 15 minutes, so that the bell peppers are lightly charred on each side.

Place the peppers in a large bowl and immediately cover with a kitchen towel to allow them to steam for at least 10 minutes. This will help the skin soften so it's easier to remove.

Once cool, remove the skin, core, and seeds. Roughly chop and set aside.

To the base of a food processor, add in the chopped raw walnuts, olive oil, lemon juice, vinegar, cumin, salt, and red pepper flakes. Pulse 8 to 10 times to combine. Add in the roasted peppers and pulse a few more times to combine. You can make this into a creamy, hummus-like spread or a chunky nut spread. Taste and adjust as needed, adding more lemon for acidity, chilli flakes for spice, balsamic vinegar for depth, and/or salt.

This will keep, covered, in the fridge for up to 4 days.`
  },
  {
    id: 27,
    name: "Tofu Scramble Bowls",
    type: MealType.Breakfast,
    ingredients: [
      { name: "vegetable broth", quantity: ["tbsp", 5] },
      { name: "firm tofu", quantity: ["ounce", 8] },
      { name: "scallion", quantity: ["", 1] },
      { name: "smoked paprika", quantity: ["tsp", 0.5] },
      { name: "ground turmeric", quantity: ["tsp", 0.5] },
      { name: "ground cumin", quantity: ["tsp", 0.25] },
      { name: "salt", quantity: ["", 0] },
      { name: "black pepper", quantity: ["", 0] },
      { name: "sweet potato toast", quantity: ["slice", 2] },
      { name: "kale", quantity: ["cup", 2] }
    ],
    instructions: `Consider this your new favourite brunch. Tofu is lower in saturated fat, lower in monounsaturated fat, and higher in polyunsaturated fats and free of cholesterol compared to eggs, making it the perfect swap.

If you're new to cooking with tofu, know that you'll need to press it first. You can do this with a tofu press, or by wrapping the tofu block in paper towels, placing it on a rimmed baking sheet and placing something heavy on top. Let sit for about 10 minutes to let most of the water drain out. This allows the tofu to become chewier, perfect for egg-like curds.

Heat a medium skillet over medium heat, add 2 tablespoons vegetable broth, and heat until shimmering. Add the drained, pressed, and crumbled or diced tofu and cook until warmed, about 2 minutes, then add the sliced scallions (green parts only), paprika, turmeric, cumin, and a pinch of salt. Reduce the heat to low and cook until warmed, stirring occasionally, about 5 more minutes.

In a separate skillet, heat the remaining 3 tablespoons broth over medium heat. Add the cubed leftover Berry Good Sweet Potato Toast (page 226) and cook, stirring occasionally, until warm, about 5 minutes. Add the finely chopped kale (stems removed) and a pinch of salt and pepper and cover. Cook for about 3 minutes, until the greens are just wilted.

Divide the kale and sweet potatoes into two bowls, then top with the tofu mixture. For a heartier meal, add a slice of sourdough toast, with or without peanut or almond butter.`
  },
  {
    id: 28,
    name: "Simple Overnight Oats",
    type: MealType.Breakfast,
    ingredients: [
      { name: "old-fashioned oats", quantity: ["cup", 2/3] },
      { name: "chia seeds", quantity: ["tbsp", 1] },
      { name: "almond butter", quantity: ["tbsp", 1] },
      { name: "ground cinnamon", quantity: ["tsp", 0.5] },
      { name: "dairy-free milk", quantity: ["cup", 1] },
      { name: "fruit", quantity: ["cup", 0.75] },
      { name: "maple syrup", quantity: ["", 0] }
    ],
    instructions: `Everyone needs a good overnight oat recipe, and this is our go-to. The beauty of overnight oats is that they are customisable to whatever you are craving: add soy milk for a higher protein breakfast, almond milk for low FODMAP, or coconut milk for a creamier bowl of oats. And get those omega-3s cranking with the super seeds on this one!

In a resealable jar or bowl, combine the oats, chia seeds, nut butter (almond butter or peanut butter), and cinnamon. Add a splash of the milk and mix everything together, working the nut butter into the oats as much as possible. Add the rest of the milk and stir to combine.

Cover the bowl or place the lid on the jar and refrigerate, up to 4 days. When ready to serve, mix in the fruit and a drizzle of maple syrup, if desired.

Low FODMAP options:
Lower FODMAP fruit options include raspberries, blueberries, strawberries, pineapple, kiwi, and papaya.

Supercharge it!
Add in hemp seeds, additional chia seeds, fruit (especially berries), and unsweetened shredded coconut.`
  },
  {
    id: 29,
    name: "Gluten-Free Pancakes",
    type: MealType.Breakfast,
    ingredients: [
      { name: "ground flaxseed", quantity: ["tbsp", 1] },
      { name: "water", quantity: ["tbsp", 3] },
      { name: "gluten-free flour", quantity: ["cup", 1] },
      { name: "baking powder", quantity: ["tsp", 1] },
      { name: "baking soda", quantity: ["tsp", 0.25] },
      { name: "salt", quantity: ["tsp", 0.25] },
      { name: "almond milk", quantity: ["cup", 1] },
      { name: "apple cider vinegar", quantity: ["tsp", 1] },
      { name: "sunflower oil", quantity: ["tbsp", 1] },
      { name: "vanilla extract", quantity: ["tbsp", 1] }
    ],
    instructions: `Three cheers for pancakes! These gluten-free pancakes are perfect for lazy weekend mornings. Serve them plain, or as berry pancakes by mixing fresh chopped fruit into the finished batter.

Makes 6 pancakes

Whisk together the flaxseed and 3 tablespoons water and set aside until jelled, about 5 minutes.

In a large mixing bowl, whisk together the gluten-free flour, baking powder, baking soda, and salt in a large mixing bowl. Set aside.

In a separate medium bowl, add the almond milk and vinegar. Then add in the sunflower oil, vanilla, and the jelled flax. Whisk to incorporate, then add the almond milk mixture into the flour mixture and whisk thoroughly until no lumps remain.

Grease and heat a large skillet with coconut oil or cooking spray over medium-high heat. Drop batter into the hot skillet, using a ¼ cup measuring cup. Wait for large bubbles to form, then flip and cook another 60 seconds, until golden brown on both sides.

Serve with berries and maple syrup, if desired.

Supercharge it!
Add chopped berries to the batter.`
  },
  {
    id: 30,
    name: "Chocolate Mousse",
    type: MealType.Dessert,
    ingredients: [
      { name: "soft tofu", quantity: ["block", 1] },
      { name: "coconut milk", quantity: ["cup", 0.5] },
      { name: "maple syrup", quantity: ["cup", 0.5] },
      { name: "cocoa powder", quantity: ["cup", 0.5] },
      { name: "peanut butter", quantity: ["tbsp", 2] },
      { name: "vanilla extract", quantity: ["tsp", 1] },
      { name: "salt", quantity: ["tsp", 1] }
    ],
    instructions: `Creamy, sweet, and perfectly satisfying, this chocolate mousse is a plant protein–packed sweet treat.

Note: Place the can of coconut milk in the refrigerator upside down for at least 3 hours. This will allow the coconut milk fat/solids to harden and separate from the liquid. This helps make the mousse creamier!

Place the tofu (drained but not pressed), coconut milk, maple syrup, cocoa powder, peanut butter, vanilla, and salt into the base of a food processor or high-powered blender. Puree until very smooth, scraping down the sides as necessary.

Divide among 4 to 6 ramekins or small bowls and allow to chill in the refrigerator for 30 minutes or more to set.

Supercharge It!
Add up to 30 raspberries per serving for added sweet flavour, fibre, and another Plant Point.`
  },
  {
    id: 31,
    name: "Puttanesca Tofu Scramble",
    type: MealType.Breakfast,
    ingredients: [
      { name: "vegetable broth", quantity: ["tbsp", 1] },
      { name: "olive oil", quantity: ["tbsp", 1] },
      { name: "scallion", quantity: ["", 1] },
      { name: "roma tomato", quantity: ["", 1] },
      { name: "red pepper flakes", quantity: ["tsp", 0.25] },
      { name: "dried thyme", quantity: ["tsp", 0.5] },
      { name: "dried oregano", quantity: ["tsp", 0.5] },
      { name: "extra-firm tofu", quantity: ["ounce", 8] },
      { name: "ground turmeric", quantity: ["tsp", 0.25] },
      { name: "salt", quantity: ["", 0] },
      { name: "capers", quantity: ["tbsp", 1] },
      { name: "black olives", quantity: ["cup", 0.25] },
      { name: "black pepper", quantity: ["", 0] },
      { name: "parsley", quantity: ["", 0] }
    ],
    instructions: `We took our favourite pasta sauce and turned it into a breakfast scramble. Because why would you not!

Serves 2

In a large skillet over medium heat, combine the vegetable broth and olive oil. Add the scallion (green parts only, thinly sliced), chopped Roma tomato, red pepper flakes (if using), thyme, and oregano. Sauté for about 5 minutes, until the vegetables are softened.

Use a spatula to move the veggies to one side of the pan, then crumble in the tofu (drained and pressed), gently breaking the tofu up into small curds so that it resembles eggs. Add the turmeric and a pinch of salt, then cook for 2 to 3 minutes, stirring often, until the tofu is warmed through.

Add the drained capers and sliced black olives and toss together. Add salt, black pepper, and red pepper flakes to taste. Top with fresh chopped parsley. Serve as is or with toasted sourdough.`
  },
  {
    id: 32,
    name: "Chocolate Peanut Butter Super Smoothie",
    type: MealType.Breakfast,
    ingredients: [
      { name: "bananas", quantity: ["", 2] },
      { name: "cocoa powder", quantity: ["cup", 0.25] },
      { name: "peanut butter", quantity: ["cup", 0.25] },
      { name: "hemp seeds", quantity: ["tbsp", 2] },
      { name: "almond milk", quantity: ["cup", 3] },
      { name: "maple syrup", quantity: ["tsp", 2] },
      { name: "ice cubes", quantity: ["handful", 1] }
    ],
    instructions: `This super smoothie is so thick and creamy, you might mistake it for a milkshake! Packed with plant-based protein and satisfying healthy fats, this super smoothie will keep you full for hours.

Combine the frozen bananas, cocoa powder, peanut butter, hemp seeds, almond or soy milk, maple syrup (or 1 date), and a handful of ice cubes in a blender and puree until creamy and smooth. Divide into two glasses and serve.

To make it into a smoothie bowl, reduce the milk to ¾ cup and top it with your favourite toppers. We love a few extra slices of banana, our Crispy Oat Granola (page 228), and a drizzle of peanut butter.

Lower FODMAP options:
Unripe bananas are lower in FODMAPs than ripe bananas. Half a ripe banana or 1 medium unripe banana are both low FODMAP. Use ½ banana per serving if you are sensitive to fructose.
Dates are higher in fructans, so use maple syrup if necessary.`
  },
  {
    id: 33,
    name: "Spicy Breakfast Tacos",
    type: MealType.Breakfast,
    ingredients: [
      { name: "cherry tomatoes", quantity: ["cup", 0.25] },
      { name: "jalapeño", quantity: ["", 0.5] },
      { name: "garlic-infused olive oil", quantity: ["tsp", 2] },
      { name: "garlic", quantity: ["clove", 1] },
      { name: "lime", quantity: ["", 0.5] },
      { name: "salt", quantity: ["pinch", 1] },
      { name: "black pepper", quantity: ["pinch", 1] },
      { name: "black beans", quantity: ["cup", 0.5] },
      { name: "smoked paprika", quantity: ["tsp", 0.75] },
      { name: "ground cumin", quantity: ["tsp", 0.75] },
      { name: "chives", quantity: ["tsp", 2] },
      { name: "cayenne pepper", quantity: ["dash", 1] },
      { name: "olive oil", quantity: ["tsp", 1] },
      { name: "firm tofu", quantity: ["ounce", 6] },
      { name: "corn tortillas", quantity: ["", 4] },
      { name: "cilantro", quantity: ["cup", 0.25] },
      { name: "avocado", quantity: ["", 0.25] }
    ],
    instructions: `Tacos for breakfast? Yes, please! Feel free to adjust the spice by decreasing the amount of jalapeño used in the salsa.

Make the salsa: In a small bowl, combine the sliced cherry tomatoes, seeded and sliced jalapeño, garlic-infused olive oil (see page 246), minced garlic, and juice of ½ lime with a pinch of salt and pepper. Set aside.

Make the taco filling: In a small saucepan, heat the black beans along with 2 tablespoons of water, ¼ teaspoon smoked paprika, ½ teaspoon cumin, 1 teaspoon chives, and a small pinch of cayenne, if using. Continue to cook for about 5 minutes, until warm. Gently smash the mixture using the back of a spoon, leaving some black beans whole. Set aside.

In a small bowl, add the remaining ½ teaspoon paprika, ½ teaspoon cumin, 1 teaspoon chives, dash cayenne, if using, and salt and pepper. Add 2 tablespoons water and whisk together. Set aside.

Heat the oil in a medium skillet over medium heat. Once hot, crumble the drained tofu into the pan along with the reserved taco sauce. Cook, stirring occasionally, for 5 minutes, or until heated through and the seasoning is absorbed.

To serve, warm the tortillas in a clean and dry skillet until warm and flexible. Top with the tofu, black beans, cilantro, sliced avocado, cherry tomato salsa, and a squeeze of fresh lime juice. Serve warm.`
  },
  {
    id: 34,
    name: "Mediterranean Grain Salad",
    type: MealType.Lunch,
    ingredients: [
      { name: "farro", quantity: ["cup", 1] },
      { name: "chickpeas", quantity: ["cup", 1] },
      { name: "tomato", quantity: ["", 1] },
      { name: "red bell pepper", quantity: ["", 1] },
      { name: "yellow bell pepper", quantity: ["", 1] },
      { name: "cucumber", quantity: ["cup", 0.5] },
      { name: "kalamata olives", quantity: ["cup", 0.25] },
      { name: "parsley", quantity: ["cup", 0.25] },
      { name: "lemon zest", quantity: ["tsp", 1] },
      { name: "lemon juice", quantity: ["cup", 0.25] },
      { name: "garlic", quantity: ["clove", 1] },
      { name: "dijon mustard", quantity: ["tsp", 1] },
      { name: "salt", quantity: ["", 0] },
      { name: "black pepper", quantity: ["", 0] },
      { name: "olive oil", quantity: ["tbsp", 3] }
    ],
    instructions: `This grain salad is perfect for lunch or easy dinners. Mix all of the ingredients together, then toss with the dressing right before serving. To pack for work, assemble the salad without the dressing in one container and the dressing in another. Toss together, then enjoy.

Make the grain salad: Bring 3 cups water to a boil in a medium saucepan over medium-high heat and add the farro. Cover, reduce the heat to medium-low, and simmer for 25 to 30 minutes, until the farro is tender. Drain and rinse under cold water and set aside.

Combine the cooked farro, chickpeas, diced large tomato, chopped medium red and yellow bell peppers, seeded and chopped cucumber, sliced kalamata olives, and chopped fresh parsley in a large bowl and toss together. Set aside.

Make the dressing: In a separate small bowl, whisk together the lemon zest, lemon juice, minced medium garlic clove, Dijon mustard, and a generous pinch of salt and pepper until well combined, then slowly drizzle in the olive oil.

Assemble: Toss the dressing with the grain salad until well combined, adding more salt and pepper as desired. Store in the fridge. Leftovers will keep for 2 to 3 days in the fridge.

Low FODMAP options:
Farro is high in fructans. Millet, quinoa, and brown rice are lower FODMAP options.
Chickpeas have moderate GOS. Reduce to ½ cup.
Garlic is high in fructans. Omit and use 1 teaspoon garlic-infused olive oil (see page 246) instead.`
  },{
    id: 35,
    name: "Kimchi Fried Rice",
    type: MealType.Dinner,
    ingredients: [
      { name: "kimchi", quantity: ["ounce", 16] },
      { name: "toasted sesame oil", quantity: ["tsp", 2] },
      { name: "scallions", quantity: ["", 3] },
      { name: "firm tofu", quantity: ["ounce", 8] },
      { name: "garlic", quantity: ["clove", 3] },
      { name: "ginger", quantity: ["tbsp", 1] },
      { name: "baby bok choy", quantity: ["bunch", 2] },
      { name: "shiitake mushrooms", quantity: ["ounce", 4] },
      { name: "tamari", quantity: ["tbsp", 1] },
      { name: "brown rice", quantity: ["cup", 2] },
      { name: "rice wine vinegar", quantity: ["tsp", 2] }
    ],
    instructions: `This fried rice gets a Fibre Fueled boost from the addition of kimchi, a Korean staple of fermented cabbage and vegetables. Alex really likes Sunja's Kimchi; use it if you can find it.

Drain the kimchi in a colander, reserving the liquid. Roughly chop the kimchi a few times into bite-size pieces, then set aside.

Heat the sesame oil in a large skillet over medium-high heat. Add the sliced scallions and cook, stirring frequently, for 2 to 3 minutes, until tender. Crumble in the drained and pressed tofu and stir to combine. Cook for an additional 2 to 3 minutes, until lightly browned. Stir in the minced garlic and fresh grated ginger.

Add in the thinly sliced baby bok choy and thinly sliced shiitake mushrooms and cook for another 2 to 3 minutes, until the bok choy is bright green and tender.

Add in the kimchi and tamari and cook until just heated through. Add in the cooked and cooled brown rice (reserved from Gumbo recipe, page 303), 1 tablespoon reserved kimchi brine, and the rice wine vinegar and cook, stirring frequently, for 3 to 4 minutes, until the mixture is heated through. Season to taste, adding more tamari, toasted sesame oil, or kimchi brine, as desired. Serve immediately.

Low FODMAP options:
Kimchi is high in fructans. Many kimchi brands contain garlic, so if you are sensitive to fructans, then you can either omit the kimchi altogether or select a different recipe for dinner tonight.
Use only the green parts of scallions for low FODMAP.
Garlic is high FODMAP and fructan. Omit and use 2 teaspoons garlic-infused olive oil (see page 246) instead.
A 1-cup serving of bok choy is FODMAP friendly. Over 1 1/3 cups per serving is moderate in sorbitol.
Shiitake mushrooms are high in mannitol. Substitute oyster mushrooms or omit.`
  },
  {
    id: 36,
    name: "Turmeric Energy Bites",
    type: MealType.Dessert,
    ingredients: [
      { name: "rolled oats", quantity: ["cup", 1.33] },
      { name: "almonds", quantity: ["cup", 0.25] },
      { name: "hemp seeds", quantity: ["cup", 0.25] },
      { name: "almond butter", quantity: ["cup", 0.5] },
      { name: "maple syrup", quantity: ["cup", 0.25] },
      { name: "lemon zest", quantity: ["tsp", 1] },
      { name: "lemon juice", quantity: ["tbsp", 2] },
      { name: "ground turmeric", quantity: ["tsp", 1] },
      { name: "salt", quantity: ["pinch", 1] },
      { name: "black pepper", quantity: ["pinch", 1] }
    ],
    instructions: `Turmeric contains the plant compound curcumin, which is known for its anti-inflammatory and antioxidant properties. It is also what gives curry its vibrant yellow colour. We added it to these bites with a touch of lemon for a sweet ball that's perfect for a snack between meals or a sweet after-dinner treat. Once it hits your lips . . . it's so good!

Makes 16 to 18 bites

Add the oats, chopped or sliced almonds, and hemp seeds to a medium bowl. Mix in the almond or peanut butter, maple syrup, lemon zest, freshly squeezed lemon juice, turmeric, salt, and pepper until well combined.

Cover a small tray or plate with parchment paper. Roll the mixture into tablespoon-size balls and place on a parchment paper–lined tray.

Place the tray in the refrigerator to chill until set, then transfer to an airtight container and keep in the fridge for up to 1 week or the freezer for up to 2 months.

Low FODMAP option:
Almonds are higher in FODMAPs (GOS) but a serving size of 10 nuts or 1 tablespoon of almond butter are okay if you're sensitive. One and a half tablespoons of almond butter has moderate GOS. Please pay attention to how you feel when increasing certain foods higher in FODMAPs this week and make adjustments to the recipes with the lower FODMAP options as necessary.
Peanut butter is lower in FODMAPs than almond butter.`
  },
  {
    id: 37,
    name: "Banana Baked Oatmeal",
    type: MealType.Breakfast,
    ingredients: [
      { name: "banana", quantity: ["", 1] },
      { name: "quick-cooking oats", quantity: ["cup", 1.5] },
      { name: "ground flaxseeds", quantity: ["tbsp", 2] },
      { name: "ground cinnamon", quantity: ["tsp", 0.5] },
      { name: "baking powder", quantity: ["tsp", 1] },
      { name: "salt", quantity: ["tsp", 0.25] },
      { name: "almond milk", quantity: ["cup", 0.75] },
      { name: "maple syrup", quantity: ["cup", 0.33] },
      { name: "sunflower oil", quantity: ["tbsp", 2] },
      { name: "vanilla extract", quantity: ["tsp", 1] },
      { name: "walnuts", quantity: ["cup", 0.25] }
    ],
    instructions: `Baked oatmeal is one of our favourite warm breakfasts. While this one is delicious right out of the pan, we recommend enjoying it warm, topped with cold almond milk, chopped nuts, and extra berries.

To prepare ahead, assemble everything the night before to bake in the morning or prep on Sunday and reheat with a little more almond milk as it will dry out slightly in the fridge.

Preheat the oven to 350°F. Lightly spray an 8 x 8-inch baking dish.

Place the sliced large banana in a single row on the bottom of the pan and set aside.

In a medium bowl, whisk together the oats, flaxseeds, cinnamon, baking powder, and salt.

In a separate medium bowl, whisk together the almond milk or other dairy-free milk, maple syrup, organic sunflower oil, and vanilla. Add to the oat mixture and stir together until combined. Stir in the chopped walnuts or other chopped nuts and gently top the sliced bananas in the baking dish with the oatmeal. Place in the oven and bake for 30 minutes, or until golden brown and set.

Low FODMAP options:
Quick-cooking oats have moderate GOS and fructans. Sub rolled oats.`
  },
  {
    id: 38,
    name: "Sunday Pasta",
    type: MealType.Dinner,
    ingredients: [
      { name: "cherry tomatoes", quantity: ["pint", 1] },
      { name: "olive oil", quantity: ["tsp", 1] },
      { name: "salt", quantity: ["", 0] },
      { name: "black pepper", quantity: ["", 0] },
      { name: "whole-grain spaghetti", quantity: ["ounce", 8] },
      { name: "tempeh", quantity: ["ounce", 8] },
      { name: "dried fennel", quantity: ["tsp", 1] },
      { name: "dried basil", quantity: ["tsp", 0.5] },
      { name: "dried oregano", quantity: ["tsp", 0.5] },
      { name: "red pepper flakes", quantity: ["tsp", 0.25] },
      { name: "dried sage", quantity: ["tsp", 0.5] },
      { name: "garlic", quantity: ["clove", 3] },
      { name: "tamari", quantity: ["tbsp", 1] },
      { name: "maple syrup", quantity: ["tbsp", 1] },
      { name: "lemon juice", quantity: ["tbsp", 3] },
      { name: "rocket", quantity: ["cup", 3] },
      { name: "walnuts", quantity: ["cup", 0.5] },
      { name: "nutritional yeast", quantity: ["tbsp", 2] },
      { name: "vegetable broth", quantity: ["cup", 0.25] },
      { name: "cashew cream", quantity: ["", 0] }
    ],
    instructions: `Growing up in an Italian household, Alex always associates Sunday evenings with family and piping-hot bowls of pasta. This Sunday dinner combines a few of our fibre-fueled favourites: tempeh sausage, rocket-lemon pesto, roasted tomatoes, and cashew cream. It takes longer than some of the other recipes to come together, but the extra effort is worth it.

The addition of cashew cream is optional, but it makes for an even more luscious dinner. Cashew cream thickens considerably once cooled, so reheat with a few tablespoons of water to thin.

Make the roasted tomatoes: Preheat the oven to 400˚F. Toss the cherry tomatoes with the olive oil and a pinch of salt and pepper, then place on a rimmed baking sheet. Roast for about 25 minutes, until very reduced and soft. Set aside.

Bring a large pot of salted water to a boil over medium-high heat and add the pasta. Cook until just al dente, reserve 1 cup pasta water, and drain. Set aside.

Make the sausage: Heat the olive oil in a large skillet over medium heat. Add the crumbled tempeh and cook for about 5 minutes, stirring often, until the tempeh is browned and crispy. Add the dried fennel, basil, oregano, red pepper flakes, sage, minced garlic clove, tamari, maple syrup and lemon juice. Cook, stirring occasionally, for another 2 to 3 minutes and set aside.

Make the pesto: Place the rocket, walnuts, and nutritional yeast in the base of a food processor and blend until very finely chopped. With the motor running, add in the lemon juice, vegetable broth or water, salt, and pepper. Drizzle in the olive oil, if desired. Add more salt and pepper to taste.

To assemble, toss the cooked spaghetti with the tomatoes, tempeh sausage, pesto, and cashew cream (page 307), if using. Thin with the reserved pasta water, adding 1 tablespoon at a time if needed, until creamy. Serve immediately.

Low FODMAP options:
5 cherry tomatoes per serving is low in fructans, so if sensitive, then reduce to only 20 cherry tomatoes total, or omit.
Whole-grain spaghetti is high in fructans. Reduce to ½ cup cooked per serving for FODMAP friendly, or use an alternative pasta option, like quinoa.
Garlic is high in fructans. Omit and sub 1 teaspoon garlic-infused olive oil (see page 246) for the sausage and 2 teaspoons for the pesto.
The cashews in the cashew cream are high in GOS and have moderate fructans. Omit the cashew cream if sensitive.`
  }
];

export default recipes;
