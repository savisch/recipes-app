import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredient1: Ingredient = {
    name: 'Eggs',
    amount: 5,
  };
  ingredient2: Ingredient = {
    name: 'Milk',
    amount: 1,
  };

  ingredients: Ingredient[] = [this.ingredient1, this.ingredient2];
  constructor() {}

  onAddItem(e: Ingredient | Ingredient[]) {
    if (e instanceof Array) {
      // e.forEach((ingredient) => this.ingredients.push(ingredient));
      this.ingredients.push(...e);
    } else {
      this.ingredients.push(e);
    }
  }

  onDeleteItem(deletedIngredient: Ingredient) {
    this.ingredients.forEach((savedIngredient) => {
      if (savedIngredient.name === deletedIngredient.name) {
        this.ingredients.splice(this.ingredients.indexOf(savedIngredient, 1));
      }
    });
  }
}
