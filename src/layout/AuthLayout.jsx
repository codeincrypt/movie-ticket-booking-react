import React from "react";

import Headers from "../page/components/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Headers />
      {children}
    </>
  );
};

export default MainLayout;
