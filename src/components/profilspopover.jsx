import ProfilUser from "pages/Profils/ProfilUser";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CONTACT_PATH, SETTINGS_PATH } from "routes/navigation/navigationPaths";
import { IoMdContacts, IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";


const ProfilPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();


  const handleSettings = () => {
    navigate(`/${SETTINGS_PATH}`, { replace: true });
  };

  const handleContact = () =>{
    navigate(`/${CONTACT_PATH}`, { replace: true });
  }

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        onClick={togglePopover}
        className="ms-[10px]  w-[40px] h-[40px] p-[2px] md:w-[55px] md:h-[55px] bg-blue-600 text-white rounded-[100%] focus:outline-none"
      >
        <ProfilUser />
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md p-4"
          style={{ left: buttonRef.current.offsetWidth / 96 - 130 }}
        >
          <div>
            <p className="flex"><span className="mx-1 my-auto"><CgProfile /></span> Mon profil</p>
            <button onClick={handleContact} className="flex"> <span className="mx-1 my-auto"><IoMdContacts /> </span> Mes Contacts</button>
            <button onClick={handleSettings} className="flex"> <span className="mx-1 my-auto"><IoMdSettings /> </span> Mes paramètres</button>
          </div>
          <hr />
          <div className="flex my-2">
            <span className="mx-1 my-auto"><CiLogout /></span>
            logout
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilPopover;


