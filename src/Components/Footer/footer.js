import React from "react";
import "./footer.css";
export const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      Copyrights © {date.getFullYear()} Gourav Kumar Dey. All rights reserved.
    </div>
  );
};
