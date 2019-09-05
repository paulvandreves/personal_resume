import React from 'react';
import linkedin from './images/LinkedIn.png';
import octoCat from './images/gitHubLogo.png'
import './App.css';

function App() {
  return (  // app className centers the content below 
    <div className="App"> 
     <h1 className="heading" >Paul Van Dyke</h1>
     <h2 className="subHeading">SOFTWARE DEVELOPER</h2>
    <p> <span className="phoneNumber" >Traverse City M.I  (231) 633-9666</span>    <span className="email">paul.aaron.vandyke@gmail.com</span>  </p>

    <div className="logoImages" >
        <a href="http://www.github.com/paulvandreves"><img  className="gitHub"src={octoCat} title="github.com/paulvandreves" /></a>
        {/* <a href="http://www.paulvantech.com"><h2 className="website">paulvantech.com</h2></a> */}
        <a href="http://www.linkedin.com/in/paul-van-dyke"><img className="linkedin" src={linkedin} /></a>
    </div>
  
    <hr></hr>

    <div className="columnLayout">
    <div className="experience">
      <h2 className="meat" >Experience</h2>
       <h3>Software Developer</h3>
       <p>HealthBridge: August 2018 - September 2019</p>
       <p>Worked on multiple highly functional React Applications </p>
       <p>Wrote cypress integration tests and k6 load tests </p>

       <h3>Security Operations Analyst</h3>
       <p>Cavalry Solutions: July 2017 - July 2018</p>
       <p>Provided Tier 1 response to networking issues and Cyber Security threats to Americas power grid</p>
      
      <h3>Non-commissioned Officer of Marines </h3>
      <p>Responsible for the safety and professional development of junior Marines</p>
      <p>Attained a Secret Clearance</p>

      
    </div>

    <div class="verticalLine"></div>
    <div className="projects">
      <h2 className="meat"  >Projects</h2>
        <h3>Alumnize</h3>
        <p>Technologies used: Knex.js, Express, Postgres, Hekoku</p>
        <p>Description:Web application designed to track the career paths of Galvanize grads</p>
        <a href="https://alumnize-9cdd1.firebaseapp.com/#/">almnize-9cdd1.firebase.com</a>

        <h3>We-DJ</h3>
        <p>Technologies used: JavaScript, HTML, CSS jQuery, Knex.js, Postgres, Heroku</p>
        <p>Description: Allows friend's to create collaborative playlists</p>
        <a href="https://wedj-youtube.firebaseapp.com/">wedj-youtube.firebaseapp.com </a>

        <h3>Virtual Reality Maze</h3>
        <p>Description: timed, 3D, VR maze built for Android with Samsung VR gear</p>
        <a href="https://paulvantech.com/#Projects">paulvantech.com/#Projects</a>
      </div>

      
    </div>

    <div className="Education" >
      <h3>EDUCATION</h3>
      <h4>GALVANIZE IMMERSIVE</h4>
      <p>Full-Stack Javascript web development immersive</p>
      <p>Frontend Stack:HTML5 CSS3 Javascript Jquery </p>
      <p>Backend Stack: Node, Experience Postgres SQL</p>
      </div>
    </div>

    
  );
}
export default App;