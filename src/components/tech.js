import React from "react";
import './tech.css';

export default function TechnologyUsed() {
    return (
      <>
        <div className='tech-container'>
          <div className='tech-subHeading'>
            <h2>Technologies I've worked with</h2>
          </div>

          <div className='tech-names-Grid'>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/javascript.png")} alt='javascript' />
                <p>JavaScript</p>
              </div>
            </div>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/nodejs.png")} alt='nodejs' />
                <p>NodeJs</p>
              </div>
            </div>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/react.png")} alt='reactjs' />
                <p>ReactJs</p>
              </div>
            </div>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/salesforce.png")} alt='salesforce' />
                <p>Salesforce</p>
              </div>
            </div>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/MongoDB.png")} alt='mongodb' />
                <p>MongoDB</p>
              </div>
            </div>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/bootstrap.png")} alt='bootstrap' />
                <p>Bootstrap</p>
              </div>
            </div>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/html.png")} alt='html' />
                <p>HTML</p>
              </div>
            </div>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/css.png")} alt='css' />
                <p>CSS</p>
              </div>
            </div>
            <div className='grid1'>
              <div className='lang-img'>
                <img src={require("../assets/jira.png")} alt='jira' />
                <p>JIRA</p>
              </div>
            </div>
          </div>
        </div> <br/>
      </>
    );
}