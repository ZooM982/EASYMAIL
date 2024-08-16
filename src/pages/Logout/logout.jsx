import { toast } from "react-toastify";

const handleLogout = () => {
  localStorage.removeItem("isAuthenticated");

  toast.success("Deconnexion réussie ! Vous allez etre rediriger vers la page d'acceuil");

  window.location.reload();

  setTimeout(() => {
    navigate(`/${PUBLIC_PATH}`, { replace: true });
  }, 5000);
};

export default handleLogout;
