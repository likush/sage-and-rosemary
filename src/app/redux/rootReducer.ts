import { combineReducers } from 'redux';

import dishesSliceReducer from './slices/dishesSlice';

const rootReducer = combineReducers({
    dishes: dishesSliceReducer,
});

export default rootReducer;
