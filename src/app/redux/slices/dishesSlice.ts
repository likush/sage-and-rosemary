import { createSlice } from "@reduxjs/toolkit";
import {DishCategoryType} from '@/app/utils/types';

type InitialState = {dishes: DishCategoryType[]}

const initialState: InitialState = {
    dishes: []
};

const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {
        getDishes(state, action) {
            console.log('getDishes reducer', state, action)
            state.dishes = action.payload;
        },
    },
});

export const { getDishes } = dishesSlice.actions;

export default dishesSlice.reducer;
