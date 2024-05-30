import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import {collection, getDocs} from '@firebase/firestore';
import {firestore} from '@/services/firebase/firestore';
import {DishesType} from '@/utils/types';

export const dishesApi = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Dishes'],
    endpoints: (builder) => ({
        fetchDishes: builder.query<DishesType, void>({
            async queryFn() {
                try {
                    // todo: move paths into variables
                    const ref = collection(firestore, 'dishes');
                    const querySnapshot = await getDocs(ref);

                    const data = querySnapshot.docs
                        .map((doc) => {
                            const {data, order_display} = doc.data();
                            return ({category: doc.id, orderDisplay: order_display, dishes: data})
                        })
                        .sort((a, b) => a.orderDisplay - b.orderDisplay)

                    return {data};
                } catch (error: any) {
                    console.error(error.message);
                    return {error: error.message};
                }
            },
            providesTags: ['Dishes'],
        }),
        // setNewDish: builder.mutation({
        //     async queryFn({scoresTableId, newHighScore}) {
        //         try {
        //             await updateDoc(doc(firestore, 'scoresTables', scoresTableId), {
        //                 scores: arrayUnion(newHighScore),
        //             });
        //             return {data: null};
        //         } catch (error: any) {
        //             console.error(error.message);
        //             return {error: error.message};
        //         }
        //     },
        //     invalidatesTags: ['Dishes'],
        // }),
    }),
});

export const {
    useFetchDishesQuery,
    // useSetNewDishMutation,
} = dishesApi;
