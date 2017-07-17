export class Product {
    constructor(
        public code: string,
        public seq_code: number,
        public food_name: string,
        public thumb_img: string,
        public sell_com: string,
        public barcode: string,
        public volume: string,
        public food_type: string,
        public ing_first: string
         ) {
    }
}

export class Food {
    constructor(public food_list:Array<Product>) {
    }
}