import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from "./pages/about";
import Resume from './pages/resume';
import Card from "../components/card";

function Routes({ id, title, subTitle, children ,isActive}) {
  console.log("tab is ",id,title,subTitle);
  /*
  let content;
  switch (tab) {
    case 'home':
      
      content = <Home />;
      console.log("home is clicked  and  content is ",content);
      break;
    case 'about':

      content = <About />;
      console.log("about is clicked  and  content is ",content);
      break;
      case 'resume':

      content = <Resume />;
      console.log("resume  is clicked  and  content is ",content);
      break;
    default:
      content=<Home/>;
      break;
  }*/

  return (



    
    <section className="card_section" id="card_main">

      
    <div className="right_card_main icetab-content" id="icetab-content">
  

    <section className="oliva-intro tabcontent tab-active" id={id}>



      <div className="intro_main">
        <h2 className="intro font_w_font_s">{title}</h2>
      </div>
      <h2 className="moswa font_w_font_s">{subTitle}</h2>
      {isActive && <div>{children}</div>}
      
    </section>
    </div>
    
    </section>


);

};

export default Routes;
