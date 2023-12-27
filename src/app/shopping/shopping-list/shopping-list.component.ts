import { Component } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredients.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.ingredients;
  }

  onDeleteItem(deletedIngredient: Ingredient) {
    this.shoppingService.onDeleteItem(deletedIngredient);
    // this.ingredients.forEach((savedIngredient) => {
    //   if (savedIngredient.name === deletedIngredient.name) {
    //     this.ingredients.splice(this.ingredients.indexOf(savedIngredient, 1));
    //   }
    // });
  }
}
