import { INVALIDATE_USERS } from "actions/invalidationTags";
import { ApiMananger } from "actions/rtkquery";

const userApi = ApiMananger.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query(credentials) {
        return {
          url: "/login",
          method: "POST",
          body: credentials,
        };
      },
      invalidatesTags: [INVALIDATE_USERS],
    }),
    registerUser: build.mutation({
      query(newUser) {
        return {
          url: "/register",
          method: "POST",
          body: newUser,
        };
      },
      invalidatesTags: [INVALIDATE_USERS],
    }),
    forgetPassword: build.mutation({
      query(email) {
        return {
          url: "/password/forgot",
          method: "POST",
          body: { email },
        };
      },
      invalidatesTags: [INVALIDATE_USERS],
    }),
    otpVerification: build.mutation({
      query(body) {
        return {
          url: "API.USER_API.RESET_PASSWORD()",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [INVALIDATE_USERS],
    }),
    resetPassword: build.mutation({
      query({ token, password }) {
        return {
          url: "/password/reset",
          method: "POST",
          body: { token, password },
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
