import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoent/header/header.component';
import { RecipesComponent } from './compoent/recipes/recipes.component';
import { RecipeDetailComponent } from './compoent/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './compoent/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './compoent/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './compoent/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './compoent/recipes/recipe-list/recipes-item/recipes-item.component';
import { Ingredient } from './Shared/Ingredient.model';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    ShoppingListComponent,RecipesItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
