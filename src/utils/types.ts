export type DishType = {
    title: string;
    description: string;
    preorder?: number;
}

export type DishCategoryType = {
    category: string;
    orderDisplay: number;
    dishes: DishType[];
}

export type DishesType = DishCategoryType[];
