/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { INVALIDATE_USERS } from "./invalidationTags";
import { logout, setAccessToken } from "redux/features/userSliceWithTokenValidation";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
        const accessToken = getState().dataPersisted?.user.accessToken;

        if (accessToken) {
            return headers.set("Authorization", `Bearer ${accessToken}`);
        }
        return headers;
    },
});

/**
 *=====================================================
 *
 * Verification de la validite du token
 *
 * ====================================================
 */
const baseQueryWithReauth = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        const refreshToken = api.getState().dataPersisted?.user.refreshToken;
        try {
            const refreshResult = await baseQuery(
                {
                    // url: API.USER_API.REFRESH_TOKEN(),
                    method: "POST",
                    body: { refreshToken },
                },
                api,
                extraOptions
            );
            if (refreshResult?.data) {
                api.dispatch(setAccessToken(refreshResult.data.access_token));
                result = await baseQuery(args, api, extraOptions);
            } else {
                api.dispatch(logout());
            }
        } catch (error) {
            api.dispatch(logout());
        }
    }

    return result;
};

/**
 *=====================================================
 *
 * OPTION1: Base api avec validation du token
 *
 * ====================================================
 */
// export const rxdApi = createApi({
//     baseQuery: baseQueryWithReauth,
//     refetchOnReconnect: true,
//     keepUnusedDataFor: 86400,
//     reducerPath: "path",
//     endpoints: () => ({}),
// });
/**
 *=====================================================
 *
 * OPTION1: Base api avec sans validation du token
 *
 * ====================================================
 */
export const rxdApi = createApi({
    refetchOnReconnect: true,
    keepUnusedDataFor: 86400,
    reducerPath: "path",
    endpoints: () => ({}),
});

export const ApiMananger = rxdApi.enhanceEndpoints({
    addTagTypes: [INVALIDATE_USERS],
});