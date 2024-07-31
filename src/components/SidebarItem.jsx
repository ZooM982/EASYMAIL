import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 13px;
  height: 35px;
  overflow: hidden;
  textdecoration: none;
  color: ${({ color }) => color};
  &:hover {
    color: ${({ coloronhover }) => coloronhover};
  }
  &.active {
    color: ${({ coloronactive }) => coloronactive};
    background-color: ${({ activelinkbgcolor }) => activelinkbgcolor};
  }
`;

const SidebarItem = ({
  linkItem,
  activeLinkColor,
  activeLinkBgColor,
  colorOnHover,
  linkColor,
}) => {
  const { path, label } = linkItem;
  return (
    <LinkItem
      color={linkColor}
      coloronhover={colorOnHover}
      // coloronactive={'rgba(0,5,10,.5)'}
      coloronactive={activeLinkColor}
      activelinkbgcolor={activeLinkBgColor}
      to={path}
    >
      <div
        style={{
          height: 35,
          width: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <linkItem.icon size={22} className="icon" />
      </div>
      <p
        style={{
          position: "absolute",
          left: 45,
          fontSize: 17,
          width: "100%",
        }}
      >
        {label}
      </p>
    </LinkItem>
  );
};

export default SidebarItem;
