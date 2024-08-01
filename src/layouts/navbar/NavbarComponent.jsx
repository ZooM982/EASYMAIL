import React from "react";
import Logo from "../../assets/images/logo-easymail.jpg"

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        height: 100,
        backgroundColor: bgColor ? bgColor : "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
    <img src={Logo} alt="" style={{
      width: 200,
      height: 60,
      marginLeft: 60,
    }} />
    </div>
  );
}

export default NavbarComponent;
