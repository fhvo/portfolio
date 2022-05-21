
import React from "react";
import "./member.css";
const Member = ({img,link}) => {
  return (
    <div className="m">
      <div className="m-browser">
        <div className="m-circle"></div>
        <div className="m-circle"></div>
        <div className="m-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="m-img" />
      </a>
    </div>
  );
};

export default Member;
