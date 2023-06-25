import React from "react";
import computerImage from "../images/about/computerImage.jpg";
import htmlImage from "../images/about/html-colored.png";
import cssImage from "../images/about/css-colored.png";
import jsImage from "../images/about/javascript-colored.png";
import reactImage from "../images/about/react-colored.png";

function About() {
  return (
    <div className="abouWrapper">
      <div className="aboutImage">
        <img className="aboutComputerImage" src={computerImage}/>
      </div>
      <div className="descriptionAbout">
        <h1>ABOUT ME</h1>
        <p>
          Hello, I'm Görkem Tandoğan, a front-end developer specializing in
          HTML, CSS, JavaScript, and React. Welcome to my portfolio website!
        </p>
        <p>
          I bring a team-oriented mindset to every project, valuing effective
          collaboration and open communication. I believe that working together
          leads to innovative solutions and successful outcomes. I am a great
          team member and enjoy contributing my skills and expertise to achieve
          shared goals.
        </p>
        <p>
          With strong communication skills, I thrive in client interactions, as
          well as collaborations with designers and fellow developers. I believe
          that clear and concise communication is crucial for project success.
        </p>
        <p>
          As a fast learner, I am passionate about continuously expanding my
          knowledge and skill set. Each project is an opportunity for me to
          learn and apply new concepts, ensuring that I deliver exceptional user
          experiences.
        </p>
        <p>
          Please take a moment to explore my portfolio, where you can find
          examples of my work and the diverse range of skills I possess. If you
          are looking for a junior front-end developer who excels in teamwork,
          communication, and quick learning, I would be delighted to connect and
          discuss potential opportunities.
        </p>
        <p>
          Thank you for visiting, and I look forward to the exciting
          possibilities that lie ahead!
        </p>
      </div>
      <div className="aboutTech">
        <h1>Tech Stack |</h1>
        <div className="aboutTechImages">
          <img className="techImage" src={htmlImage} alt="htmlImage" />
          <img className="techImage" src={cssImage} alt="cssImage" />
          <img className="techImage" src={jsImage} alt="jsImage" />
          <img className="techImage" src={reactImage} alt="reactImage" />
        </div>
      </div>
    </div>
  );
}

export default About;
