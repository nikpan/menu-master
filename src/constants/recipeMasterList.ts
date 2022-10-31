import Images from "../assets/imageLoader";

export enum Effort {
  Low,
  Medium,
  High
}

export type Recipe = {
  name: string,
  ingredients: string[],
  effort?: Effort,
  imgSrc?: string
}

export const recipes: Recipe[] = [
  {
    name: 'Aloo Paratha',
    ingredients: ['Potato','Flour'],
    effort: Effort.Medium,
    imgSrc: Images.alooParatha
  },  
  {
    name: 'Palak Paratha',
    ingredients: ['Spinach', 'Flour'],
    effort: Effort.Medium
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
    ingredients: ['Potato', 'Spinach']
  },
  {
    name: 'Aloo Matar',
    ingredients: ['Potato', 'Peas'],
    imgSrc: Images.alooMatar
  },
  {
    name: 'Aloo Jeera',
    ingredients: ['Potato']
  },
  {
    name: 'Dum Aloo',
    ingredients: ['Potato']
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
  {
    name: 'Shrimp Masala',
    ingredients: ['Shrimp']
  },
  {
    name: 'Mushroom Masala',
    ingredients: ['Mushroom']
  },
  {
    name: 'Pav Bhaji',
    ingredients: ['Carrot', 'Potato', 'Tomato', 'Onion', 'Green Capsicum', 'Peas'],
    imgSrc: Images.pavBhaji
  },
  {
    name: 'Egg Bhurji',
    ingredients: ['Egg']
  },
  {
    name: 'Egg Fried Rice',
    ingredients: ['Egg', 'Rice']
  },
  {
    name: 'Lauki Sabji',
    ingredients: ['Bottle Gourd']
  },
  {
    name: 'Lauki Thalipeeth',
    ingredients: ['Bottle Gourd']
  },
  {
    name: 'Aite',
    ingredients: ['Spring Onion', 'Rice']
  },
  {
    name: 'Pithla',
    ingredients: ['Besan']
  },
  {
    name: 'Masoor Dal',
    ingredients: ['Masoor Dal'],
    imgSrc: Images.masoorDal
  },
  {
    name: 'Tur Dal',
    ingredients: ['Tur Dal']
  },
  {
    name: 'Dal Makhni',
    ingredients: ['Urad Dal', 'Kidney Beans']
  },
  {
    name: 'Chavli chi bhaji',
    ingredients: ['Black Eyed Peas']
  },
  {
    name: 'Moong Dal',
    ingredients: ['Moong Dal']
  },
  {
    name: 'Chole',
    ingredients: ['Chickpea']
  },
  {
    name: 'Chane',
    ingredients: ['Black Chana']
  },
  {
    name: 'Mexican Rice',
    ingredients: ['Kidney Beans', 'Rice']
  }
]