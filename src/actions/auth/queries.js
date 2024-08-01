import { ApiMananger } from "actions/rtkquery";

const userApi = ApiMananger.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query({
            query: () => "API.USER_API.GET_USER()",
        }),
        emailVerification: build.query({
            query: (token) => "API.USER_API.VERIFICATION_EMAIL(token)",
        }),
    }),
});

export const {
    useGetUserQuery,
    useEmailVerificationQuery,
} = userApi;