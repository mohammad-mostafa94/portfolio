import React from "react";
import "./Footer.css";

const FooterPanel = () => {
  return (
    <div>
      <div className=" py-1 text-center footer-style">© MOHAMMAD MOSTAFA &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
