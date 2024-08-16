import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "actions/auth/mutations";
import {
  FORGETPASSWORD,
  RECEPTION_PATH,
  REGISTER_PATH,
} from "routes/navigation/navigationPaths";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        telephone,
        password,
      }).unwrap();

      if (response?.statuts === 200) {
        localStorage.setItem("isAuthenticated", "true");

        toast.success(
          <>
            <FaCheckCircle /> <br />
            Coonnexion établie! <br /> bienvenue sur EASYMAIL
          </>,
          {
            style: {
              backgroundColor: "#fff",
              color: "#6298ff",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "18px",
              width: "300px",
            },
            icon: false,
            autoClose: 4000,
            progressClassName: "custom-progress-bar-success",
          }
        );

        window.location.reload();

        setTimeout(() => {
          navigate(`/${RECEPTION_PATH}`, { replace: true });
        }, 5000);
      } else {
        setError("Informations non valides.");
      }
    } catch (error) {
      setError("Informations non valides.");
    }
  };

  const navigate2 = useNavigate()

  const handleForgetPass = () => {
    navigate2(`/${FORGETPASSWORD}`, { replace: true });
  };

  return (
    <section>
      <form
        onSubmit={handleLoginClick}
        className="grid w-[80%] mx-auto my-[20px]"
      >
        <div className="grid py-3">
          <label htmlFor="telephone">Numéro de téléphone</label>
          <input
            className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
            type="number"
            placeholder="Tapez votre numéro de téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="grid py-3">
          <label htmlFor="password">Mot de passe</label>
          <input
            className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute mt-[50px] ml-[70%] md:ml-[30%] flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="my-3 ">
          <button onClick={handleForgetPass}>Mot de passe oublié ?</button>
        </div>
        <button
          type="submit"
          className="bg-[#6298ff] h-[50px] rounded-[20px] font-bold"
        >
          Se connecter
        </button>
      </form>
      <div className="text-center font-bold my-5">
        <p className="my-3">
          Nouveau sur EasyMail ?<br />
          <button
            onClick={() => navigate(`/${REGISTER_PATH}`, { replace: true })}
            className="text-[#6298ff]"
          >
            Créez un compte dès maintenant !
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;
