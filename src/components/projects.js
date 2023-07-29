import React from "react";
import "./projects.css";

export default function Projects() {
    return (
      <>
        <div className='projects-container' id="project">
          <h2>Projects</h2>
          <br />
          <br />
          <div className='projects-list'>
            <div className='lists'>
              <img src={require("../assets/societyio.png")} />
              <p className='project-heading'>
                Society.io (Society Management App)
              </p>
              <br />
              <p className='description'>
                A society management app, where user can perforn CRUD oprations
                and have JWT authentication mechanism, made with React js, Node
                js and mongo db.
              </p>
              <a
                className='webLink'
                href='https://societyio.onrender.com/'
                target='_blank'
                rel='noreferrer'
              >
                Check it out
              </a>
            </div>
            <div className='lists'>
              <img src={require("../assets/dashboard.png")} />
              <p className='project-heading'>Dashboard UI</p>
              <br />
              <p className='description'>
                An Applicatino mainly focused on User interface design, made
                with next js, tailwind, and CSS
              </p>
              <a
                className='webLink'
                href='https://github.com/nilay-pagnis/dashboard-UI/tree/main'
                target='_blank'
                rel='noreferrer'
              >
                Check it out
              </a>
            </div>
            <div className='lists'>
              <img src={require("../assets/p1.png")} alt='ownerImg' />
              <p className='project-heading'>Todo App</p>
              <br />
              <p className='description'>
                A Todo app which can help user to finish important work on time,
                made with HTML, CSS and javaScript
              </p>
              <a
                className='webLink'
                href='https://nilay-pagnis.github.io/TodoApp/'
                target='_blank'
                rel='noreferrer'
              >
                Check it out
              </a>
            </div>
          </div>
        </div>
      </>
    );
}