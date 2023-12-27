import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeClicked = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Test Recipe',
      description: 'This is a test Recipe',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg?20170213105318',
      ingredients: [
        { name: 'pickles', amount: 7 },
        { name: 'eggs', amount: 8 },
        { name: 'milk', amount: 1 },
      ],
    },
    {
      id: 2,
      name: 'Test Recipe 2',
      description: 'This is a test Recipe 2',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg?20170213105318',
      ingredients: [
        { name: 'pickles', amount: 7 },
        { name: 'eggs', amount: 8 },
        { name: 'milk', amount: 1 },
      ],
    },
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    let selectedRecipe: Recipe;
    this.recipes.forEach((recipe) => {
      if (recipe.id === id) {
        selectedRecipe = recipe;
      }
    });
    return selectedRecipe;
  }
}
