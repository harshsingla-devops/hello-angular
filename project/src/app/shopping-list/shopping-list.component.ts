import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient(10, 'Apples'),
    new Ingredient(12, 'Tomatos'),
  ];
  constructor() {}

  ngOnInit(): void {}

  onAddIngredient(ingredientAdded: Ingredient): void {
    console.log(ingredientAdded);
    this.ingredients.push(ingredientAdded);
  }
}
