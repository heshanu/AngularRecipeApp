import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  recipeSelected=new EventEmitter<Recipe >();
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg'
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg'
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg'
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg'
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg'
    ),
    new Recipe(
      'a test recipe',
      'this is simple recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe.jpg'
    ),
  ];
  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }


}
