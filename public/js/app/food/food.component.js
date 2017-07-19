var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "./food.service";
import { CategoryService } from "../category/category.service";
var FoodComponent = (function () {
    function FoodComponent(route, foodService, categoryService) {
        this.route = route;
        this.foodService = foodService;
        this.categoryService = categoryService;
    }
    FoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Current Page: " + this.categoryService.getCurrentPage());
        this.current_page = this.categoryService.getCurrentPage();
        this.foodService.getFoods(this.route.params)
            .subscribe(function (foods) {
            console.log(foods);
            _this.foods = foods.food_list;
        });
    };
    FoodComponent.prototype.getCurrentCategory = function () {
        return this.categoryService.getCurrentCategory();
    };
    FoodComponent.prototype.setCurrentFood = function (food) {
        this.foodService.setCurrentFood(food.food_name, food.code);
    };
    FoodComponent = __decorate([
        Component({
            selector: 'app-food',
            templateUrl: './food.component.html'
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            FoodService,
            CategoryService])
    ], FoodComponent);
    return FoodComponent;
}());
export { FoodComponent };
