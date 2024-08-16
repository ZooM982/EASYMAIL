import React from "react";

const TextInput = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="grid my-1 h-[80px] ">
      <label className="mt-[15px] ml-[10px]">{label}</label>
      <input
        className="mt-2 shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
