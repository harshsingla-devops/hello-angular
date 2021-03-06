import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName')
  name!: ElementRef;
  @ViewChild('IngredientAmount')
  amount!: ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    let addedIngredient = new Ingredient(
      this.amount.nativeElement.value,
      this.name.nativeElement.value
    );
    //this.ingredientAdded.emit(addedIngredient);
    this.slService.ingredientAdded(addedIngredient);
  }
}
