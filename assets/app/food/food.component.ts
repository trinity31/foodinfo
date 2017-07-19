import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router"
import { Http } from "@angular/http";
import { Food, Product } from "../shared/food.model";
import { FoodService } from "./food.service";
import { CategoryService } from "../category/category.service";

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html'
})

export class FoodComponent {
    foods: Product[];
    category_name: string;
    current_page: number;
    
    constructor(public route: ActivatedRoute, 
        private foodService: FoodService,
        private categoryService: CategoryService) {}

    ngOnInit() {
        console.log("Current Page: " + this.categoryService.getCurrentPage());
        this.current_page = this.categoryService.getCurrentPage();

        this.foodService.getFoods(this.route.params)
            .subscribe(
                (foods: Food) => {
                    console.log(foods);
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