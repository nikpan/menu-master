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
    effort: Effort.Medium,
    imgSrc: Images.palakParatha
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
    ingredients: ['Potato', 'Flour'],
    imgSrc: Images.potatoGnocchi
  },
  {
    name: 'Sweet Potato Gnocchi',
    ingredients: ['Sweet Potato', 'Flour'],
    imgSrc: Images.sweetPotatoGnocchi
  },
  {
    name: 'Spaghetti Aglio Olio',
    ingredients: ['Pasta', 'Garlic'],
    imgSrc: Images.spaghetti
  },
  {
    name: 'Red Pasta',
    ingredients: ['Pasta', 'Tomato'],
    imgSrc: Images.redPasta
  },
  {
    name: 'Shrimp Masala',
    ingredients: ['Shrimp'],
    imgSrc: Images.shrimpMasala
  },
  {
    name: 'Mushroom Masala',
    ingredients: ['Mushroom'],
    imgSrc: Images.mushroomMasala
  },
  {
    name: 'Pav Bhaji',
    ingredients: ['Carrot', 'Potato', 'Tomato', 'Onion', 'Green Capsicum', 'Peas'],
    imgSrc: Images.pavBhaji
  },
  {
    name: 'Egg Bhurji',
    ingredients: ['Egg'],
    imgSrc: Images.eggBhurji
  },
  {
    name: 'Egg Fried Rice',
    ingredients: ['Egg', 'Rice'],
    imgSrc: Images.eggFriedRice
  },
  {
    name: 'Lauki Sabji',
    ingredients: ['Bottle Gourd'],
    imgSrc: Images.laukiSabji
  },
  {
    name: 'Lauki Thalipeeth',
    ingredients: ['Bottle Gourd'],
    imgSrc: Images.laukiThalipeeth
  },
  {
    name: 'Aite',
    ingredients: ['Spring Onion', 'Rice'],
    imgSrc: Images.aite
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
    ingredients: ['Tur Dal'],
    imgSrc: Images.turDal
  },
  {
    name: 'Dal Makhni',
    ingredients: ['Urad Dal', 'Kidney Beans'],
    imgSrc: Images.dalMakhani
  },
  {
    name: 'Chavli chi bhaji',
    ingredients: ['Black Eyed Peas'],
    imgSrc: Images.lobiaDal
  },
  {
    name: 'Moong Dal',
    ingredients: ['Moong Dal'],
    imgSrc: Images.moongDal
  },
  {
    name: 'Chole',
    ingredients: ['Chickpea'],
    imgSrc: Images.chole
  },
  {
    name: 'Chane',
    ingredients: ['Black Chana'],
    imgSrc: Images.chane
  },
  {
    name: 'Mexican Rice',
    ingredients: ['Kidney Beans', 'Rice'],
    imgSrc: Images.mexicanRice
  },
  {
    name: 'Rajma',
    ingredients: ['Kidney Beans'],
    imgSrc: Images.rajma
  }
]