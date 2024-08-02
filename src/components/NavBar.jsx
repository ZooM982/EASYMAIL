import React from "react";
import Logo from "../assets/images/logo-easymail.jpg";
import RechercheMail from "./recherchemail";
import ProfilPopover from "components/profilspopover";
import NotificationBell from "./notifIcon";

function NavBar() {
  return (
    <section className="flex justify-between h-[100%] items-center w-[100%]">
      <div className="w-[150px] ms-[45px] md:ms-[60px] ">
        <img
          src={Logo}
          alt=""
          style={{
            height: 60,
          }}
        />
      </div>
      <div className="w-[105px] md:w-[550px] h-auto border bg-gray-100 rounded-[20px] ">
        <RechercheMail />
      </div>
      <div>
        <NotificationBell />
      </div>
      <div className="md:me-[50px]  ">
        <ProfilPopover />
      </div>
    </section>
  );
}

export default NavBar;
