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
var FoodService = (function () {
    function FoodService(http) {
        this.http = http;
    }
    FoodService.prototype.getFoods = function (params) {
        var _this = this;
        var url = '/foodinfo/category';
        return params.flatMap(function (v) { return _this.http.get(url + "/" + v.code + "/" + v.page); })
            .map(function (r) { return r.json(); })
            .catch(function (err) { return Observable.throw(err); });
    };
    FoodService.prototype.setCurrentFood = function (name, code) {
        this.current_name = name;
        this.current_code = code;
    };
    FoodService.prototype.getCurrentFoodName = function () {
        return this.current_name;
    };
    FoodService.prototype.getCurrentFoodCode = function () {
        return this.current_code;
    };
    FoodService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], FoodService);
    return FoodService;
}());
export { FoodService };
