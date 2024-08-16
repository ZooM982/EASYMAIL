import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ label, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid my-1 h-[80px] w-[100%] ">
      <label className="mt-[25px] ml-[10px]">{label}</label>
      <div className="flex w-[100%] h-[70px] ">
        <input
          className="mb-[25px] w-[100%] shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="absolute mt-[25px] ml-[80%] md:ml-[23%] flex items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
