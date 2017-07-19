var FoodType = (function () {
    function FoodType(code, code_name, count) {
        this.code = code;
        this.code_name = code_name;
        this.count = count;
    }
    return FoodType;
}());
export { FoodType };
var Category = (function () {
    function Category(result, food_list) {
        this.result = result;
        this.food_list = food_list;
    }
    return Category;
}());
export { Category };
