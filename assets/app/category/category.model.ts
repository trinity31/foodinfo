class FoodType {
    code: string;
    code_name: string;
    count: number;

    constructor(code:string, code_name:string, count:number) {
        this.code = code;
        this.code_name = code_name;
        this.count = count;
    }
}

export class Category {
    result:number;
    food_list: Array<FoodType>;

    constructor(result:number, food_list:Array<FoodType>) {
        this.result = result;
        this.food_list = food_list;
    }    
}