import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent {
  recipeId: number;
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ recipe }) => {
      this.recipe = recipe;
    });
    // this.recipeId = +this.route.snapshot.params['id'];
    // this.getRecipe();
  }

  getRecipe(): void {
    this.recipe = this.recipeService.getRecipe(this.recipeId);
  }
}
