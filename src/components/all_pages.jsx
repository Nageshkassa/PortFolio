import React from 'react'

import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Services from "./pages/services";
import Skills  from "./pages/skills";
import Portfolio from "./pages/portfolio";
import Testimominals   from "./pages/testimonials";
import Blogs  from "./pages/blog";
import Contact  from "./pages/contact";

function All_pages({activeTab}) {
  return (
    <div>
      
    {activeTab === "home" && (    
   <Home activeTab={activeTab}/>
    )}

      
{activeTab === "about" && (   
  <About activeTab={activeTab}/>
  
  )}
{activeTab === "resume" && (   
  <Resume activeTab={activeTab}/>
  
  )}
  {activeTab === "services" && (   
  <Services activeTab={activeTab}/>
  
  )}

{activeTab === "skills" && (   
  <Skills activeTab={activeTab}/>
  
  )}

{activeTab === "portfolio" && (   
  <Portfolio activeTab={activeTab}/>
  
  )}
{activeTab === "testimonials" && (   
  <Testimominals  activeTab={activeTab}/>
  
  )}
  {activeTab === "blogs" && (   
  <Blogs activeTab={activeTab}/>
  
  )}


{activeTab === "contact" && (   
  <Contact activeTab={activeTab}/>
  
  )}


    </div>
  )
}

export default All_pages
