import { ListMeals } from './../Data/db-data';

import { Component, ContentChildren, Input, QueryList, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {
  //from parent to childs
   @Input() Meal = ListMeals;

  @ContentChildren('mealImgs') MealsImages? : QueryList<any>;

  displayMealDescription(descr:string){
    alert(descr);
  }


}
