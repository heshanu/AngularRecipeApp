import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/Shared/Ingredient.model";

export class ShoppinListService{
  ingredentsChanged=new EventEmitter<Ingredient[]>();
 private ingredients: Ingredient[]=[
    new Ingredient('apples',10),
    new Ingredient('tomatos',100),
  ];

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredentsChanged.emit(this.ingredients.slice());
  }

}
