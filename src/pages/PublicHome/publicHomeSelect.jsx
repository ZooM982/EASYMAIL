import React from "react";
const { useNavigate } = require("react-router-dom");
const { LOGIN_PATH, REGISTER_PATH, } = require("routes/navigation/navigationPaths");

const SelectChoice = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(`/${REGISTER_PATH}`, { replace: true });
  };

  const handleLogin = () => {
    navigate(`/${LOGIN_PATH}`, { replace: true });
  };
  return (
    <div className="grid">
      <button className="bg-blue-400 h-[50px] mx-auto w-[70%] md:w-[350px] text-[20px] font-bold my-3 rounded-[50px] hover:text-white hover:bg-blue-700 " onClick={handleRegister}>S'inscrire</button>
      <button className="bg-blue-400 h-[50px] mx-auto w-[70%] md:w-[350px] text-[20px] font-bold my-3 rounded-[50px] hover:text-white hover:bg-blue-700 " onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default SelectChoice;
