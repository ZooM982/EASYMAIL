import { useForgetPasswordMutation } from "actions/auth/mutations";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [forgotPassword, { isLoading, error }] = useForgetPasswordMutation();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email).unwrap();
      toast.success(
        "Un lien de réinitialisation de mot de passe a été envoyé à votre adresse email."
      );
      setEmail("");
    } catch (error) {
      toast.error("Erreur lors de l’envoi du lien de réinitialisation.");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleForgotPassword}
        className="w-[80%] md:w-[100%] mx-auto my-[20px]"
      >
        <div className="py-3">
          <label htmlFor="telephone">Entrez votre adresse mail</label>
          <input
            className="shadow-[0px_5px_0.6em_gray] w-[100%] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
            type="mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error.message}</p>}
        <button type="submit" disabled={isLoading} className="bg-[#6298ff] w-[100%] h-[50px] rounded-[20px] font-bold"
        >
          {isLoading ? "Envoi en cours..." : "Envoyer le lien de réinitialisation"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPass;
