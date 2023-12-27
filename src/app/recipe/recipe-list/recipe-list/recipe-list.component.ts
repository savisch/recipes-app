import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  // @Output() clickedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeClick(e: PointerEvent, recipe: Recipe) {
    // this.clickedRecipe.emit(recipe);
    e.preventDefault();
    this.recipeService.recipeClicked.emit(recipe);
    this.router.navigate(['recipes/recipe-detail', recipe.id]);
  }
}
