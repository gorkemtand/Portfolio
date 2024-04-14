import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function About() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".aboutImage", {
      delay: 200,
      origin: "left",
      distance: "50px",
    });
    ScrollReveal().reveal(".descriptionAbout, .aboutTech", {
      delay: 200,
      origin: "right",
      distance: "50px",
    });
    ScrollReveal().reveal(".techImage", {
      delay: 200,
      interval: 150,
      origin: "bottom",
      distance: "30px",
    });
  }, []);
  return (
    <div className="aboutWrapper">
      <div className="about-image-desc">
        <div className="imageWrapper">
          <div className="aboutImage">
            <img
              className="aboutProfileImage"
              src="/images/profilePic.png"
              alt="profileImg"
            />
          </div>
        </div>
        <div className="descriptionAbout">
          <h1>ABOUT ME</h1>
          <p>
            Hello, I'm Görkem Tandoğan, a Front-end Developer specializing in
            React, Next.js, JavaScript, HTML, and CSS. Throughout my career,
            I've taken on significant responsibilities in various projects,
            playing pivotal roles in their success Welcome to my portfolio
            website!
          </p>
          <p>
            I bring a team-oriented mindset to every project, valuing effective
            collaboration and open communication. I believe that working
            together leads to innovative solutions and successful outcomes. With
            a proven track record in assuming key roles within project teams, I
            have contributed my skills and expertise to achieve shared goals.
          </p>
          <p>
            With strong communication skills, I thrive in client interactions,
            as well as collaborations with designers and fellow developers. I
            believe that clear and concise communication is crucial for project
            success.
          </p>
          <p>
            As a fast learner, I am passionate about continuously expanding my
            knowledge and skill set. Each project serves as an opportunity for
            me to learn and apply new concepts, ensuring that I deliver
            exceptional user experiences.
          </p>
          <p>
            Please take a moment to explore my portfolio, where you can find
            examples of my work and the diverse range of skills I possess. If
            you are looking for a junior front-end developer who excels in
            teamwork, communication, and quick learning, I would be delighted to
            connect and discuss potential opportunities.
          </p>
          <p>
            Thank you for visiting, and I look forward to the exciting
            possibilities that lie ahead!
          </p>
        </div>
      </div>
      <div className="aboutTech">
        <h1>Tech Stack |</h1>
        <div className="aboutTechImages">
          <img
            className="techImage"
            src="/images/tech/react-colored.png"
            alt="reactImage"
          />
          <img
            className="techImage"
            src="/images/tech/nextjs-colored.png"
            alt="nextjsImage"
          />
          <img
            className="techImage"
            src="/images/tech/javascript-colored.png"
            alt="jsImage"
          />
          <img
            className="techImage"
            src="/images/tech/html-colored.png"
            alt="htmlImage"
          />
          <img
            className="techImage"
            src="/images/tech/css-colored.png"
            alt="cssImage"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
