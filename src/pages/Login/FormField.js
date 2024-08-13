import React from "react";

const FormField = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="grid py-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px]"
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
