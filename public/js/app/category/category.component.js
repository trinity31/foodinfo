var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CategoryService } from './category.service';
var CategoryComponent = (function () {
    function CategoryComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) {
            console.log(categories);
            _this.categories = categories.food_list;
        });
    };
    CategoryComponent.prototype.onCategoryClicked = function (category) {
        this.categoryService.setCurrentCategory(category.code_name);
        this.categoryService.setCurrentFoodCode(category.code);
        this.categoryService.setCurrentPage(1);
    };
    CategoryComponent = __decorate([
        Component({
            selector: 'app-category',
            templateUrl: './category.component.html'
        }),
        __metadata("design:paramtypes", [CategoryService])
    ], CategoryComponent);
    return CategoryComponent;
}());
export { CategoryComponent };
