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
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    // getFoods(params: Observable<Params>): Observable<Food> {
    //     const url = '/foodinfo/category';
    //     return params.flatMap(v => this.http.get(`${url}/${v.code}/${v.page}`))
    //          .map(r => r.json())
    //          .catch(err => Observable.throw(err));
    // }
    SearchService.prototype.search = function (value) {
        // console.log("Searching for " + value);
        var url = '/foodinfo/search/' + value;
        console.log("search url: " + url);
        return this.http.get(url)
            .map(function (r) { return r.json(); })
            .catch(function (err) { return Observable.throw(err); });
    };
    SearchService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], SearchService);
    return SearchService;
}());
export { SearchService };
