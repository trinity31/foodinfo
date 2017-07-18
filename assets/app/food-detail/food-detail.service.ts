import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Food } from '../shared/food.model';
import { Params } from "@angular/router"
import { FoodDetail } from "../shared/food-detail.model";

@Injectable()
export class FoodDetailService {

    constructor(private http:Http) {}

    getFoodDetail(params: Observable<Params>): Observable<FoodDetail> {
        const url = '/foodinfo/food-detail';
        return params.flatMap(v => this.http.get(`${url}/${v.c}/${v.s}`))
             .map(r => r.json())
             .catch(err => Observable.throw(err));
    }
}