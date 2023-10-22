import React, {useEffect} from "react";
import ScrollReveal from "scrollreveal";

function Card(props) {
  useEffect(() => {
    ScrollReveal().reveal(`.card-${props.id}`, {
      duration: 1000,
      origin: "bottom",
      distance: "20px",
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
  }, [props.id]);

  return (
    <div className={`card card-${props.id}`}>
      <div className="cardImage">
        <img className="Image" src={props.img} alt="projectImage" />
      </div>
      <div className="cardContentWrapper">
        <div className="cardInfo">
          <h1 className="cardName">{props.name}</h1>
          <p className="cardDescription">{props.description}</p>
        </div>
        <div className="cardButtons">
          <a
            href={props.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">View Github Repo</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </a>
          <a
            href={props.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
             <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">View Project</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
