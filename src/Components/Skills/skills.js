import React from "react";
import "./skills.css";
import { frontEnd, backEnd } from "./skillData";
import { Skillbox } from "./Skillbox";
export const Skills = () => {
  return (
    <section id="skills" className="container">
      <h1 className="heading">Technical Skills</h1>
      <div className="skill-cards">
        <div className="info-box">
          <h2>Frontend Skills</h2>
          <div className="frontend">
            {frontEnd.map((item) => (
              <Skillbox skill={item.skill} percentage={item.percentage} />
            ))}
          </div>
        </div>
        <div className="info-box">
          <h2>Backend & Database</h2>
          <div className="backend">
            {backEnd.map((item) => (
              <Skillbox skill={item.skill} percentage={item.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
