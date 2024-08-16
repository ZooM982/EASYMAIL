/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "actions/auth/mutations";
import { LOGIN_PATH } from "routes/navigation/navigationPaths";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { toast } from "react-toastify";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerUser] = useRegisterUserMutation();

  const handleSignupClick = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
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

      toast.success(
        <>
          <FaCheckCircle /> <br />Compte créé avec succès ! <br/>Vous allez etre rediriger
          vers la page de connexion
        </>,
        {
          style: {
            backgroundColor: "#fff",
            color: "#6298ff",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "18px"
          },
          icon: false,
          autoClose: 9000,
          progressClassName: "custom-progress-bar-success",
        }
      );

      setNom("");
      setPrenom("");
      setTelephone("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        navigate(`/${LOGIN_PATH}`, { replace: true });
      }, 10000);
    } catch (error) {
      toast.error(
        "Erreur lors de la création du compte. Veuillez vérifier vos informations."
      );
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSignupClick}
        className="w-[90%] mx-auto mb-[10px] md:h-[430px] "
      >
        <div className="md:flex justify-between my-[15px] ">
          <div className="md:w-[48%] mb-[20px] ">
            <TextInput
              label="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Tapez votre nom"
            />
          </div>
          <div className="md:w-[48%] mb-[20px] ">
            <TextInput
              label="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Tapez votre prénom"
            />
          </div>
        </div>
        <div className="md:flex justify-between my-[15px] ">
          <div className="md:w-[48%] mb-[20px] ">
            <TextInput
              label="Numéro de téléphone"
              type="number"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Tapez votre numéro de téléphone"
            />
          </div>
          <div className="md:w-[48%] mb-[20px] ">
            <TextInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tapez votre email"
            />
          </div>
        </div>
        <div className="md:flex justify-between my-[15px] ">
          <div className="md:w-[48%] mb-[20px] ">
            <PasswordInput
              label="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
            />
          </div>
          <div className="md:w-[48%] mb-[20px] ">
            <PasswordInput
              label="Confirmez le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmez le mot de passe"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-[100%] bg-[#6298ff] mt-[50px] md:mt[1px]  h-[50px] rounded-[20px] font-bold"
        >
          Créer un compte
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
