/* eslint-disable react/react-in-jsx-scope */
import HomePage from "pages/Home/HomePage";
import { ACCEUIL_PATH, PRODUCTS_PATH } from "../navigationPaths";
import RequireAuth from "layouts/RequireAuth";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { Navigate } from "react-router-dom";
import SplitShell from "layouts/AppShells/SplitShell";

/*
|---------------------------------------------------------------
| Les routes privates
|---------------------------------------------------------------
| Toute page qui necessite une authentification doit etre ici
|
*/
export const privateRoutes = [
    {
        path: ACCEUIL_PATH,
        errorElement: <ErrorBoundary />,
        element: <RequireAuth />,
        children: [
            {
                path: "",
                element: <SplitShell />,
                children: [
                    {
                        path: "*",
                        element: <Navigate to={ACCEUIL_PATH} />
                    },
                    {
                        path: "",
                        element: <HomePage />
                    },
                    {
                        path: PRODUCTS_PATH,
                        element: <p>Hello from me</p>
                    },
                ]
            }
        ]
    },
];