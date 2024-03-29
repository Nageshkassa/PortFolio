import React from "react";
import { useState } from "react";
import Allpage from "../all_pages";
import { HashLink as Link} from 'react-router-hash-link';


  function Header() {
    const [activeTab, setTab] = useState("home");
    const handleTab = (tab) => {
      setTab(tab);
      // console.log("After clicked tab state is ", tab);
    };


    function openNav() {
      var side = document.getElementById("mySidenav");
      if (side.style.width === "300px") {
        side.style.width = "0px";
      } else {
        side.style.width = "300px";
      }
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    return (
      <>
        {/* ====================================== Fix Icon Menu ===================================== */}

        <div>
          <div className="sidebar close">

            <ul className="nav-links icetab-container" id="icetab-container">
              
              <li className="icetab" to="/" >
                <Link
                   to="#card_main"
                  className="nav_menu_icon_line"
                  onClick={() => handleTab("home")}
                  style={{ 
                    filter: activeTab === 'home' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                    // borderBottom: activeTab === 'about' ? '2px solid var(--primary-color)' : 'none'
                }}
    
                >
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/home_icon.svg"

                    
                   alt="home_icon"/>

                </Link>

         


                <ul className="sub-menu">
                  <li>
                    <Link to="#card_main" className="link_name" onClick={() => handleTab("home")}>
                     Home
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="icetab" >
                <Link style={{ 
                      filter: activeTab === 'about' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                      // borderBottom: activeTab === 'about' ? '2px solid var(--primary-color)' : 'none'
                  }}
                 to="#about"
                  className="nav_menu_icon_line"

                  onClick={() => handleTab("about")}

                >
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/about_icon.svg"
            
                    alt="about_icon" 
      
                    />
                </Link>

             


                
                <ul className="sub-menu">
                  <li>
                    <Link to="#card_main" className="link_name"  onClick={() => {
                        handleTab("about");
                     
                      } }>
                       About Me
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="icetab" >
                <Link
                style={{ 
                  filter: activeTab === 'resume' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
                 to="#resume"
                  className="nav_menu_icon_line"
                  onClick={() => handleTab("resume")}

                >
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/resume_icon.svg"
                    alt="resume_icon" />
                </Link>

                <ul className="sub-menu">
                  <li>
                    <Link to="#resume" className="link_name" onClick={() => handleTab("resume")}>
                      Resume
                    </Link>
                  </li>
                </ul>




                
              </li>

              <li className="icetab" >
                <Link
                style={{ 
                  filter: activeTab === 'services' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                  
              }}
                    to="#services"
                  className="nav_menu_icon_line"
                  onClick={() => handleTab("services")}
                >
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/services_icon.svg"
                    alt="services_icon" />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link
                           to="#services"
                      className="link_name"
                      onClick={() => handleTab("services")}
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="icetab" >
                <Link
                style={{ 
                  filter: activeTab === 'skills' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
               
              }}
                  to="#skills"
                  className="nav_menu_icon_line"
                  onClick={() => handleTab("skills")}
                >
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/skills_icon.svg"
                    alt="skills_icon" />
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link   to="#skills" className="link_name" onClick={() => handleTab("skills")}>
                      Skills
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="icetab" >
                <Link  to="#portfolio"
                style={{ 
                  filter: activeTab === 'portfolio' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
               
              }}
                  className="nav_menu_icon_line"
                  onClick={() => handleTab("portfolio")}
                >
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/portfolio_icon.svg"
                    alt="portfolio_icon" />
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link  to="#portfolio"
                      className="link_name"
                      onClick={() => handleTab("portfolio")}
                    >
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </li> 
              <li className="icetab" >
                <Link  to="#testimonials"
                style={{ 
                  filter: activeTab === 'testimonials' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                  
              }}
                  className="nav_menu_icon_line"
                  onClick={() => handleTab("testimonials")}
                >
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/testimonial_icon.svg"
                    alt="testimonial_icon" />
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link  to="#testimonials"
                      className="link_name"
                      onClick={() => handleTab("testimonials")}
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="icetab" >
                <Link  to="#blogs"
                style={{ 
                  filter: activeTab === 'blogs' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                  
              }}
                  className="nav_menu_icon_line"
                  onClick={() => handleTab("blogs")}
                >
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/blog_icon.svg"
                    alt="blog_icon" />
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link  to="#blogs" className="link_name" onClick={() => handleTab("blogs")}>
                      Blogs
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="icetab" >
                <Link  style={{ 
                      filter: activeTab === 'contact' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                      
                  }} to="#contact" className="" onClick={() => handleTab("contact")}>
                  <img
                    className="nav_menu_icon"
                    src="../assets/images/contact_icon.svg"
                    alt="contact_icon" />
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link  to="#contact" className="link_name" onClick={() => handleTab("contact")}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* ====================================== Fix Icon Menu End =====================================  */}

          {/* ======================================= Side Menu ==================================  */}
          <div className="toggle" onClick={openNav}>
            <img
              className="line-menu"
              src="../assets/images/line-menu.png"
              alt="line-menu" />
          </div>
          <div id="mySidenav" className="sidenav">
            <div className="closebtn" onClick={closeNav}>
              ×
            </div>
            <img className="logo" src="../assets/images/logo.png" alt="logo" />

            <ul
              className="sidescreen_sub icetab-container"
              id="icetab-container2"
            >


        <li className="icetab" onClick={openNav}
              
                style={{ 
                  filter: activeTab === 'home' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
         >

              <Link  to="#home" className="icons2"
                      onClick={() => handleTab("home")}  
                >


                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/home_icon.svg"
                    alt="home_icon" 
                    
                    />

                  Home
                </Link>
              </li>

              <li
                className="icetab"
                onClick={openNav} 
                style={{ 
                  filter: activeTab === 'about' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
         
              >
                <Link  to="#about" className="icons2"
                      onClick={() => handleTab("about")}  
                >
                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/about_icon.svg"
                    alt="about_icon"
         />
                  About Me
                </Link>
              </li>


              <li className="icetab" onClick={openNav}>
                <Link  to="#resume" className="icons2" onClick={() => handleTab("resume")}
                 style={{ 
                  filter: activeTab === 'resume' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
                >
                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/resume_icon.svg"
                    alt="resume_icon" />
                  Resume
                </Link>
              </li>
              <li className="icetab" onClick={openNav}>
                <Link   to="#services" className="icons2" onClick={() => handleTab("services")}
                 style={{ 
                  filter: activeTab === 'services' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
                >
                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/services_icon.svg"
                    alt="services_icon.svg" />
                  Services
                </Link>
              </li>
              <li className="icetab" onClick={openNav}>
                <Link  to="#skills" className="icons2" onClick={() => handleTab("skills")}
                 style={{ 
                  filter: activeTab === 'skills' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
                >
                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/skills_icon.svg"
                    alt="skills_icon" />
                  Skills
                </Link>
              </li>
              <li className="icetab" onClick={openNav}>
                <Link  to="#portfolio" className="icons2" onClick={() => handleTab("portfolio")}
                 style={{ 
                  filter: activeTab === 'portfolio' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
                >
                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/portfolio_icon.svg"
                    alt="portfolio_icon" />
                  Portfolio
                </Link>
              </li>
              <li className="icetab" onClick={openNav}>
                <Link  to="#testimonials" className="icons2" onClick={() => handleTab("testimonials")}
                 style={{ 
                  filter: activeTab === 'testimonials' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
                >
                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/testimonial_icon.svg"
                    alt="testimonial_icon" />
                  Testimonials
                </Link>
              </li>
              <li className="icetab" onClick={openNav}>
                <Link  to="#blogs" className="icons2" onClick={() => handleTab("blogs")}
                 style={{ 
                  filter: activeTab === 'blogs' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
                >
                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/blog_icon.svg"
                    alt="blog_icon" />
                  Blogs
                </Link>
              </li>
              <li className="icetab" onClick={openNav}>
                <Link  to="#contact" className="icons2" onClick={() => handleTab("contact")}
                 style={{ 
                  filter: activeTab === 'contact' ? 'brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(2912%) hue-rotate(94deg) brightness(94%) contrast(92%)' : '',
                 
              }}
                >
                  <img
                    className="nav_menu_icon sidenav_img"
                    src="../assets/images/contact_icon.svg"
                    alt="contact_icon" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* ======================================= Side Menu End ================================== */}

        <Allpage activeTab={activeTab} />
      </>
    );
  }

export default Header;
