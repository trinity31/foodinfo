import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CategoryComponent } from "./category/category.component";
import { FoodComponent } from './food/food.component';
import { router } from './app.routing';
import { HeaderComponent } from "./header.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FoodDetailComponent } from "./food-detail/food-detail.component";

@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent,
        FoodComponent,
        FoodDetailComponent,
        SearchComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        router, 
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}