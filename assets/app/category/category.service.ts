import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Category } from '../shared/category.model';

@Injectable()
export class CategoryService {
    //private categories: Category[] = []; //create empty array
    current_category: string;
    current_code: string;
    current_page: number;

    constructor(private http:Http) {}

    getCategories(): Observable<Category> {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json;charset=utf-8');
        // headers.append('x-waple-authorization', `NDAzLTE0OTkxNzMzNjEwMjItMWI3OGU4Y2MtNmJmZC00NWFjLWI4ZTgtY2M2YmZkODVhYzkz`);                            
        // let params = '';
        // let options = new RequestOptions({
        //     headers: headers,
        //     search: new URLSearchParams('uid=LS7CVJG3')
        // });
        const url = '/foodinfo/category';
        return this.http.get(url)
            .map(r => r.json())
            .catch(err => Observable.throw(err));
    }

    setCurrentCategory(category_name: string) {
        this.current_category = category_name;
    }

    getCurrentCategory(): string {
        return this.current_category;
    }

    setCurrentPage(page: number) {
        this.current_page = page;
    }

    getCurrentPage(): number {
        return this.current_page;
    }

    setCurrentFoodCode(code: string) {
        this.current_code = code;
    }

    getCurrentFoodCode(): string {
        return this.current_code;
    }
}