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
      { name: 'Mushroom', selected: false },
      { name: 'Carrot', selected: false },
      { name: 'Bottle Gourd', selected: false },
      { name: 'Spring Onion', selected: false }
    ]
  },
  {
    categoryName: 'Legumes',
    ingredients: [
      { name: 'Besan', selected: false },
      { name: 'Chickpea', selected: false },
      { name: 'Black Chana', selected: false },
      { name: 'Black Eyed Peas', selected: false },
      { name: 'Tur Dal', selected: false },
      { name: 'Chana Dal', selected: false },
      { name: 'Masoor Dal', selected: false },
      { name: 'Urad Dal', selected: false },
      { name: 'Kidney Beans', selected: false },
      { name: 'Moong Dal', selected: false },
    ]
  },
  {
    categoryName: 'Essentials',
    ingredients: [
      { name: 'Tomato', selected: false },
      { name: 'Onion', selected: false },
      { name: 'Bread', selected: false },
      { name: 'Garlic', selected: false },
      { name: 'Ginger', selected: false },
      { name: 'Pasta', selected: false },
      { name: 'Flour', selected: false },
      { name: 'Rice', selected: false },
    ]
  },
  {
    categoryName: 'Herbs / Spices',
    ingredients: [
      { name: 'Cilantro', selected: false },
      { name: 'Basil', selected: false },
      { name: 'Parsley', selected: false },
    ]
  },
  {
    categoryName: 'Meats',
    ingredients: [
      { name: 'Mutton', selected: false },
      { name: 'Chicken', selected: false },
      { name: 'Fish', selected: false },
      { name: 'Shrimp', selected: false },
    ]
  },
  {
    categoryName: 'Dairy & Eggs',
    ingredients: [
      { name: 'Milk', selected: false },
      { name: 'Egg', selected: false },
      { name: 'Paneer', selected: false },
      { name: 'Yoghurt', selected: false },
      { name: 'Cheese', selected: false },
    ]
  },
];
