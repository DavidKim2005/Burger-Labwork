import cheeseImg from './assets/cheese.png';
import meatImg from './assets/meat.png';
import saladImg from './assets/salad.png';
import baconImg from './assets/bacon.png';

type Ingredient = {
    name: string,
    price: number,
    image: string,
    count: number
};

export const INGREDIENTS: Ingredient[] = [

    {name: 'Meat', price: 80, image: meatImg, count: 0},
    {name: 'Cheese', price: 50, image: cheeseImg, count: 0},
    {name: 'Salad', price: 10, image: saladImg, count: 0},
    {name: 'Bacon', price: 60, image: baconImg, count: 0},
  ];

  