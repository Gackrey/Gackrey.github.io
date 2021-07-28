import React from "react";
import "./sidebar.css";
import HashNode from "./hashnode.png";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <li className="linkedin">
        <a
          href="https://www.linkedin.com/in/gaurav-kumar-dey"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in icon"></i>
        </a>
      </li>
      <li className="github">
        <a href="https://github.com/Gackrey" target="_blank" rel="noreferrer">
          <i className="fab fa-github icon"></i>
        </a>
      </li>
      <li className="hashnode">
        <a
          href="https://hashnode.com/@gackrey"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={HashNode}
            alt="hashnode"
            className="hashnode-icon"
          />
        </a>
      </li>
      <li className="instagram">
        <a href="https://www.instagram.com/gackrey" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram icon"></i>
        </a>
      </li>
      <li className="twitter">
        <a href="https://twitter.com/Gackrey" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter icon"></i>
        </a>
      </li>
    </div>
  );
};
