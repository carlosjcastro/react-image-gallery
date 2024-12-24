import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear}{" "}
          <a
            href="https://carlosjcastrog.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carlos José Castro Galante
          </a>
          . All rights reserved. Images courtesy of <a href="https://www.freepik.es/" target="_blank" rel="noopener noreferrer">Freepik</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
