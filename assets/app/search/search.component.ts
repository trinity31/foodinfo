import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { SearchService } from "./search.service";
import { Product, Food } from "../shared/food.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    foods: Product[];
    constructor(public route: ActivatedRoute,
        private searchService: SearchService) {
        
    }
    
    //console.log("Current Page: " + this.categoryService.getCurrentPage());
    //this.current_page = this.categoryService.getCurrentPage();

    onSubmit(form:NgForm) {
        // const message = new Message(form.value.content, 'Max');
        //   this.messageService.addMessage(message)
        //         .subscribe(
            //             data => console.log(data),
            //             error => console.error(error),
            
            //         );
            console.log("Submit pressed! " + form.value.content);
            //this.searchService.search(form.value.content);
            this.searchService.search(this.route.params)
            .subscribe(
                (foods: Food) => {
                    console.log(foods);
                    this.foods = foods.food_list;
                } 
            )            
            form.resetForm();
        }
    }