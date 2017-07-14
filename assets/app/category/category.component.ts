import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})

export class CategoryComponent {
    categories: Category[];
    // categories:Category[] = [
    //     new Category("001", "Category 1", 15),
    //     new Category("002", "Category 2", 3),
    //     new Category("003", "Category 3", 24)
    // ]

    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
                this.categoryService.getCategories()
            .subscribe(
                (categories: Category[]) => {
                    this.categories = categories;
                }
            );
    }
}