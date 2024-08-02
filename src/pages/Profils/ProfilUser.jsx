/* eslint-disable react/react-in-jsx-scope */
import PicProfil from "../../assets/images/profil.jpg"

const ProfilUser = () => {
  return <div>
    <img src={PicProfil} alt="" className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-[100%] object-cover "/>
  </div>;
};

export default ProfilUser;
