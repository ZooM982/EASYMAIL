// PasswordField.js
import React from "react";
import FormField from "./FormField";

const PasswordField = ({ password, confirmPassword, onPasswordChange, onConfirmPasswordChange }) => {
  return (
    <div className="md:flex justify-between">
      <div className="grid md:w-[48%]">
        <FormField
          label="Créer un mot de passe"
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div className="grid md:w-[48%]">
        <FormField
          label="Confirmer le mot de passe"
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
      </div>
    </div>
  );
};

export default PasswordField;
