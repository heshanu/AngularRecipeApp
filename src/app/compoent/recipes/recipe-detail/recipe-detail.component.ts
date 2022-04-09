import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeServiceService } from '../recipe-service.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe!:Recipe;
  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

}
