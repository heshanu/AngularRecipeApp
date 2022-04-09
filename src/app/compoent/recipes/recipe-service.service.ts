import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { Recipe } from './recipes.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  recipeSelected = new EventEmitter<Recipe>();
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg',
      [new Ingredient('meat', 1), new Ingredient('Rice', 20)]
    ),
    new Recipe(
      'Another test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg',
      [new Ingredient('fish', 10), new Ingredient('Rice Fried', 20)]
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg',
      [new Ingredient('meat', 100), new Ingredient('Rice  smaba', 20)]
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg',
      [new Ingredient('pork meat', 1), new Ingredient('Rice pork', 20)]
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg',
      []
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg',
      []
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg',
      []
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
