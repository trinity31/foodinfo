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

   // route: ActivatedRoute;

    // constructor(route: ActivatedRoute, http: Http) {
    //     const url = '/foodinfo/category';
    //     route.params.flatMap(v => http.get(`${url}/${v.code}`))
    //         .map(r => r.json())
    //         .subscribe(v => {
    //             this.foodList = v;
    //         })
    // }
    
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

    getCurrentCategory(): string {
        return this.categoryService.getCurrentCategory();
    }
}