import React from "react";
import "./skillbox.css";
export const Skillbox = ({ skill, percentage }) => {
  const colorClass = `statusbar-${skill}`;
  return (
    <div className="skill">
      <div className="decoration">
        <span className="skill-name">{skill.toUpperCase()}</span>
        <div className="status">
          <div className={colorClass} style={{ width: `${percentage}%` }}></div>
        </div>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};
