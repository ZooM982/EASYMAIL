import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "actions/auth/mutations";
import { LOGIN_PATH } from "routes/navigation/navigationPaths";
import useIsAuthenticate from "hooks/useIsAuthenticatedUser";

const Signup = () => {
  const navigate = useNavigate();
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginUser] = useLoginUserMutation();

  const isAuthenticated = useIsAuthenticate();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await loginUser({
        telephone,
        password,
      }).unwrap();

      // Vérifiez si l'utilisateur est authentifié
      if (isAuthenticated) {
        // Rediriger vers la page d'accueil après une connexion réussie
        navigate("/home", { replace: true });
      } else {
        setError(
          "Impossible de s'authentifier. Veuillez vérifier vos informations."
        );
      }
    } catch (error) {
      setError("Informations non valides.");
    }
  };

  const handleRegisterClichUp = () => {
    navigate(`/${LOGIN_PATH}`, { replace: true });
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
          <label htmlFor="password">Entrez votre mot de passe</label>
          <input
            className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <h3 className="text-center font-bold my-4">
          Entrez pour une messagerie sans tracas. Connectez-vous maintenant !
        </h3>
        <button
          type="submit"
          className="bg-[#6298ff] h-[50px] rounded-[20px] font-bold"
        >
          Un clic pour accéder à vos mails
        </button>
      </form>
      <div className="text-center font-bold my-5">
        <p className="my-3">
          Nouveau sur EasyMail ?<br />
          <button onClick={handleRegisterClichUp} className="text-[#6298ff]">
            Créez un compte dès maintenant !
          </button>
        </p>
      </div>
    </section>
  );
};

export default Signup;

