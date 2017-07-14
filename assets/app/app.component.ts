import { Component } from '@angular/core';
import { CategoryService } from './category/category.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [CategoryService]
})

export class AppComponent {
    // message = {
    //     content: 'A message',
    //     author: 'Max'
    // }
}