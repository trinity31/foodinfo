import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Food } from '../shared/food.model';
import { Params } from "@angular/router"

@Injectable()
export class SearchService {

    constructor(private http:Http) {}

    // getFoods(params: Observable<Params>): Observable<Food> {
    //     const url = '/foodinfo/category';
    //     return params.flatMap(v => this.http.get(`${url}/${v.code}/${v.page}`))
    //          .map(r => r.json())
    //          .catch(err => Observable.throw(err));
    // }

    search(value: string) {
        console.log("Searching for " + value);
    }
}