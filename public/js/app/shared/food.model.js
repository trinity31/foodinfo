var Product = (function () {
    function Product(code, seq_code, food_name, thumb_img, sell_com, barcode, volume, food_type, ing_first) {
        this.code = code;
        this.seq_code = seq_code;
        this.food_name = food_name;
        this.thumb_img = thumb_img;
        this.sell_com = sell_com;
        this.barcode = barcode;
        this.volume = volume;
        this.food_type = food_type;
        this.ing_first = ing_first;
    }
    return Product;
}());
export { Product };
var Food = (function () {
    function Food(food_list) {
        this.food_list = food_list;
    }
    return Food;
}());
export { Food };
