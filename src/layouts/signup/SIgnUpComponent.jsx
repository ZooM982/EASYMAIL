import Signup from "pages/Signup/SIgnUp";

/* eslint-disable react/react-in-jsx-scope */
const SignUpComponent = () => {
  return (
    <div>
      <h3 className="text-center mt-5 font-bold">
        Déjà membre ? Connectez-vous et ne manquez aucun message important.
      </h3>
      <Signup />
    </div>
  );
};

export default SignUpComponent;
