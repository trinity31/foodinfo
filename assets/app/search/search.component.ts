import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { SearchService } from "./search.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
     constructor(private searchService: SearchService) {

     }

    onSubmit(form:NgForm) {
     // const message = new Message(form.value.content, 'Max');
    //   this.messageService.addMessage(message)
    //         .subscribe(
    //             data => console.log(data),
    //             error => console.error(error),
                
    //         );
        console.log("Submit pressed! " + form.value.content);
        this.searchService.search(form.value.content);

        form.resetForm();
    }
}