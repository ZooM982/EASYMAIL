/* eslint-disable react/react-in-jsx-scope */
import { FaSearch } from "react-icons/fa";

const RechercheMail = () => {
  return (
    <div className="flex">
      <input
        type="search"
        className="outline-[#6298ff] w-[100%] h-[50px] rounded-[20px] p-[10px] bg-inherit "
        placeholder="Rechercher vos emails"
      />
      <span className="py-5 md:py-3 ps-2 mx-[10px] md:text-[25px] text-[17px] border-s-[1px] border-s-gray-500 h-[50px] "><FaSearch /></span>
    </div>
  );
};

export default RechercheMail
