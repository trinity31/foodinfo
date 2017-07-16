import { CategoryComponent } from "./category/category.component";
import { FoodComponent } from './food/food.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from "./search/search.component";

const appRoutes: Routes = [
    {
        path: 'category', component: CategoryComponent
    },
    {
        path: 'category/:code/:page', component: FoodComponent
    },
    {
        path: 'search', component: SearchComponent
    },    
    {
        path: '', redirectTo: '/category', pathMatch: 'full'
    }
]

export const router = RouterModule.forRoot(appRoutes, {
    useHash: true
});