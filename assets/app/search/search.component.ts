import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { SearchService } from "./search.service";
import { Product, Food } from "../shared/food.model";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../food/food.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    foods: Product[];

    constructor(public route: ActivatedRoute,
        private foodService: FoodService,
        private searchService: SearchService) {
    }
    
    onSubmit(form: NgForm) {
            console.log("Submit pressed! " + form.value.content);
            //this.searchService.search(form.value.content);
            this.searchService.search(form.value.content)
            .subscribe(
                (foods: Food) => {
                    console.log(foods);
                    this.foods = foods.food_list;
                } 
            )            
            form.resetForm();
    }

    setCurrentFood(food: Product) {
        this.foodService.setCurrentFood(food.food_name, food.code);
    }
}