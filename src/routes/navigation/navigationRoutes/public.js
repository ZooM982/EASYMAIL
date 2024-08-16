/* eslint-disable react/react-in-jsx-scope */
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import {
  FORGETPASSWORD,
  LOGIN_PATH,
  PUBLIC_PATH,
  REGISTER_PATH,
  RESETPASSWORD,
} from "../navigationPaths";
import WithoutAuth from "layouts/WithoutAuth";
import LoginComponent from "layouts/login/LoginComponent";
import SignUpComponent from "layouts/signup/SIgnUpComponent";
import PublicComponent from "layouts/publicpath/PublicComponent";
import ForgotPassComponent from "layouts/ForgotPass/ForgotPassComponent";
import ResetPassComponent from "layouts/ResetPass/ResetPassComponent";

/*
|---------------------------------------------------------------
| Les routes publics
|---------------------------------------------------------------
| Toute page qui ne necessite pas une authentification doit etre ici
|
*/
export const publicRoutes = [
  {
    path: PUBLIC_PATH,
    errorElement: <ErrorBoundary />,
    element: <WithoutAuth />,
    children: [
      {
        path: "",
        element: <PublicComponent />,
      },
      {
        path: LOGIN_PATH,
        element: <LoginComponent />,
      },
      {
        path: REGISTER_PATH,
        element: <SignUpComponent />,
      },
      {
        path: FORGETPASSWORD,
        element: <ForgotPassComponent />,
      },
      {
        path: RESETPASSWORD,
        element: <ResetPassComponent />,
      },
    ],
  },
];
