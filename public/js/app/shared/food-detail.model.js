var Ingredient = (function () {
    function Ingredient(name, vol_str, per_vol) {
        this.name = name;
        this.vol_str = vol_str;
        this.per_vol = per_vol;
    }
    return Ingredient;
}());
export { Ingredient };
var Material = (function () {
    function Material(name, per_vol) {
        this.name = name;
        this.per_vol = per_vol;
    }
    return Material;
}());
export { Material };
var FoodDetail = (function () {
    function FoodDetail(ing_list, mat_list) {
        this.ing_list = ing_list;
        this.mat_list = mat_list;
    }
    return FoodDetail;
}());
export { FoodDetail };
