import { ListMeals } from './Data/db-data';
import { Component, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MealsComponent } from './meals/meals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NewTask3';

  @Input() meals = ListMeals;

  //make refrence all meal Card by viewChild In Parent Component
  @ViewChildren(MealsComponent) MealCards: QueryList<MealsComponent>;

  //to access the displayMealDescription with random desc paramter
  @ViewChild(MealsComponent) Meal: MealsComponent;

  getRandomDescription(){
    const randomIndex = Math.floor(Math.random() * this.MealCards.length);
    this.Meal.displayMealDescription(this.MealCards.toArray()[randomIndex].Meal.description)

  }
}
