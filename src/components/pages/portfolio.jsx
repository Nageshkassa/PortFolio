
import { useState } from 'react';
import React from 'react'
import TabSection from "../TabSection";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Pop from "./pop_up/portfolio_pop";

import { useGlobalContext } from '../context';
const Portfolio = ({activeTab}) => {
  const { data } =useGlobalContext();
  
  const [open, setOpen] = useState(false);
const [projData,setdata]=useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePopSelection = (item) => {

    setOpen(true); 
    setdata(item);
  };



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
    height: '100vh', 
    overflowY: 'auto', 

    padding: '30px',
    visibility: 'visible', 
    opacity: 1, 
    transition: 'all 0.3s ease-in-out'
  };



 return (
    <TabSection id="portfolio" title="portfolio" subTitle="Elevate your brand to new heights with our expertise" isActive={activeTab === "portfolio"}>

  <h3 className="passionate font_w_font_s1">
    Odio pulvinar purus pharetra nunc tellus ultrices in ac enim. Volutpat purus
    tristique turpis purus faucibus leo arcu imperdiet nulla.
  </h3>

  <div className="content_main">
    <div className="content_main1">

    {data.user.projects.map((item, index) => (
       <div key={index} className=" ">
        <div className="content_portfolio"  onClick={() => handlePopSelection(item)}>
          <div className="content-overlay" />
          <img
            className="content-image"
            src={item.image.url}
            alt="content_img"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">{item.title}</h3>
            <p className="content-text">CONTENT</p>
          </div>
        </div>
        <h4 className="project_name font_w_font_s">{item.title}</h4>
        <p className="project_name_sub font_w_font_s1">CONTENT</p>
      </div>

))}

{/* 

      <div className="">
        <div className="content_portfolio" id="youtube">
  
          <a href="https://youtu.be/OZzoAw9QHXY?si=j32q8VFU2u2_WkfW" target="_blank">
            <div className="content-overlay" />
            <img
              className="content-image"
              src="../assets/images/food_app.jpg"
              alt="food_app"
            />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Food App Development</h3>
              <p className="content-text">youtube video</p>
            </div>
          </a>
        </div>
        <h4 className="project_name font_w_font_s">Food App Development</h4>
        <p className="project_name_sub font_w_font_s1">youtube video</p>
      </div>



      <div className="">
        <div className="content_portfolio link">
          <div className="content-overlay" />
          <img
            className="content-image"
            src="../assets/images/pocket_fm.jpg"
            alt="pocket_fm"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Pocket FM Radio</h3>
            <p className="content-text">sound cloud</p>
          </div>
        </div>
        <h4 className="project_name font_w_font_s">Pocket FM Radio</h4>
        <p className="project_name_sub font_w_font_s1">sound cloud</p>
      </div>
    </div>
    <div className="content_main2">
      <div className=" ">
        <div className="content_portfolio" id="vimeo">
          <div className="content-overlay" />
          <img
            className="content-image"
            src="../assets/images/crypto_app_img.jpg"
            alt="crypto_app_img"
          />

          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Crypto App UI Design</h3>
            <p className="content-text">vimeo video</p>
          </div>
          
        </div>
        <h4 className="project_name font_w_font_s">Crypto App UI Design</h4>
        <p className="project_name_sub font_w_font_s1">vimeo video</p>
      </div>

      <div className="" onClick={() => handlePopSelection('Pop2')}>
        <a >
          <div className="content_portfolio">
            <div className="content-overlay" />
            <img
              className="content-image"
              src="../assets/images/city_3Dview.jpg"
              alt="city_3Dview"
            />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">City 3D View</h3>
              <p className="content-text">gallery</p>
            </div>
          </div>
        </a>
        <h4 className="project_name font_w_font_s">City 3D View</h4>
        <p className="project_name_sub font_w_font_s1">gallery</p>
      </div>

      <div className="" onClick={handleOpen}>
        <div className="content_portfolio pop-up">
          <div className="content-overlay" />
          <img
            className="content-image"
            src="../assets/images/bank_app.jpg"
            alt="bank_app"
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Bank App Development</h3>
            <p className="content-text">content</p>
          </div>
        </div>
        <h4 className="project_name font_w_font_s">Bank App Development</h4>
        <p className="project_name_sub font_w_font_s1">content</p>
      </div> */}



    </div>
  </div>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>

        <Pop data={projData}/>


   
        </Box>
      </Modal>
      
</TabSection>

  )
}

export default Portfolio;
