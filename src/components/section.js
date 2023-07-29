import React from "react";
import logo from "../assets/IMG_6266.jpg"
import "./section.css"


export default function Section() {
    return (
      <>
        <div className='section-container' id="section">
          <div className='inside-container'>
            <div className='introduction'>
              <h1>नमस्ते!</h1>
              <h1>I am Nilay🙏</h1>
              <h2>Frontend Developer 🚀</h2>
              <p>
                I am a frontend developer from India, I build interactive
                websites that run across platforms & devices. <br />
                <br /> Find me on - <br />
              </p>
            </div>
            <div className='main-img'>
              <img src={logo} alt='img'></img>
            </div>
          </div>
          <div className='socialMedia-links'>
            <a
              className='social-lists'
              href='https://www.linkedin.com/in/nilay-pagnis/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={require("../assets/linkedin.png")} alt='linkedin'></img>
            </a>
            <a
              className='social-lists'
              href='https://github.com/nilay-pagnis'
              target='_blank'
              rel='noreferrer'
            >
              <img src={require("../assets/github.png")} alt='gitHub'></img>
            </a>
          </div>
          
        </div><br/>
      </>
    );
}