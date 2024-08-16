import Register from "pages/Signup/Register";

/* eslint-disable react/react-in-jsx-scope */
const SignUpComponent = () => {
  return (
    <div>
      <h3 className="text-center mt-5 font-bold">
        Un compte EasyMail, c'est la clé pour une communication sans souci.{" "}
        <br /> Rejoignez-nous !
      </h3>
      <Register />
    </div>
  );
};

export default SignUpComponent;
