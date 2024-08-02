/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "routes/navigation/navigationPaths";

const Signup = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate(`/${LOGIN_PATH}`, { replace: true });
    };

  return (
    <section>
    <form action="" className="grid w-[80%] md:w-1/2 mx-auto my-[20px] ">
      <div className="grid py-3">
        <label htmlFor="telephone">Numéro de téléphone</label>
        <input
          className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px] "
          type="number"
          name=""
          id=""
          placeholder="Tapez votre numéro de téléphone"
        />
      </div>
      <div className=" grid py-3">
        <label htmlFor="motdepasse">Entrez votre mot de passe</label>
        <input
          className="shadow-[0px_5px_0.6em_gray] rounded-[20px] border-b-[#6298ff] border-b-[2px] outline-[#6298ff] h-[50px] my-[10px] p-[15px] "
          type="password"
          name=""
          id=""
          placeholder="Mot de passe"
        />
      </div>
      <h3 className="text-center font-bold my-4 ">
      Entrez pour une messagerie sans tracas. Connectez-vous maintenant !"
      </h3>
      <button
        type="submit"
        className="bg-[#6298ff] h-[50px] rounded-[20px] font-bold "
      >
        Un clic pour accéder à vos mails
      </button>
    </form>
     <div className="text-center font-bold my-5">
        <p className="my-3">Nouveau sur EasyMail ? <br /> <button onClick={handleLoginClick} className="text-[#6298ff] ">Créez un compte dès maintenant !</button></p>
      </div>
      </section>
  );
};

export default Signup;
