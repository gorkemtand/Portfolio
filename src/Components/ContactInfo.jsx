import React from "react";
import GithubLogo from "../images/github-big.png";
import LinkedinLogo from "../images/linkedin.png";
import EmailLogo from "../images/email.png";

function ContactInfo(){
    return(
        <div className="contactInfo">
        <a href="https://github.com/gorkemtand" target="_blank" aria-label="Github">
            <img src={GithubLogo}></img>
        </a>
        <a href="https://www.linkedin.com/in/gorkem-tandogan-5408a5183/" target="_blank" aria-label="Linkedin">
            <img src={LinkedinLogo}></img>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=tandogangorkem@gmail.com" target="_blank" aria-label="Gmail">
            <img src={EmailLogo}></img>
        </a>

        </div>
    );
}

export default ContactInfo;