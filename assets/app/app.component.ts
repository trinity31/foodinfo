import { Component } from '@angular/core';
import { CategoryService } from './category/category.service';
import { FoodService } from "./food/food.service";
import { SearchService } from "./search/search.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [CategoryService, FoodService, SearchService]
})

export class AppComponent {
    // message = {
    //     content: 'A message',
    //     author: 'Max'
    // }
}