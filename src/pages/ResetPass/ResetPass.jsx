/* eslint-disable no-unused-vars */
import { useResetPasswordMutation } from "actions/auth/mutations";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, { isLoading, error }] = useResetPasswordMutation();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleResetPass = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    try {
      await resetPassword({
        token,
        password,
      }).unwrap();
      toast.success("Votre mot de passe a été réinitialisé avec succès.");
      navigate("/login");
    } catch (err) {
      toast.error(
        "Erreur lors de la creinitialisation de mot de passe. Veuillez vérifier vos informations."
      );
    }

    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <form onSubmit={handleResetPass} className="w-[80%] mx-auto my-[20px]">
        <div className="md:flex justify-between">
          <div className="md:w-[48%] ">
            <label htmlFor="password">Nouveau mot de passe</label>
            <div className="flex w-[100%] h-[70px] ">
            <input
              className="mb-[15px] w-[100%] shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez le nouveau mot de passe"
            />
            <button
              type="button"
              className="absolute mt-[25px] ml-[70%] md:ml-[19%] flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </button>
            </div>
          </div>
          <div className="md:w-[48%] ">
            <label htmlFor="confirmpassword">
              Confirmez le nouveau mot de passe
            </label>
            <div className="flex w-[100%] h-[70px] ">
            <input
              className="mb-[15px] w-[100%] shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
              value={confirmPassword}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmez le nouveau mot de passe"
            />
            <button
              type="button"
              className="absolute mt-[25px] ml-[70%] md:ml-[19%] flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </button>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500">{error.message}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#6298ff] w-[100%] my-[30px] h-[50px] rounded-[20px] font-bold"
        >
          {isLoading ? "Réinitialisation en cours..." : "Réinitialiser le mot de passe"}
        </button>
      </form>
    </div>
  );
};

export default ResetPass;
