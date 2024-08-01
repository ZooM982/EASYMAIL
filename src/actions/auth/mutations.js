import { INVALIDATE_USERS } from "actions/invalidationTags";
import { ApiMananger } from "actions/rtkquery";

const userApi = ApiMananger.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query(body) {
                return {
                    url: "API.USER_API.LOGIN()",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [INVALIDATE_USERS],
        }),
        registerUser: build.mutation({
            query(body) {
                return {
                    url: "API.USER_API.REGISTER()",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [INVALIDATE_USERS],
        }),
        forgetPassword: build.mutation({
            query(body) {
                return {
                    url: "API.USER_API.FORGET_PASSWORD()",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [INVALIDATE_USERS],
        }),
        otpVerification: build.mutation({
            query(body) {
                return {
                    url: "API.USER_API.OTP_VERIFICATION()",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [INVALIDATE_USERS],
        }),
        resetPassword: build.mutation({
            query(body) {
                return {
                    url: "API.USER_API.RESET_PASSWORD()",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [INVALIDATE_USERS],
        }),
        updatePassword: build.mutation({
            query(body) {
                return {
                    url: "",
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: [INVALIDATE_USERS],
        }),
    }),
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useUpdatePasswordMutation,
    useForgetPasswordMutation,
    useResetPasswordMutation,
    useOtpVerificationMutation,
} = userApi;