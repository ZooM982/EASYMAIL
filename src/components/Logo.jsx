import React from "react";
import LogoPic from "../../src/assets/images/logo-easymail.jpg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate()

    const handleHomeClickUp = () => {
        navigate("/", { replace: true });
      };

  return (
    <div className="w-1/2 md:w-[100%] mx-auto h-[100px] relative">
      <button onClick={handleHomeClickUp}>
        <img src={LogoPic} alt="" className="mx-auto" />
      </button>
    </div>
  );
};

export default Logo;
