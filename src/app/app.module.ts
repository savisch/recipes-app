import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { HeaderComponent } from './header/header.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeBookHomeComponent } from './recipe-book-home/recipe-book-home.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListEditComponent,
    ShoppingListComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    RecipeEditComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent,
    RecipeBookHomeComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
