import React from "react";
import "./about.css";
import MyPic from "./my_pic.jpg";
import Resume from "./GouravDey_Frontend_Dev.pdf";
export const About = () => {
  return (
    <section id="about" className="container">
      <h1 class="heading">About Me</h1>
      <div class="details">
        <p>
          Hi myself Gourav Kumar Dey, a Frontend developer from Assam. I
          graduated from JIST, Jorhat with major in B.E(Electronics and
          Telecommunication). Currently I am working as SDE-1 Frontend at
          Masters India Pvt Sol. I have a good knowledge of frontend
          technologies which I have worked on in both personal and professional
          projects mentioned below. Apart from coding I love to play cricket and
          loves Marvel movies <br /> <br />
          <a className="resume" href={Resume} download="">
            Download CV
          </a>
          <a
            className="resume"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1ichZb4SZza0155jnZtR9_F-BcEEz5CTT/view"
          >
            View CV
          </a>
          <br />
          <br />
        </p>
        <div>
          <img src={MyPic} alt="" />
        </div>
      </div>
    </section>
  );
};
