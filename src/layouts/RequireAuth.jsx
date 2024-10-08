import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useIsAuthenticate from "hooks/useIsAuthenticatedUser";
import { PUBLIC_PATH } from "routes/navigation/navigationPaths";

/*
|---------------------------------------------------------------
| Verification d'authentification pour acceder aux pages privates
|------------------------------------------------          ---------------
| Seules les routes privates peuvent etre des children de RequireAuth
|
| Vous pouvez changer ici la redirection vers quelle route public aller
| au lieu de rediriger vers "PUBLIC_PATH", au cas ou on est authentifier
*/

function RequireAuth() {
  const isAuthenticated = useIsAuthenticate();
  const location = useLocation();

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={PUBLIC_PATH} state={{ from: location }} replace />;
  }
}

export default RequireAuth;
