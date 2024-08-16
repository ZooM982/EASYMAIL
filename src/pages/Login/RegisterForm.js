import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "actions/auth/mutations";
import { REGISTER_PATH } from "routes/navigation/navigationPaths";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [registerUser] = useRegisterUserMutation();

  const handleSignupClick = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await registerUser({
        nom,
        prenom,
        telephone,
        email,
        password,
      }).unwrap();

      // Rediriger vers la page de login après l'inscription réussie
      navigate(`/${REGISTER_PATH}`, { replace: true });
    } catch (error) {
      setError(
        "Erreur lors de la création du compte. Veuillez vérifier vos informations."
      );
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSignupClick}
        className="grid w-[80%] md:w-1/2 mx-auto my-[20px]"
      >
        <div className="grid py-3">
          <label htmlFor="nom">Nom</label>
          <input
            className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
            type="text"
            placeholder="Tapez votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="grid py-3">
          <label htmlFor="prenom">Prénom</label>
          <input
            className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
            type="text"
            placeholder="Tapez votre prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
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
          <label htmlFor="email">Email</label>
          <input
            className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
            type="email"
            placeholder="Tapez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Créer un compte
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
