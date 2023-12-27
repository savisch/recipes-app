// export class Recipe {
//   name: string;
//   description: string;
//   imagePath: string;

import { Ingredient } from '../../shared/models/ingredients.model';

//   constructor(name: string, desc: string, imagePath: string) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//   }
// }

export interface Recipe {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
