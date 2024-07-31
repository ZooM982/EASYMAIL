import React from "react";

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        height: 50,
        backgroundColor: bgColor ? bgColor : "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
      RxD Navbar Component
    </div>
  );
}

export default NavbarComponent;
