import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IIngredientsArray, IIngredientCommon } from 'app/shared/states/ingredients/ingredients.interface';

@Component({
  selector: 'app-filter-ingredients',
  templateUrl: './filter-ingredients.component.html',
  styleUrls: ['./filter-ingredients.component.scss']
})
export class FilterIngredientsComponent implements OnInit {
  @Output() onIngredientSelected = new EventEmitter<string>();
  @Output() onIngredientUnselected = new EventEmitter<string>();

  @Input() ingredients: IIngredientsArray;

  constructor() { }

  ngOnInit() { }

  handleClick(ingredient: IIngredientCommon) {
    if (ingredient.isSelected) {
      this.onIngredientUnselected.emit(ingredient.id);
    } else {
      this.onIngredientSelected.emit(ingredient.id);
    }
  }
}
