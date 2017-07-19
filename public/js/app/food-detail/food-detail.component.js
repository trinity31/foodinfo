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
import { FoodDetailService } from "./food-detail.service";
import { FoodService } from "../food/food.service";
var FoodDetailComponent = (function () {
    //current_page: number;
    function FoodDetailComponent(route, foodService, foodDetailService) {
        this.route = route;
        this.foodService = foodService;
        this.foodDetailService = foodDetailService;
    }
    FoodDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.current_page = this.categoryService.getCurrentPage();
        this.food_code = this.foodService.getCurrentFoodCode();
        this.foodDetailService.getFoodDetail(this.route.params)
            .subscribe(function (foodDetail) {
            console.log(foodDetail);
            _this.materials = foodDetail.mat_list;
        });
    };
    FoodDetailComponent.prototype.getCurrentFoodName = function () {
        return this.foodService.getCurrentFoodName();
    };
    FoodDetailComponent = __decorate([
        Component({
            selector: 'app-food-detail',
            templateUrl: './food-detail.component.html'
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            FoodService,
            FoodDetailService])
    ], FoodDetailComponent);
    return FoodDetailComponent;
}());
export { FoodDetailComponent };
