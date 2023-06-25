import React from "react";
import GithubLogo from "../images/github.png";
import LinkIcon from "../images/link.png";

function Card(props) {
  return (
    <div className="card">
      <div className="cardImage">
        <img className="Image" src={props.img} alt="projectImage" />
      </div>
      <div className="cardInfo">
        <h1 className="cardName">{props.name}</h1>
        <p className="cardDescription">{props.description}</p>
      </div>
      <div className="cardButtons">
        <button className="codeButton">
        <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
          <span className="buttonText">Code</span>   
          <img src={GithubLogo}></img>  
        </a>
        </button>
        <button className="liveButton">
          <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
          <span className="buttonText">Live Link</span>   
          <img src={LinkIcon}></img>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
