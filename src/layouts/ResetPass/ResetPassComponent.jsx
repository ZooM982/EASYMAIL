import ResetPass from "pages/ResetPass/ResetPass";
import React from "react";
import ResetPic from "../../assets/images/lucent-cybersecurity-and-password-authentication.png";
import Logo from "components/Logo";

const ResetPassComponent = () => {
  return (
    <section>
      <Logo />
      <div className="flex items-center my-4">
        <div className="items-center w-[40%] hidden md:block">
          <img src={ResetPic} alt="" className="mx-auto" />
        </div>
        <div className=" md:w-[55%] ">
          <h3 className="text-center font-bold text-[19px]">Merci pour la confirmation d'identité <br />
          Créez un nouveau mot de passe maintenant </h3>
          <ResetPass />
        </div>
      </div>
    </section>
  );
};

export default ResetPassComponent;
