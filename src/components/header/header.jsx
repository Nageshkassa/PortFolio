import React from "react";

import All_page from "../all_pages";

import { useState } from "react";
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
            <li className="icetab current-tab" to="/">
              <a
                href=""
                className="nav_menu_icon_line"
                onClick={() => handleTab("home")}
                style={{ color: activeTab === "home" ? "#55E6A5" : "black" }}
              >
                <img
                  className="nav_menu_icon"
                  src="../assets/images/home_icon.svg"
                  alt="home_icon"
                />
              </a>
              <ul className="sub-menu blank">
                <li className="">
                  <a
                    className="link_name"
                    onClick={() => handleTab("home")}
        
                  >
                    Home
                  </a>
                </li>
              </ul>
            </li>

            <li className="icetab menu-btn">
              <a
                className="nav_menu_icon_line"
                onClick={() => handleTab("about")}
         
              >
                <img
                  className="nav_menu_icon"
                  src="../assets/images/about_icon.svg"
                  alt="about_icon"
                  
                />
              </a>

              <ul className="sub-menu">
                <li>
                  <a
                    className="link_name"
                    onClick={() => handleTab("about")}
     
                  >
                    About Me
                  </a>
                </li>
              </ul>
            </li>

            <li className="icetab">
              <a
                className="nav_menu_icon_line"
                onClick={() => handleTab("resume")}
                style={{ color: activeTab === "resume" ? "#55E6A5" : "black" }}
              >
                <img
                  className="nav_menu_icon"
                  src="../assets/images/resume_icon.svg"
                  alt="resume_icon"
                />
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" onClick={() => handleTab("resume")}>
                    Resume
                  </a>
                </li>
              </ul>
            </li>

            <li className="icetab">
              <a
                className="nav_menu_icon_line"
                onClick={() => handleTab("services")}
              >
                <img
                  className="nav_menu_icon"
                  src="../assets/images/services_icon.svg"
                  alt="services_icon"
                />
              </a>
              <ul className="sub-menu">
                <li>
                  <a
                    className="link_name"
                    onClick={() => handleTab("services")}
                  >
                    Services
                  </a>
                </li>
              </ul>
            </li>
            <li className="icetab">
              <a
                className="nav_menu_icon_line"
                onClick={() => handleTab("skills")}
              >
                <img
                  className="nav_menu_icon"
                  src="../assets/images/skills_icon.svg"
                  alt="skills_icon"
                />
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" onClick={() => handleTab("skills")}>
                    Skills
                  </a>
                </li>
              </ul>
            </li>
            <li className="icetab">
              <a
                className="nav_menu_icon_line"
                onClick={() => handleTab("portfolio")}
              >
                <img
                  className="nav_menu_icon"
                  src="../assets/images/portfolio_icon.svg"
                  alt="portfolio_icon"
                />
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a
                    className="link_name"
                    onClick={() => handleTab("portfolio")}
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </li>
            <li className="icetab">
              <a
                className="nav_menu_icon_line"
                onClick={() => handleTab("testimonials")}
              >
                <img
                  className="nav_menu_icon"
                  src="../assets/images/testimonial_icon.svg"
                  alt="testimonial_icon"
                />
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a
                    className="link_name"
                    onClick={() => handleTab("testimonials")}
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </li>
            <li className="icetab">
              <a
                className="nav_menu_icon_line"
                onClick={() => handleTab("blogs")}
              >
                <img
                  className="nav_menu_icon"
                  src="../assets/images/blog_icon.svg"
                  alt="blog_icon"
                />
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" onClick={() => handleTab("blogs")}>
                    Blogs
                  </a>
                </li>
              </ul>
            </li>
            <li className="icetab">
              <a className="" onClick={() => handleTab("contact")}>
                <img
                  className="nav_menu_icon"
                  src="../assets/images/contact_icon.svg"
                  alt="contact_icon"
                />
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" onClick={() => handleTab("contact")}>
                    Contact
                  </a>
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
            alt="line-menu"
          />
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
            <li className="icetab current-tab" onClick={openNav}>
              <a
                className="icons2"
                onClick={() => handleTab("home")}
                style={{ color: activeTab === "home" ? "#55E6A5" : "black" }}
              >
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/home_icon.svg"
                  alt="home_icon"
                />
                Home
              </a>
            </li>

            <li
              className="icetab"
              onClick={() => handleTab("about")}
              style={{ color: activeTab === "about" ? "#55E6A5" : "black" }}
            >
              <a className="icons2" to="/about">
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/about_icon.svg"
                  alt="about_icon"
                />
                About Me
              </a>
            </li>
            <li className="icetab" onClick={openNav}>
              <a className="icons2" onClick={() => handleTab("resume")}>
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/resume_icon.svg"
                  alt="resume_icon"
                />
                Resume
              </a>
            </li>
            <li className="icetab" onClick={openNav}>
              <a className="icons2" onClick={() => handleTab("services")}>
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/services_icon.svg"
                  alt="services_icon.svg"
                />
                Services
              </a>
            </li>
            <li className="icetab" onClick={openNav}>
              <a className="icons2" onClick={() => handleTab("skills")}>
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/skills_icon.svg"
                  alt="skills_icon"
                />
                Skills
              </a>
            </li>
            <li className="icetab" onClick={openNav}>
              <a className="icons2" onClick={() => handleTab("portfolio")}>
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/portfolio_icon.svg"
                  alt="portfolio_icon"
                />
                Portfolio
              </a>
            </li>
            <li className="icetab" onClick={openNav}>
              <a className="icons2" onClick={() => handleTab("testimonials")}>
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/testimonial_icon.svg"
                  alt="testimonial_icon"
                />
                Testimonials
              </a>
            </li>
            <li className="icetab" onClick={openNav}>
              <a className="icons2" onClick={() => handleTab("blogs")}>
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/blog_icon.svg"
                  alt="blog_icon"
                />
                Blogs
              </a>
            </li>
            <li className="icetab" onClick={openNav}>
              <a className="icons2" onClick={() => handleTab("contact")}>
                <img
                  className="nav_menu_icon sidenav_img"
                  src="../assets/images/contact_icon.svg"
                  alt="contact_icon"
                />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ======================================= Side Menu End ================================== */}

      <All_page activeTab={activeTab} />
    </>
  );
}

export default Header;
