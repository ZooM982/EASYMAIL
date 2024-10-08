import React, { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import useWindowDimensions from "../hooks/useWindowsDimention";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const NavbarPaner = styled.div`
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 4;
`;
const BodyContainer = styled.div`
  display: flex;
`;
const SidebarPaner = styled.div`
  width: ${({ openedMenu }) => (!openedMenu ? "250px" : "60px")};
  height: 100vh;
  position: fixed;
  top: 50px;
  left: -10px;
  border-radius: 30px;
  transition: width 0.3s;
  z-index: 2;
`;
const MenuController = styled.div`
  position: absolute;
  top: 30px;
  left: 20px;
  width: 40px;
  height: 40px;
  font-size: 30px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #008fa0;
  cursor: pointer;
  z-index: 3;
`;
const ContaintOutlet = styled.div`
  width: 100%;
  height: 510px;
  margin-left: ${({ openedMenu, minViewPort }) =>
    openedMenu ?
      "65px" :
      minViewPort ?
        "255px" :
        "255px"};
  border-radius: 30px;
  margin-top: 110px;
  margin-right: 10px;
  
  transition: padding 0.3s;
  overflow-x: hidden;
  z-index: 1;
  padding: ${({ openedMenu, minViewPort }) =>
  openedMenu ?
    "20px 10px 0 20px" :
    minViewPort ?
      "20px 10px 0 20px" :
      "20px 10px 0 20px"};
`;

const SpliTemplateScreen = ({ children }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [minViewPort, setMinViewPort] = useState(false);

  const [navbar, sidebar, outlet] = children;

  const sidebarRef = useRef(null);

  const { width } = useWindowDimensions();
  const handleResize = () => {
    setOpenedMenu((v) => !v);
  };

  useMemo(() => {
    if (width <= 900) {
      setMinViewPort(true);
      setOpenedMenu(true);
    } else {
      setMinViewPort(false);
      setOpenedMenu(false);
    }
  }, [width]);

  return (
    <Container>
      <NavbarPaner>
      <MenuController onClick={handleResize}>
            {openedMenu ? (
              <AiOutlineMenuUnfold className="menu-controller-icon" />
            ) : (
              <AiOutlineMenuFold className="menu-controller-icon" />
            )}
          </MenuController>
        {navbar}
        </NavbarPaner>
      <BodyContainer>
        <SidebarPaner openedMenu={openedMenu} ref={sidebarRef}>
          {sidebar}
        </SidebarPaner>
        <ContaintOutlet openedMenu={openedMenu} minViewPort={minViewPort}>
          {outlet}
        </ContaintOutlet>
      </BodyContainer>
    </Container>
  );
};

export default SpliTemplateScreen;
