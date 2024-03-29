import { useState } from "react";
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TabSection from "../TabSection";
import Pop from "./pop_up/portfolio_pop";
import { useGlobalContext } from "../context";
const Blog = ({ activeTab }) => {

  const { data } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [projData,setdata]=useState();
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handlePopSelection = (item) => {

      setOpen(true); 
      setdata(item);

    };
  

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
    height: "100vh", 
    overflowY: "auto",

    padding: "30px",
    visibility: "visible", 
    opacity: 1, 
    transition: "all 0.3s ease-in-out",
  };

  return (
    <TabSection
      id="blogs"
      title="blogs"
      subTitle="Recent Blogs And Articles"
      isActive={activeTab === "blogs"}
    >
      <h3 className="passionate font_w_font_s1">
        Massa in ornare pharetra vitae et. Nunc lobortis cursus risus bibendum
        sed. Viverra tempus amet nibh id ipsum gravida mus.
      </h3>

      <div className="blog_section_main" >

      { data.user.projects.map((item, index) => (
         
        <div key={index}  className="blog_img_top"  onClick={() => handlePopSelection(item)}>
          <div className="blog_img trigger" style={{ backgroundImage: `url(${item.image.url})` }}>
            {/* <div className="blog_date">
              <h4 className="date font_w_font_s">
                20 <span className="month">DEC</span>
              </h4>
            </div> */}
          </div>
          <h3 className="become font_w_font_s">
            Become a Frontend Developer in 5 Simple Steps
          </h3>
          <p className="web_development font_w_font_s1">{item.title}</p>
        </div>

))}


{/* 
        <div className=" ">
          <div className="blog_img blog_img2 trigger">
            <div className="blog_date">
              <h4 className="date font_w_font_s">
                18 <span className="month">DEC</span>
              </h4>
            </div>
          </div>
          <h3 className="become font_w_font_s">
            11 Best Logo Design Online &amp; Offline Courses
          </h3>
          <p className="web_development font_w_font_s1">graphic design</p>
        </div>
        <div className=" ">
          <div className="blog_img blog_img3 trigger">
            <div className="blog_date">
              <h4 className="date font_w_font_s">
                8 <span className="month">DEC</span>
              </h4>
            </div>
          </div>
          <h3 className="become font_w_font_s">
            12 Best Branding Design Online and Offline Courses
          </h3>
          <p className="web_development font_w_font_s1">graphic design</p>
        </div> */}


{/* 
        <div className=" ">
          <div className="blog_img blog_img4 trigger">
            <div className="blog_date">
              <h4 className="date font_w_font_s">
                02 <span className="month">DEC</span>
              </h4>
            </div>
          </div>
          <h3 className="become font_w_font_s">
            10 Content Proofreading Tips to Catch More Goofs
          </h3>
          <p className="web_development font_w_font_s1">seo</p>
        </div>
        <div className=" ">
          <div className="blog_img blog_img5 trigger">
            <div className="blog_date">
              <h4 className="date font_w_font_s">
                28 <span className="month">NOV</span>
              </h4>
            </div>
          </div>
          <h3 className="become font_w_font_s">
            Play to Strengths and Supercharge Your Business
          </h3>
          <p className="web_development font_w_font_s1">web development</p>
        </div>


        <div className=" ">
          <div className="blog_img blog_img6 trigger">
            <div className="blog_date">
              <h4 className="date font_w_font_s">
                22 <span className="month">NOV</span>
              </h4>
            </div>
          </div>
          <h3 className="become font_w_font_s">
            5 Steps to Create an Outstanding Marketing Plan
          </h3>
          <p className="web_development font_w_font_s1">digital marketing</p>
        </div> */}


      </div>
      <div id="text">
       
{/*           
          <div className=" ">
            <div className="blog_img blog_img7 trigger">
              <div className="blog_date">
                <h4 className="date font_w_font_s">
                  22 <span className="month">NOV</span>
                </h4>
              </div>
            </div>
            <h3 className="become font_w_font_s">
              5 Steps to Create an Outstanding Marketing Plan
            </h3>
            <p className="web_development font_w_font_s1">digital marketing</p>
          </div> */}
          
          {/* <div className=" ">
            <div className="blog_img blog_img8 trigger">
              <div className="blog_date">
                <h4 className="date font_w_font_s">
                  22 <span className="month">NOV</span>
                </h4>
              </div>
            </div>
            <h3 className="become font_w_font_s">
              5 Steps to Create an Outstanding Marketing Plan
            </h3>
            <p className="web_development font_w_font_s1">digital marketing</p>
          </div> */}


   
      </div>


      <div className="view_more_main">
        <button className="download_cv font_w_font_s" id="toggle">
          View More
        </button>
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
  );
};

export default Blog;
