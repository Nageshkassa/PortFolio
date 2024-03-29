import React from 'react'
import  { useState } from 'react';


const Portfolio_pop = ({data}) => {

  const [isActive, setIsActive] = useState(false);
console.log("pop opened and id is ",data);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  
  
  return (
    <div>
      <div >
  <div className="content2">

    <img
      className="pop-up-video"
      src={data.image.url}
      alt="portfolio_big_img"
    />
    <div className="corporate_main">
      <div className="corporate_sub">
        <h3 className="project_name corp font_w_font_s">{data.title}</h3>
        <p className="project_name_sub font_w_font_s1">CONTENT</p>
      </div>
      <div className="cuberto_main">
        <p className="created_by">Created By:</p>
        <p className="cuberto">Cuberto</p>
      </div>
      <div className="cuberto_main">
        <p className="created_by">Date:</p>
        <p className="cuberto">20/12/2024</p>
      </div>
      <div className="cuberto_main">
        <p className="created_by">Client:</p>
        <p className="cuberto">Rayan Patrick</p>
      </div>
      <div className="cuberto_main">
        <p className="created_by">Categories:</p>
        <p className="cuberto">Content</p>
      </div>
      {/* <div className="cuberto_main">
        <p className="created_by">TechStack:</p>
        <p className="cuberto">{data.techStack.map((tech, techIndex) => (
                tech.trim()
              ))}</p>
        
      </div> */}

    </div>
    <h3 className="project_name corp font_w_font_s">TechStack</h3>


   
<div className="skill_circle_main">

{data.techStack.map((tech, index) => (
  <div    key={index} className="skill_circle">
    <div className="hard_skill_group">

      <h4 className="hard_skill_counter font_w_font_s1">{tech.trim()}</h4>
    </div>
    

  </div>
    ))}
</div>

    <p className="blandit_text font_w_font_s1">
      {/* Ornare sagittis blandit imperdiet cursus risus. Amet proin cras mattis
      arcu pellentesque lorem sagittis. Mauris facilisis id est duis eget sed
      cras curabitur faucibus. Lectus eu eu quis amet. Ultrices morbi bibendum
      risus nisi sapien id ut egestas. Et fermentum fermentum faucibus sed quis
      in eget. Quis cursus eu in sit cras sit elementum nibh sit. */}


    </p>
    <div className="project_second">
      <div>
        <img
          className="project_sub_images"
          src={data.image.url}
          alt="project_sub_images1"
        />
      </div>
      <div>
        <img
          className="project_sub_images"
          src={data.image.url}
          alt="project_sub_images2"
        />
      </div>
    </div>
    <p className="blandit_text">
      {/* Non vel eget pharetra vestibulum orci amet feugiat mi cras. Neque ac duis
      sed viverra volutpat. Natoque habitasse sit in interdum ut in pharetra
      proin amet. Non id egestas tellus enim nisi proin. Vel neque gravida sed
      nunc. Scelerisque vulputate sit tellus dui. Sollicitudin id nec amet
      porttitor id. In condimentum id id phasellus eu lobortis quis porta nisi. */}
      Description- 
        {data.description}
    </p>
    <div className="pop-up-footer">
      <button
        className="download_cv view_project font_w_font_s"
  
      >
        <i className="ri-eye-line" /> View Project
      </button>

      <div className="share-button share" onClick={handleClick}>
        <i className="ri-share-line share-btn" />
        <div className={`social top center networks-5 ${isActive ? 'active' : ''}`}>
          <a
            className="fbtn facebook"
            href="https://www.facebook.com"
            target="blank"
          >
            <i className="ri-facebook-fill" />
          </a>
          <a
            className="fbtn instagram"
            href="https://www.instagram.com"
            target="blank"
          >
            <i className="ri-instagram-line" />
          </a>
          <a
            className="fbtn whatsapp"
            href="https://wa.me/+12345678899"
            target="blank"
          >
            <i className="ri-whatsapp-line" />
          </a>
          <a
            className="fbtn linkedin"
            href="https://www.linkedin.com"
            target="blank"
          >
            <i className="ri-linkedin-fill" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Portfolio_pop
