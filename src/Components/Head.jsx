import React from "react";


function Head() {
  return (
    <div className="head-container">
      <div className="greetings">
        <div className="greetings-sentence">Hi,</div>
        <div className="greetings-sentence">I'm</div>
        <div className="greetings-sentence">Görkem</div>
        <div className="greetings-sentence">|</div>
        <div className="greetings-sentence highlighted">
          Web<div className="greetings-effect"></div>
        </div>
        <div className="greetings-sentence highlighted">
          Developer<div className="greetings-effect"></div>
        </div>
      </div>
      <div className="social-buttons">
        <a
          href="https://github.com/gorkemtand"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <img src="/images/github-colored.png" alt=""></img>
        </a>
        <a
          href="https://www.linkedin.com/in/gorkem-tandogan-5408a5183/"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
        >
          <img src="/images/linkedin-colored.png" alt=""></img>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=tandogangorkem@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Gmail"
        >
          <img src="/images/email-colored.png" alt=""></img>
        </a>
      </div>
      <div className="head-description">
        <p>
          Passionate Front-End Developer dedicated to crafting immersive and
          visually stunning web experiences.<br></br> With a keen eye for design
          and a commitment to seamless user interactions, I bring creativity and
          technical expertise to every project.<br></br> Explore my portfolio to
          witness a blend of innovation, clean code, and a deep love for
          bringing ideas to life in the digital realm.
        </p>
      </div>
    </div>
  );
}

export default Head;
