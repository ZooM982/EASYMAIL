const { createSlice } = require("@reduxjs/toolkit");

const useSliceWithTokenValidation = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
    },
    reducers: {
        setAccessToken: (state, action) => {
            // state.isAuthenticated = true;
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        setCredentials: (state, action) => {
            state.refreshToken = action.payload.refresh_token;
            state.accessToken = action.payload.access_token;
            state.isAuthenticated = true;
        },

        setSkeep(state) {
            state.isSkeep = true;
        },

        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
        },
    },
});

export const getUserStatus = (state) =>
    state?.dataPersisted?.user?.isAuthenticated;
export const getSkeep = (state) => state?.dataPersisted?.user?.isSkeep;

export const { setCredentials, setAccessToken, logout, setSkeep } =
    useSliceWithTokenValidation.actions;
export default useSliceWithTokenValidation.reducer;