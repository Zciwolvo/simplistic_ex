import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>INFO</p>
      <p>EMAIL: YourEmail@Mail.com</p>
      <p>PHONE: +11 222 333 444</p>
      <p style={{ marginBottom: "0" }}>
        Copyright © All rights reserved to YOU
      </p>
    </div>
  );
};

export default Footer;
