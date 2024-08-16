/* eslint-disable react/react-in-jsx-scope */
import Login from "pages/login/Login";

const LoginComponent = () => {
  return (
    <div>
      <h3 className="text-center mt-5 font-bold">
        Déjà membre ? Connectez-vous et ne manquez aucun message important.
      </h3>
      <Login />
    </div>
  );
};

export default LoginComponent;
