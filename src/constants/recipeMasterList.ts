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
    ingredients: ['Cauliflower', 'Flour'],
    imgSrc: Images.gobiParatha,
  },
  {
    name: 'Aloo Gobi',
    ingredients: ['Potato', 'Cauliflower'],
    imgSrc: Images.alooGobi
  },
  {
    name: 'Aloo Palak',
    ingredients: ['Potato', 'Spinach'],
    imgSrc: Images.alooPalak
  },
  {
    name: 'Aloo Matar',
    ingredients: ['Potato', 'Peas'],
    imgSrc: Images.alooMatar
  },
  {
    name: 'Aloo Jeera',
    ingredients: ['Potato'],
    imgSrc: Images.alooJeera
  },
  {
    name: 'Dum Aloo',
    ingredients: ['Potato'],
    imgSrc: Images.dumAloo,
  },
  {
    name: 'Matar Paneer',
    ingredients: ['Paneer', 'Peas'],
    imgSrc: Images.matarPaneer
  },
  {
    name: 'Paneer Do Pyaaza',
    ingredients: ['Paneer', 'Onion', 'Green Capsicum'],
    imgSrc: Images.paneerDoPyaaza
  },
  {
    name: 'Palak Paneer',
    ingredients: ['Spinach', 'Paneer'],
    imgSrc: Images.palakPaneer
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
    ingredients: ['Besan'],
    imgSrc: Images.pithla
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
  },
  {
    name: 'Rajma',
    ingredients: ['Kidney Beans'],
    imgSrc: Images.rajma
  }
]