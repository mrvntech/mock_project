import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isOpenLoginPopup: false,
        isOpenForgotPasswordPopup: false,
        isOpenRegisterPopup: false,
    },
    reducers: {
        setIsOpenLoginPopup: (state, action: PayloadAction<boolean>) => {
            state.isOpenLoginPopup = action.payload
        },
        setIsOpenForgotPasswordPopup: (state, action: PayloadAction<boolean>) => {
            state.isOpenForgotPasswordPopup = action.payload
        },
        setIsOpenRegisterPopup: (state, action: PayloadAction<boolean>) => {
            state.isOpenRegisterPopup = action.payload
        },
    },
})

export default popupSlice.reducer
export const { setIsOpenForgotPasswordPopup, setIsOpenLoginPopup, setIsOpenRegisterPopup } = popupSlice.actions
