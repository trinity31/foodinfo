import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Food } from '../shared/food.model';
import { Params } from "@angular/router"

@Injectable()
export class FoodService {
    //private categories: Category[] = []; //create empty array
    ////route: ActivatedRoute;

    // constructor(route: ActivatedRoute, http: Http) {
    //     const url = '/foodinfo/category';
    //     route.params.flatMap(v => http.get(`${url}/${v.code}`))
    //         .map(r => r.json())
    //         .subscribe(v => {
    //             this.foodList = v;
    //         })
    // }

    constructor(private http:Http) {}

    getFoods(params: Observable<Params>): Observable<Food> {
        const url = '/foodinfo/category';
        return params.flatMap(v => this.http.get(`${url}/${v.code}/${v.page}`))
             .map(r => r.json())
             .catch(err => Observable.throw(err));
    }
}