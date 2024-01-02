import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initSlice = createSlice({
    name: 'popup',
    initialState: {
        isInitilized: false
    },
    reducers: {
        setIsInitilized: (state, action: PayloadAction<boolean>) => {
            state.isInitilized = action.payload
        },
    },
})

export default initSlice.reducer
export const { setIsInitilized } = initSlice.actions
