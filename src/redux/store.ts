import {configureStore} from '@reduxjs/toolkit';
import {
    TypedUseSelectorHook,
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
} from 'react-redux';
// import rootReducer from './rootReducer';
import {AppDispatch, RootState} from './types';
import {dishesApi} from './dishesApi'

const store = configureStore({
    reducer: {
        [dishesApi.reducerPath]: dishesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: false,
            // immutableCheck: false,
        })
            .concat(dishesApi.middleware),
});

const {dispatch} = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
const useDispatch = () => useAppDispatch<AppDispatch>();

export {store, dispatch, useSelector, useDispatch};
