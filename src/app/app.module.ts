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
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from '../app/Shared/dropdown.directive';
import { RecipeServiceService } from './compoent/recipes/recipe-service.service';
import {ShoppingListService} from '../app/compoent/shopping-list/shopping-list.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipesItemComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,NgbModule],
  providers: [RecipeServiceService,ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
