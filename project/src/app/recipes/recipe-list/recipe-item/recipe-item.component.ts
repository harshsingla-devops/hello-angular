import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };
  //@Output() selectedRecipe = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onRecipeSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
