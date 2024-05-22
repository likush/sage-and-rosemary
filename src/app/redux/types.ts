import rootReducer from './rootReducer';
import {store} from '@/app/redux/store';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
