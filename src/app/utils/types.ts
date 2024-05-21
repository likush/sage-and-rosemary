export type DishType = {
    title: string;
    description: string;
    preorder?: number;
}

export type DishCategoryType = {
    category: string;
    dishes: DishType[];
}

export type DishesType = DishCategoryType[];
