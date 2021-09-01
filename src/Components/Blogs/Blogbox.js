import React from "react";
import "../Projectbox/Projectbox.css";
export const Blogbox = ({ image, heading, source }) => {
  return (
    <div className="card item">
      <img className="card-image" src={image} alt="" />
      <div className="card-body">
        <h2>{heading}</h2>
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="projectbutton">Read Blog</button>
        </a>
      </div>
    </div>
  );
};
