import React, { useState } from "react";
import "./navbar.css";
function mobileNavHandler() {
  const navelem = document.querySelector(".navelem");
  const firstcross = document.querySelector(".firstcross");
  const middledash = document.querySelector(".middledash");
  const lastcross = document.querySelector(".lastcross");
  firstcross.classList.toggle("rotatef");
  lastcross.classList.toggle("rotatel");
  middledash.classList.toggle("remove");
  navelem.classList.toggle("toggle");
}
export const Navbar = () => {
  const [Theme, setTheme] = useState("light");

  function themeHandler() {
    const coverarea = document.getElementsByClassName("coverarea");
    coverarea[0].classList.toggle("toggleball");
    if (Theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }
  return (
    <nav className="navbar">
      <div className="burgerbox" onClick={mobileNavHandler}>
        <div className="burgerlines firstcross"></div>
        <div className="burgerlines middledash"></div>
        <div className="burgerlines lastcross"></div>
      </div>
      <h1>GKD</h1>
      <ul className="navelem">
        <li>
          <a href="#home" onClick={mobileNavHandler}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={mobileNavHandler}>About Me</a>
        </li>
        <li>
          <a href="#project" onClick={mobileNavHandler}>Projects</a>
        </li>
        <li>
          <a href="#skills" onClick={mobileNavHandler}>Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={mobileNavHandler}>Contact Me</a>
        </li>
      </ul>
      <div className="darkmode" onClick={themeHandler}>
        <div className="coverarea"></div>
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
      </div>
    </nav>
  );
};
