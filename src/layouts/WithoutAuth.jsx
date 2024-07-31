import useIsAuthenticate from "hooks/useIsAuthenticatedUser";
import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ACCEUIL_PATH } from "routes/navigation/navigationPaths";

/*
|---------------------------------------------------------------
| Verification d'authentification pour acceder aux pages public
|---------------------------------------------------------------
| Seules les routes public peuvent etre des children de WithoutAuth
| Vous pouvez changer la redirection vers les routes authenticated
| au lieu d'aller vers "ACCEUIL_PATH"
*/
function WithoutAuth() {
    const isAuthenticated = useIsAuthenticate();

    const location = useLocation();

    return !isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to={ACCEUIL_PATH} state={{ from: location }} replace />
    );
}

export default WithoutAuth;