import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeServiceService } from '../../recipe-service.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  // @Output() recipeSelected = new EventEmitter();
  constructor(public recipeservice: RecipeServiceService) {}

  onSelected() {
    this.recipeservice.recipeSelected.emit(this.recipe);
  }
  ngOnInit(): void {}
}
