import React from "react";

import "./About.scss";

import mail from "./icons/mail.png";
import phone from "./icons/phone.png";

const Contact = () => {
  return (
    <div className="AboutSection">
      <h1>Contact</h1>
      <div>
        <img src={mail} alt="icon" />
        <p style={{ maxWidth: "100%" }}>YourEmail@Mail.com</p>
      </div>
      <div>
        <img src={phone} alt="icon" />
        <p style={{ maxWidth: "100%" }}>+11 222 333 444</p>
      </div>
      <p style={{ maxWidth: "100%", marginBottom: "2em" }}>YOUR SOCIAL MEDIA</p>
    </div>
  );
};

export default Contact;
