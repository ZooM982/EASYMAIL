import Logo from "components/Logo";
import ForgotPass from "pages/ForgotPass/ForgotPassword";
import React from "react";
import ForgetPic from "../../assets/images/abstract-password-recovery.png";

const ForgotPassComponent = () => {
  return (
    <section>
      <Logo />
      <div className="flex items-center my-4">
        <div className="items-center w-[40%] hidden md:block">
          <img src={ForgetPic} alt="" className="mx-auto" />
        </div>
        <div className=" md:w-[55%] ">
            <h3 className="text-center font-bold text-[17px] ">Veuillez nous confirmer votre identité</h3>
          <ForgotPass />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassComponent;
