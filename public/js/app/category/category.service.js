var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategories = function () {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json;charset=utf-8');
        // headers.append('x-waple-authorization', `NDAzLTE0OTkxNzMzNjEwMjItMWI3OGU4Y2MtNmJmZC00NWFjLWI4ZTgtY2M2YmZkODVhYzkz`);                            
        // let params = '';
        // let options = new RequestOptions({
        //     headers: headers,
        //     search: new URLSearchParams('uid=LS7CVJG3')
        // });
        var url = '/foodinfo/category';
        return this.http.get(url)
            .map(function (r) { return r.json(); })
            .catch(function (err) { return Observable.throw(err); });
    };
    CategoryService.prototype.setCurrentCategory = function (category_name) {
        this.current_category = category_name;
    };
    CategoryService.prototype.getCurrentCategory = function () {
        return this.current_category;
    };
    CategoryService.prototype.setCurrentPage = function (page) {
        this.current_page = page;
    };
    CategoryService.prototype.getCurrentPage = function () {
        return this.current_page;
    };
    CategoryService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], CategoryService);
    return CategoryService;
}());
export { CategoryService };
