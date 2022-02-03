import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
