import {configureStore} from "@reduxjs/toolkit"
import reducer from "./reducers.js"
import {thunk} from "redux-thunk"

const middleware = [thunk]

export const store = configureStore({

    reducer :  reducer.reducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    
    devTools: process.env.NODE_ENV !== 'production',


})