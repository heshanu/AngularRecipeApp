import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeServiceService } from './recipe-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServiceService]
})
export class RecipesComponent implements OnInit {
selectedRecipe!:Recipe;
  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
