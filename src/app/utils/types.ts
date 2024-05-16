export type Dish = {
    title: string;
    description: string;
    preorder?: number;
}

export type DishCategory = {
    category: string;
    dishes: Dish[];
}

export type Dishes = DishCategory[];
