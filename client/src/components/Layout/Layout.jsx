import React from "react";
import Topbar from "../Topbar/Topbar";

const Layout = (props) => {
  return (
    <>
      <Topbar />
      {props.children}
    </>
  );
};

export default Layout;
