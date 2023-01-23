import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
