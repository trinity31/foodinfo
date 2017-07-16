import { Component } from '@angular/core'; 

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/category']">카테고리</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/search']">검색</a></li>
                </ul>
            </nav>
        </header>
    `
})

export class HeaderComponent {

}