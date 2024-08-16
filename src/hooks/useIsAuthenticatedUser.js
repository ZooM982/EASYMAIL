// !GERER L'AUTORISATION D'ACCESS A VOTRE APPLICATION
/**
 *
 * @return {true|false}
 */
function useIsAuthenticate() {
    const isAuthenticate = localStorage.getItem("isAuthenticated") === "true";
    return isAuthenticate;
}

export default useIsAuthenticate;


