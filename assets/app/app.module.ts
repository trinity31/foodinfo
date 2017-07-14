import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CategoryComponent } from "./category/category.component";
@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent
    ],
    imports: [
        BrowserModule,
        HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}