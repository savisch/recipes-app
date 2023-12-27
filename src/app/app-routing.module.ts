import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeBookHomeComponent } from './recipe-book-home/recipe-book-home.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: 'recipe-book', component: RecipeBookHomeComponent },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      { path: 'recipe-detail/:id', component: RecipeDetailComponent },
      { path: 'recipe-edit/:id', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
