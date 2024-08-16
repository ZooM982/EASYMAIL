import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { LOGIN_PATH } from "routes/navigation/navigationPaths";

const Register = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate(`/${LOGIN_PATH}`, { replace: true });
  };

  return (
    <section>
      <div className="w-[100%] py-1 px-auto ">
        <RegisterForm handleSignUpClick={handleSignUpClick} />
      </div>
      <div className="text-center font-bold w-[80%] mx-auto my-3 ">
        <p className="py-4">
          Déjà membre ? <br /> Connectez-vous en cliquant{" "}
          <button onClick={handleSignUpClick} className="text-[#6298ff]">
            ici
          </button>{" "}
          pour accéder à votre compte
        </p>
      </div>
    </section>
  );
};

export default Register;
