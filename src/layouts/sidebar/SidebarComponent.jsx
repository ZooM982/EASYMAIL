import React, { cloneElement } from "react";
import SidebarItem from "../../components/SidebarItem";
import ResourceDataMap from "../../components/ResourceDataMap";
import { links } from "routes/navigation/sidebarLinks";

const SidebarComponent = ({ activeLinkColor, activeLinkBgColor, colorOnHover, linkColor, OnHover }) => {
  const ClonedSidebarItem = ({ linkItem }) => cloneElement(<SidebarItem linkItem={linkItem} />, {
    activeLinkColor,
    activeLinkBgColor,
    colorOnHover,
    linkColor,
    OnHover,
  })
  return (
    <div
      style={{
        borderRadius: 40,
        height: "100%",
        padding: "25px 10px",
        marginTop: 60,
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
