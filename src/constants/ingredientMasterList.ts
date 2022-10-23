export type Ingredient = {
  name: string,
  selected: boolean
}

export type IngredientCategory = {
  categoryName: string,
  ingredients: Ingredient[]
}

export const allIngredients: IngredientCategory[] = [
  {
    categoryName: 'Vegetables',
    ingredients: [
      { name: 'Potato', selected: false },
      { name: 'Sweet Potato', selected: false },
      { name: 'Cauliflower', selected: false },
      { name: 'Squash', selected: false },
      { name: 'Cabbage', selected: false },
      { name: 'Spinach', selected: false },
      { name: 'Brocolli', selected: false },
      { name: 'Peas', selected: false },
      { name: 'Green Capsicum', selected: false },
    ]
  },
  {
    categoryName: 'Essentials',
    ingredients: [
      { name: 'Tomato',  selected: false },
      { name: 'Onion',  selected: false },
      { name: 'Bread',  selected: false },
      { name: 'Garlic',  selected: false },
      { name: 'Ginger',  selected: false },
      { name: 'Pasta',  selected: false },
      { name: 'Flour',  selected: false },
    ]
  },
  {
    categoryName: 'Herbs / Spices',
    ingredients: [
      { name: 'Cilantro',  selected: false },
      { name: 'Basil',  selected: false },
      { name: 'Parsley',  selected: false },
    ]
  },
  {
    categoryName: 'Meats',
    ingredients: [
      { name: 'Mutton',  selected: false },
      { name: 'Chicken',  selected: false },
      { name: 'Fish',  selected: false },
    ]
  },
  {
    categoryName: 'Dairy & Eggs',
    ingredients: [
      { name: 'Milk',  selected: false },
      { name: 'Egg',  selected: false },
      { name: 'Paneer',  selected: false },
      { name: 'Yoghurt',  selected: false },
      { name: 'Cheese',  selected: false },
    ]
  },
];
