import React from "react";


function ContactInfo(){
    return(
        <div className="contactInfo">
        <a href="https://github.com/gorkemtand" target="_blank" rel="noreferrer" aria-label="Github">
            <img src="https://storage.googleapis.com/gorkemtandogan-images/github-big.png" alt=""></img>
        </a>
        <a href="https://www.linkedin.com/in/gorkem-tandogan-5408a5183/" target="_blank" rel="noreferrer" aria-label="Linkedin">
            <img src="https://storage.googleapis.com/gorkemtandogan-images/linkedin.png" alt=""></img>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=tandogangorkem@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail">
            <img src="https://storage.googleapis.com/gorkemtandogan-images/email.png" alt=""></img>
        </a>

        </div>
    );
}

export default ContactInfo;