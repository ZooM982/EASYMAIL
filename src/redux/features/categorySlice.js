import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: { currentCategory: { id: "", label: "" } },
    reducers: {
        setCurrentCategory: (state, { payload }) => {
            return {
                ...state,
                currentCategory: payload
            }
        }
    }
})
export const { setCurrentCategory } = categoriesSlice.actions
export default categoriesSlice.reducer