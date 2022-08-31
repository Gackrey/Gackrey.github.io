import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Projectbox } from "./Projectbox";
import "./projects.css";
import { ProjectData, responsive } from "./data";
export const Projects = () => {
  return (
    <div id="project" className="container">
      <h1 className="heading">Projects</h1>
      <OwlCarousel className="owl-theme" responsive={responsive}>
        {ProjectData.map((item) => (
          <Projectbox
            key={item.id}
            image={item.image}
            heading={item.heading}
            description={item.description}
            live={item.live}
            source={item.source}
          />
        ))}
      </OwlCarousel>
    </div>
  );
};
