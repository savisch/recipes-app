import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from '../../../shopping/services/shopping.service';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  recipeId: number;

  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeId = +this.route.snapshot.params['id'];
    this.getRecipe();
    this.onRecipeClick();
  }

  getRecipe(): void {
    this.recipe = this.recipeService.getRecipe(this.recipeId);
  }

  onRecipeClick() {
    this.recipeService.recipeClicked.subscribe((data) => {
      this.recipe = data;
    });
  }

  onOptionClick(e: string): void {
    if (e === 'shopping-list') {
      this.shoppingService.onAddItem(this.recipe.ingredients);
    }
  }
}
