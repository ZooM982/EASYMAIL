import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { currentUser: {} },
    reducers: {
        setCurrentUser: (state, { payload }) => {
            return {
                ...state,
                currentUser: payload
            }
        },
        resetCurrentUser: (state) => {
            return {
                ...state,
                currentUser: null
            }
        }
    }
})

export const { setCurrentUser, resetCurrentUser } = userSlice.actions
export default userSlice.reducer