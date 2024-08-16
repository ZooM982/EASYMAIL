import Register from "pages/Signup/Register";
import SignPic from "../../assets/images/lounge-cyber-security-1.png";
import Logo from "components/Logo";

/* eslint-disable react/react-in-jsx-scope */
const SignUpComponent = () => {
  return (
    <section>
      <Logo />
    <div className="flex items-center">
    <div className="items-center w-[35%] hidden md:block">
        <img src={SignPic} alt="" className="mx-auto" />
      </div>
      <div className="md:w-[60%] w-[100%]">
        <h3 className="text-center mt-5 font-bold">
          Un compte EasyMail, c'est la clé pour une communication sans souci.{" "}
          <br /> Rejoignez-nous !
        </h3>
        <Register />
      </div>
    </div>
    </section>
  );
};

export default SignUpComponent;
