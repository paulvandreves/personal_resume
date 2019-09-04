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
        {/* consider adding galvanize talent link instead */}
        <img href="github.com/paulvandreves" className="gitHub"src={octoCat} />
        <h2 className="website">paulvantech.com</h2>
       <img className="linkedin" src={linkedin}  />
    
    </div>
  
    {/* <div className="columnLayout">
    <div className="experience"><p>orem ipsum dolor amet green juice selfies prism cray narwhal direct trade. Ramps single-origin coffee plaid PBR&B bushwick,
       activated charcoal vinyl enamel pin swag blog kinfolk pour-over farm-to-table woke. IPhone narwhal heirloom, mlkshk tumeric retro lomo health 
       goth chartreuse squid taxidermy craft beer iceland everyday carry. Taxidermy neutra skateboard meggings franzen wayfarers asymmetrical distillery artisan tacos austin. Ethical air plant narwhal pop-up etsy enamel pin.</p></div>
    <div className="projects"><p>activated charcoal vinyl enamel pin swag blog kinfolk pour-over farm-to-table woke. IPhone narwhal heirloom, mlkshk tumeric 
      retro 
      lomo health 
       goth chartreuse squid taxidermy craft beer </p></div>
    </div> */}
    </div>

    
  );
}

export default App;