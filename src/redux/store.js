import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer, persistStore
} from "redux-persist";
import storage from "redux-persist-indexeddb-storage";
import { rxdApi } from "../actions/rtkquery";
import userslice from "./features/userslice";
// import userSliceWithTokenValidation from "./features/userSliceWithTokenValidation";

const persistConfig = {
    key: "rxd-storage",
    storage: storage("rxd-storage"),
}

const rootReducers = combineReducers({
    [rxdApi.reducerPath]: rxdApi.reducer,


    user: userslice, // !OPTION1: a utiliser si vous ne faites pas une validation de token
    // auth: userSliceWithTokenValidation // !OPTION2: a utiliser si vous faites une validation de token
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(rxdApi.middleware),
})

// setupListeners(store.dispatch)

export const persistor = persistStore(store);