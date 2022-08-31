import React from "react";
import { BlogData, responsive } from "./data";
import { Blogbox } from "./Blogbox";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export const Blogs = () => {
  return (
    <div id="blogs" className="container">
      <h1 className="heading">Blogs</h1>
      <OwlCarousel className="owl-theme" responsive={responsive}>
        {BlogData.map((blog) => (
          <Blogbox
            key={blog.id}
            image={blog.image}
            heading={blog.heading}
            description={blog.description}
            source={blog.source}
          />
        ))}
      </OwlCarousel>
    </div>
  );
};
