import React, { cloneElement } from "react";
import SidebarItem from "../../components/SidebarItem";
import ResourceDataMap from "../../components/ResourceDataMap";
import { links } from "routes/navigation/sidebarLinks";

const SidebarComponent = ({ bgColor, activeLinkColor, activeLinkBgColor, colorOnHover, linkColor }) => {
  const ClonedSidebarItem = ({ linkItem }) => cloneElement(<SidebarItem linkItem={linkItem} />, {
    activeLinkColor,
    activeLinkBgColor,
    colorOnHover,
    linkColor
  })
  return (
    <div
      style={{
        backgroundColor: bgColor ? bgColor : "#fff",
        height: "100%",
        padding: "25px 10px",
        borderRight: "1px solid rgba(0,0,0,0.1)"
      }}
    >
      <ResourceDataMap
        resourceData={links}
        resourceItem={ClonedSidebarItem}
        resourceName="linkItem"
      />
    </div>
  );
};

export default SidebarComponent;
