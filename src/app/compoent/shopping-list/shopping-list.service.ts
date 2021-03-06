import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';

export class ShoppingListService {
  ingredentsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 10),
    new Ingredient('tomatos', 100),
  ];

  getIngredient() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredentsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //   for(let i of ingredients){
    //     this.addIngredient(ingredient);
    //   }
    // }
    this.ingredients.push(...ingredients);
    this.ingredentsChanged.emit(this.ingredients.slice());
  }
}
