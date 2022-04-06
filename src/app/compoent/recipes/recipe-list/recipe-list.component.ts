import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
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
  constructor() {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {}
}
