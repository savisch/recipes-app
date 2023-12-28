import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, childAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeBookHomeComponent } from './recipe-book-home/recipe-book-home.component';
import { recipeResolver } from './recipe.resolver';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: 'recipe-book',
    title: 'Recipe Book',
    component: RecipeBookHomeComponent,
  },
  {
    path: 'recipes',
    title: 'Recipe List',
    component: RecipeComponent,
    canActivateChild: [childAuthGuard],
    children: [
      {
        path: 'recipe-detail/:id',
        title: 'Recipe Detail',
        component: RecipeDetailComponent,
        resolve: { recipe: recipeResolver },
      },
      {
        path: 'recipe-edit/:id',
        title: 'Recipe Edit',
        component: RecipeEditComponent,
        resolve: { recipe: recipeResolver },
      },
    ],
  },
  {
    path: 'shopping',
    canActivate: [authGuard],
    title: 'Shopping List',
    component: ShoppingListComponent,
  },
  {
    path: 'page-not-found',
    title: 'Not Found',
    component: PageNotFoundComponent,
  },
  {
    path: 'not-authorized',
    title: 'Not Authorized',
    component: NotAuthorizedComponent,
  },
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  declarations: [],
  // imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AppRoutingModule {}
