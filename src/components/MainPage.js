import React from 'react';
import Header from './header';
import Section from './section';
import TechnologyUsed from './tech';
import Projects from './projects';
import Footer from './footer';
import './mainPage.css';


export default function MainPage() {
    return (
      <>
        <div className='main-container'>
          <Header />
          <Section />
          <TechnologyUsed/>
          <Projects/>
          <Footer/>
        </div>
      </>
    );
}