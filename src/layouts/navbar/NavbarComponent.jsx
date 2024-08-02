import NavBar from "components/NavBar";
import React from "react";

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        height: 100,
        backgroundColor: bgColor ? bgColor : "#fff",
        ...navbarContainerStyles,
      }}
    >
      <NavBar />
    </div>
  );
}

export default NavbarComponent;
