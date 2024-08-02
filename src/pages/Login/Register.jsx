/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { REGISTER_PATH } from "routes/navigation/navigationPaths";


const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate(`/${REGISTER_PATH}`, { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrorMessage("");
      // Logique pour soumettre le formulaire ou continuer le traitement
      console.log("Mot de passe confirmé et formulaire soumis");
    } else {
      setErrorMessage("Les mots de passe ne correspondent pas.");
    }
  };
  return (
    <section>
      <form action="" onSubmit={handleSubmit} className="grid w-[80%] md:w-1/2 mx-auto my-[20px] ">
        <div className="md:flex justify-between">
          <div className="grid md:w-[48%] py-3 ">
            <label htmlFor="nom">Nom</label>
            <input
              className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px] "
              type="text"
              name=""
              id=""
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="grid md:w-[48%] py-3 ">
            <label htmlFor="prenom">Prénom</label>
            <input
              className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px] "
              type="text"
              name=""
              id=""
              placeholder="Entrez votre prénom"
            />
          </div>
        </div>
        <div className="grid py-3">
          <label htmlFor="telephone">Numéro de téléphone</label>
          <input
            className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px] "
            type="number"
            name=""
            id=""
            placeholder="Tapez votre numéro de téléphone"
          />
        </div>
        <div className="md:flex justify-between">
          <div className="grid md:w-[48%] ">
            <label htmlFor="password">Créer un mot de passe</label>
            <input
              className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px] "
              type="password"
              name=""
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Mot de passe"
            />
          </div>
          <div className="grid md:w-[48%] ">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px] "
              type="password"
              name=""
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirmer le mot de passe"
            />
          </div>
        </div>
        <h3 className="text-center font-bold my-4 ">
          Vous êtes à un clic d'une gestion facile et efficace de vos messages.
        </h3>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button
          type="submit"
          className="bg-[#6298ff] h-[50px] rounded-[20px] font-bold "
        >
          C'est parti pour une expérience de messagerie sans stress !
        </button>
      </form>
      <div className="text-center font-bold">
        <p className="py-4">
          Déjà membre ? <br /> Connectez-vous en cliquant{" "}
          <button onClick={handleSignUpClick} className="text-[#6298ff] ">
            ici
          </button>{" "}
          pour accéder à votre compte
        </p>
      </div>
    </section>
  );
};

export default Register;
