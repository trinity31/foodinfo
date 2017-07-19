import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router"
import { Http } from "@angular/http";
import { Food, Product } from "../shared/food.model";
import { FoodService } from "./food.service";
import { CategoryService } from "../category/category.service";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html'
})

export class FoodComponent {
    foods: Product[];
    current_food_code: string;
    category_name: string;
    current_page: number;
    
    constructor(public route: ActivatedRoute, 
        private foodService: FoodService,
        private categoryService: CategoryService,
        @Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {
        console.log("Current Page: " + this.categoryService.getCurrentPage());
        this.current_page = this.categoryService.getCurrentPage();
        this.current_food_code = this.categoryService.getCurrentFoodCode();
        this.foodService.getFoods(this.route.params)
            .subscribe(
                (foods: Food) => {
                    console.log(foods);
                    this.document.body.scrollTop = 0;
                    this.foods = foods.food_list;
                } 
            )
    }

    getCurrentCategory() {
        return this.categoryService.getCurrentCategory();
    }

    setCurrentFood(food: Product) {
        this.foodService.setCurrentFood(food.food_name, food.code);
    }
}