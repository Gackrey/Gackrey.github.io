import React from "react";
import "./about.css";
import MyPic from "./my_pic.jpg";
import Resume from "./gouravkumardey_yop2021.pdf";
export const About = () => {
  return (
    <section id="about">
      <h1 class="heading">About Me</h1>
      <div class="details">
        <p>
          Hi myself Gourav Kumar Dey, an engineering graduate from Jorhat
          Institute of Science and Technology with major in Electronics and
          telecommunication. I am a Full Stack Web Developer with an experience
          of around 1 year working with MERN stack. I have a good knowledge of
          redux, typescript and unit testing which I have also used in few of my
          projects. Apart from coding I love to play cricket. I am a quick
          learner and spend most of my time sitting with VSCode open, working on
          various projects. Few of my projects are mentioned below with links
          few available on my github profile <br /> <br />
          <a className="resume" href={Resume} download="">
            Download CV
          </a>
          <a
            className="resume"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1SQlNdHAbTkidCYwIfmUW_a8beOAanZP6/view"
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
