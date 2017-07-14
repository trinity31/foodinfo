import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Category } from './category.model';

@Injectable()
export class CategoryService {
    private categories: Category[] = []; //create empty array

    constructor(private http:Http) {}

    getCategories() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('x-waple-authorization', `NDAzLTE0OTkxNzMzNjEwMjItMWI3OGU4Y2MtNmJmZC00NWFjLWI4ZTgtY2M2YmZkODVhYzkz`);                            
        let params = '';
        let options = new RequestOptions({
            headers: headers,
            search: new URLSearchParams('uid=LS7CVJG3')
        });

        return this.http.get('http://api.dbstore.or.kr:8880/foodinfo/category.do', options)
            .map((response: Response) => {
                const categories = response.json().obj;
                let transformedCategories: Category[] = [];
                for (let category of categories) {
                    transformedCategories.push(new Category(category.code, category.code_name, category.count));
                }
                this.categories = transformedCategories;
                return transformedCategories;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}