import React, { useEffect, useState } from "react";

import htmlLogo from "../images/head/html.png";
import reactLogo from "../images/head/react.png";
import cssLogo from "../images/head/css.png";
import expresLogo from "../images/head/expresjs.png";
import javascriptLogo from "../images/head/javascript.png";
import nodeLogo from "../images/head/nodejs.png";
import meImage from "../images/head/Gorkem.png";

function Head() {
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0);

  useEffect(() => {
    const headElement = document.getElementById("head");
    const { width, height } = headElement.getBoundingClientRect();
    setMaxX(width);
    setMaxY(height);
  
    const handleResize = () => {
      const { width, height } = headElement.getBoundingClientRect();
      setMaxX(width);
      setMaxY(height);
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate a random position for each logo
  const generateRandomPosition = () => {
    const min = 0;
    const randomX = Math.floor(Math.random() * (maxX - min - 120)) + min;
    const randomY = Math.floor(Math.random() * (maxY - min - 50)) + min;
    return { x: randomX, y: randomY };
  };

  // Generate logos with unique positions
const generateLogosWithUniquePositions = () => {
  const uniqueLogos = [];
  logos.forEach((logo) => {
    Array.from({ length: 8 }).forEach(() => {
      const position = generateRandomPosition();
      const isOverlap = uniqueLogos.some((uniqueLogo) => {
        const distance = Math.sqrt(
          Math.pow(uniqueLogo.position.x - position.x, 2) +
          Math.pow(uniqueLogo.position.y - position.y, 2)
        );
        return distance < 100; // Adjust this threshold as needed to avoid overlap
      });

      if (!isOverlap) {
        uniqueLogos.push({
          src: logo.src,
          position: position
        });
      }
    });
  });

  return uniqueLogos;
};

  // Create an array of logos with unique positions
  const logos = [
    { src: htmlLogo },
    { src: reactLogo },
    { src: cssLogo },
    { src: expresLogo },
    { src: javascriptLogo },
    { src: nodeLogo }
  ];

  const logosWithUniquePositions = generateLogosWithUniquePositions();

  return (
    <div className="head-container">
      <div>
        {logosWithUniquePositions.map((logo, index) => (
          <img
            className="logo-img"
            key={index}
            src={logo.src}
            alt="Logo"
            style={{
              position: "absolute",
              top: `${logo.position.y}px`,
              left: `${logo.position.x}px`,
              animation: "slide 30s infinite"
            }}
          />
        ))}
      </div>
      <div className="greetings">
        <div className="image-container">
          <img className="outlined-image" src={meImage} alt=""/>
        </div>
        <h1>
          <span className="greetingsHello">Hello</span>, I'm{" "}
          <span className="glowingText">Gorkem Tandogan</span> . I'm a web
          developer
        </h1>
      </div>
    </div>
  );
}

export default Head;
