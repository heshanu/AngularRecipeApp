import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ingredients: Ingredient[]=[
    new Ingredient('apples',10),
    new Ingredient('tomatos',100),
  ];

}
