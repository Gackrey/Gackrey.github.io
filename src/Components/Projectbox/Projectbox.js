import React from "react";
import "./Projectbox.css";
export const Projectbox = ({ image, heading, description, live, source }) => {
  return (
    <div className="card item">
      <img className="card-image" src={image} alt="" />
      <div className="card-body">
        <h2>{heading}</h2>
        <p>{description}</p>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="projectbutton">Live Project</button>
        </a>
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="projectbutton">View Source</button>
        </a>
      </div>
    </div>
  );
};
