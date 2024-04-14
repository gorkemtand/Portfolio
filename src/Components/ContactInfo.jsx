import React from "react";


function ContactInfo(){
    return(
        <div className="contactInfo">
        <a href="https://github.com/gorkemtand" target="_blank" rel="noreferrer" aria-label="Github">
            <img src="/images/tech/github-big.png" alt=""></img>
        </a>
        <a href="https://www.linkedin.com/in/gorkem-tandogan-5408a5183/" target="_blank" rel="noreferrer" aria-label="Linkedin">
            <img src="/images/tech/linkedin.png" alt=""></img>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=tandogangorkem@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail">
            <img src="/images/tech/email.png" alt=""></img>
        </a>

        </div>
    );
}

export default ContactInfo;