/* eslint-disable react/react-in-jsx-scope */
import Login from "pages/login/Login";
import LogPic from "../../assets/images/techny-cybersecurity-with-password-locked-laptop.png";
import Logo from "components/Logo";

const LoginComponent = () => {
  return (
    <section >
      <Logo />
      <div className="flex items-center my-4">
        <div className="items-center w-[40%] hidden md:block">
          <img src={LogPic} alt="" className="mx-auto" />
        </div>
        <div className=" ">
          <h3 className="text-center mt-5 font-bold">
            Déjà membre ? Connectez-vous et ne manquez aucun message important.
          </h3>
          <Login />
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
