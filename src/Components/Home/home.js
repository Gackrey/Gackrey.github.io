import React from "react";
import "./home.css";
import DevSvg from "./home.svg";
export const Home = () => {
  return (
    <section id="home" className="container">
      <div className="txtbox">
        <h2>
          Hello I'm <br />
          <span>Gourav Kumar Dey</span>
        </h2>
        <h3>MERN Stack Web Developer</h3>
      </div>
      <img src={DevSvg} className="svgimage" alt="" />
    </section>
  );
};
