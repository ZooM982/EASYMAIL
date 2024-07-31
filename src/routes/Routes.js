import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PageNotFound from "pages/NotFound/PageNotFound";
import { privateRoutes } from "./navigation/navigationRoutes/private";
import { publicRoutes } from "./navigation/navigationRoutes/public";
import { NOTFOUND_PATH } from "./navigation/navigationPaths";
import useIsAuthenticate from "hooks/useIsAuthenticatedUser";

/*
|--------------------------------------------------------------------------
| Web Routes Rendering
|--------------------------------------------------------------------------
|
| Ici on rend les routes private ou public en fonction de isAuthenticated
| La maniere dont react-router fonctionne, on ne doit pas rendre les routes
| public si on es authentifier et vice-versa, afin d'eviter certaines erreurs
| de redirections
|
*/
function Roots() {
  const isAuthenticated = useIsAuthenticate();

  const router = isAuthenticated ? createBrowserRouter([
    ...privateRoutes,
    {
      path: NOTFOUND_PATH,
      element: <PageNotFound />
    }
  ]) : createBrowserRouter([
    ...publicRoutes,
    {
      path: NOTFOUND_PATH,
      element: <PageNotFound />
    }
  ])

  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading...</p>}
    />
  );
}

export default Roots;