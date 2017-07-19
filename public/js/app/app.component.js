var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { CategoryService } from './category/category.service';
import { FoodService } from "./food/food.service";
import { SearchService } from "./search/search.service";
import { FoodDetailService } from "./food-detail/food-detail.service";
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            providers: [CategoryService, FoodService, FoodDetailService, SearchService]
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
