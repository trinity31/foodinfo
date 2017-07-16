import { Component, OnInit, Output } from '@angular/core';
import { Category, FoodType } from '../shared/category.model';
import { CategoryService } from './category.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})

export class CategoryComponent {
    categories: FoodType[];

    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
                this.categoryService.getCategories()
                .subscribe(
                    (categories: Category) => {
                        console.log(categories)
                        this.categories = categories.food_list;
                    }
                );
    }

    onCategoryClicked(category_name: string) {
        this.categoryService.setCurrentCategory(category_name);
        this.categoryService.setCurrentPage(1);
    }
}