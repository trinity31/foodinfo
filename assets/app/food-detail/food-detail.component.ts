import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router"
import { Http } from "@angular/http";
import { Food, Product } from "../shared/food.model";
import { FoodDetailService } from "./food-detail.service";
import { CategoryService } from "../category/category.service";
import { FoodDetail, Material } from "../shared/food-detail.model";
import { FoodService } from "../food/food.service";

@Component({
    selector: 'app-food-detail',
    templateUrl: './food-detail.component.html'
})

export class FoodDetailComponent {
    materials: Material[];
    food_name: string;
    food_code: string;
    //current_page: number;

    constructor(public route: ActivatedRoute,
        private foodService: FoodService,
        private foodDetailService: FoodDetailService) {}

    ngOnInit() {
       // this.current_page = this.categoryService.getCurrentPage();
        this.food_code = this.foodService.getCurrentFoodCode();
        this.foodDetailService.getFoodDetail(this.route.params)
            .subscribe(
                (foodDetail: FoodDetail) => {
                    console.log(foodDetail);
                    this.materials = foodDetail.mat_list;
                } 
            )
    }

    getCurrentFoodName(): string {
        return this.foodService.getCurrentFoodName();
    }
}