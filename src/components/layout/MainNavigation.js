import React, { useState } from "react";

import Header from "./Header";
import SideDrawer from "./SideDrawer";

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const drawerToggleHandler = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Header onMenuClick={drawerToggleHandler} />
      <SideDrawer show={isDrawerOpen} />
    </React.Fragment>
  );
};

export default MainNavigation;
