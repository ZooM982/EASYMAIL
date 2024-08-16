import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "actions/auth/mutations";
import { REGISTER_PATH } from "routes/navigation/navigationPaths";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [registerUser] = useRegisterUserMutation();

  const handleSignupClick = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await registerUser({
        nom,
        prenom,
        telephone,
        email,
        password,
      }).unwrap();

      console.log("utilisateur enregistré");
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
        className="grid w-[70%] md:w-1/2 mx-auto my-[20px] md:h-[500px] "
      >
        <TextInput
          label="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Tapez votre nom"
        />
        <TextInput
          label="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Tapez votre prénom"
        />
        <TextInput
          label="Numéro de téléphone"
          type="number"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="Tapez votre numéro de téléphone"
        />
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tapez votre email"
        />
        <PasswordInput
          label="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
        />
        <PasswordInput
          label="Confirmez le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmez le mot de passe"
        />
        {error && <p className="text-red-500 my-4">{error}</p>}
        <button
          type="submit"
          className="bg-[#6298ff] mt-[40px] h-[50px] rounded-[20px] font-bold"
        >
          Créer un compte
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
