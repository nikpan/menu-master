export type Recipe = {
  name: string,
  ingredients: string[]
}

export const recipes: Recipe[] = [
  {
    name: 'Aloo Paratha',
    ingredients: ['Potato','Flour']
  },  
  {
    name: 'Palak Paratha',
    ingredients: ['Spinach', 'Flour']
  },
  {
    name: 'Gobi Paratha',
    ingredients: ['Cauliflower', 'Flour']
  },
  {
    name: 'Aloo Gobi',
    ingredients: ['Potato', 'Cauliflower']
  },
  {
    name: 'Aloo Palak',
    ingredients: ['Potato', 'Cauliflower']
  },
  {
    name: 'Aloo Matar',
    ingredients: ['Potato', 'Peas']
  },
  {
    name: 'Matar Paneer',
    ingredients: ['Paneer', 'Peas']
  },
  {
    name: 'Paneer Do Pyaaza',
    ingredients: ['Paneer', 'Onion', 'Green Capsicum']
  },
  {
    name: 'Palak Paneer',
    ingredients: ['Spinach', 'Paneer']
  },
  {
    name: 'Potato Gnocchi',
    ingredients: ['Potato', 'Flour']
  },
  {
    name: 'Sweet Potato Gnocchi',
    ingredients: ['Sweet Potato', 'Flour']
  },
  {
    name: 'Spaghetti Aglio Olio',
    ingredients: ['Pasta', 'Garlic']
  },
  {
    name: 'Red Pasta',
    ingredients: ['Pasta', 'Tomato']
  },
]