/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "actions/auth/mutations";
import useIsAuthenticate from "hooks/useIsAuthenticatedUser";
import { RECEPTION_PATH } from "routes/navigation/navigationPaths";

const Login = () => {
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginUser] = useLoginUserMutation();
  const isAuthenticated = useIsAuthenticate();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/${RECEPTION_PATH}`);
    }
  }, [isAuthenticated, navigate]);

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        telephone,
        password,
      }).unwrap();

      // if (response?.statuts === 200) {
      //   authenticate();
      //   navigate(`/${RECEPTION_PATH}`, { replace: true });
      // } else {
      //   setError("Informations non valides.");
      // }
    } catch (error) {
      setError("Informations non valides.");
    }
  };

  return (
    <section>
      <form
        onSubmit={handleLoginClick}
        className="grid w-[80%] md:w-1/2 mx-auto my-[20px]"
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
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
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
            onClick={() => navigate("/Login", { replace: true })}
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
