import React from "react";

import investmentPNGLogo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={investmentPNGLogo} alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
