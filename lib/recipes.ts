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
            }
          
        
];
  
export default recipes;
