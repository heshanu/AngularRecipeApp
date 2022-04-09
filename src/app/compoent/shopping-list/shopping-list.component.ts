import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!:Ingredient[];
  constructor(private shoppinglistservice:ShoppingListService ) {}
  ngOnInit(): void {
    this.ingredients=this.shoppinglistservice.getIngredient();
    this.shoppinglistservice.ingredentsChanged
    .subscribe((ingredient:Ingredient[])=>{
        this.ingredients= this.ingredients;
    })
  }


}
