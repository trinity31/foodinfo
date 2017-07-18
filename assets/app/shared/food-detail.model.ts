export class Ingredient {
    constructor(
        public name: string,
        public vol_str: string,
        public per_vol: number
        ) {
    }
}

export class Material {
    constructor(
        public name: string,
        public per_vol: number
        ) {
    }
}

export class FoodDetail {
    constructor(
        public ing_list:Array<Ingredient>,
        public mat_list:Array<Material>) {
    }
}