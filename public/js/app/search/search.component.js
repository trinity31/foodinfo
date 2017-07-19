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
import { SearchService } from "./search.service";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../food/food.service";
var SearchComponent = (function () {
    function SearchComponent(route, foodService, searchService) {
        this.route = route;
        this.foodService = foodService;
        this.searchService = searchService;
    }
    SearchComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log("Submit pressed! " + form.value.content);
        //this.searchService.search(form.value.content);
        this.searchService.search(form.value.content)
            .subscribe(function (foods) {
            console.log(foods);
            _this.foods = foods.food_list;
        });
        form.resetForm();
    };
    SearchComponent.prototype.setCurrentFood = function (food) {
        this.foodService.setCurrentFood(food.food_name, food.code);
    };
    SearchComponent = __decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html'
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            FoodService,
            SearchService])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
