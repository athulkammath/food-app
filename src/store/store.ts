import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceholderApi } from "../services/jsonPlaceholderApi";

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});


setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
