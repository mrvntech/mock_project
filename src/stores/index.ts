import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from './authentication'
import cartReducer from './cart'
import popupReducer from './popup'

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        cart: cartReducer,
        popup: popupReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch