/* eslint-disable react/react-in-jsx-scope */
import Register from "pages/Login/Register";

const LoginComponent = () => {
  return (
    <div>
      <h3 className="text-center mt-5 font-bold">
        Un compte EasyMail, c'est la clé pour une communication sans souci.{" "}
        <br /> Rejoignez-nous !
      </h3>
      <Register />
    </div>
  );
};

export default LoginComponent;
