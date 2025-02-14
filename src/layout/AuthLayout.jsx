import React from "react";

import Headers from "../page/components/Header";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Headers />
      {children}
    </>
  );
};

export default AuthLayout;
