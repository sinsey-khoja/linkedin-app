import React from "react";
import "./Link.scss";
const Link = ({ icon, text }) => {
  return (
    <li className="link">
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default Link;
