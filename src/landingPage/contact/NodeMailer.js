import React from "react";

require("dotenv").config();
const nodemailer = require("nodemailer");

const summit = () => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOption = {
    from: "kamphol_23@hotmail.se",
    to: process.env.EMAIL,
    subject: "Testing nodeMailer",
    text: "It works",
  };

  transporter.sendMail(mailOption, function (err, data) {
    if (err) {
      console.log("send mail error", err);
    } else {
      console.log("mail sended");
    }
  });
};
const NodeMailer = () => {
  return (
    <div>
      <button onClick={summit}>click me</button>
    </div>
  );
};
export default NodeMailer;
