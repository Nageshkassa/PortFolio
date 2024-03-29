import React from 'react'
import TabSection from "../TabSection";

import { useGlobalContext } from '../context';
export default function Resume({activeTab}) {
  const { data } =useGlobalContext();



  function getYear(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
  }
  return (
<TabSection id="resume" title="resume" subTitle="Education" isActive={activeTab ==="resume"}>
      

              


 
  <h3 className="passionate font_w_font_s1  ">
    Dui ac erat in nec ut at viverra. Tristique morbi gravida pulvinar aenean
    ornare cras rhoncus volutpat a. Tempor cras convallis neque auctor ipsum
    cursus senectus. Bibendum nunc a fringilla vitae etiam eget volutpat felis
    scelerisque.
  </h3>
  <div className="education position-relative education_space">
    <div className="side_circle_ring  ">
      <div className="small_yellow_border">
        <div className="small_yellow_circle" />
      </div>
    </div>
    <div className="small_yellow_border_main  ">
      <h3 className="bachelor font_w_font_s1">
        Bachelor of Science in Information Technology
      </h3>
      <h4 className="university font_w_font_s1">
        Cambridge University / 2010 - 2014
      </h4>
      <h5 className="cursus font_w_font_s1">
        Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor, laoreet
        varius et. Sed ut egestas vitae dolor nulla non Ullamcorper amet nibh.
      </h5>
    </div>
  </div>
  <div className="education position-relative education_space">
    <div className="side_circle_ring  ">
      <div className="small_yellow_border">
        <div className="small_yellow_circle" />
      </div>
    </div>
    <div className="small_yellow_border_main  ">
      <h3 className="bachelor font_w_font_s1">
        master of Science in Information Technology
      </h3>
      <h4 className="university font_w_font_s1">
        Cambridge University / 2014 - 2016
      </h4>
      <h5 className="cursus font_w_font_s1">
        Porttitor euismod at semper ut massa. Lorem varius magna volutpat nunc.
        Et faucibus scelerisque donec augue eleifenda morbi dolor lorem semper.
      </h5>
    </div>
  </div>
  <div className="education position-relative">
    <div className="side_circle_ring  ">
      <div className="small_yellow_border">
        <div className="small_yellow_circle" />
      </div>
    </div>
    <div className="small_yellow_border_main  ">
      <h3 className="bachelor font_w_font_s1">
        phd of Science in Information Technology
      </h3>
      <h4 className="university font_w_font_s1">
        Cambridge University / 2016 - 2018
      </h4>
      <h5 className="cursus font_w_font_s1">
        Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
        suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut erat.
      </h5>
    </div>
  </div>
  <h2 className="moswa experience_main_text font_w_font_s  ">
    Experience
  </h2>

  <h3 className="passionate font_w_font_s1  ">
    Dui ac erat in nec ut at viverra. Tristique morbi gravida pulvinar aenean
    ornare cras rhoncus volutpat a. Tempor cras convallis neque auctor ipsum
    cursus senectus. Bibendum nunc a fringilla vitae etiam eget volutpat felis
    scelerisque.
  </h3>

  {data.user.timeline.map((item, index) => (
  <div key={index} className="education position-relative education_space">
    <div className="side_circle_ring  ">
      <div className="small_yellow_border">
        <div className="small_yellow_circle" />
      </div>
    </div>
    <div className="small_yellow_border_main  ">
      <div className="envato_group_main">
        <div>
          <h3 className="bachelor font_w_font_s1">{item.jobTitle}</h3>
          <h4 className="company font_w_font_s1">
            {item.company_name} / {getYear(item.startDate)} - {getYear(item.endDate)}
          </h4>
        </div>
        {item.icon ? (
  <img
   
    src={item.icon.url}
    alt="envato"
    style={{
     
      borderRadius: '50%',
      width: '50px',
      height: '50px',
    }}
  />
) : (
  <img
    className="company_logo"
    src="../assets/images/twitter.png"
    alt="envato"

  />
)}

      </div>
      <h5 className="cursus font_w_font_s1">
        {item.bulletPoints.map((bullet, bulletIndex) => (
          <p key={bulletIndex}>{bullet}</p>
        ))}
      </h5>
    </div>
  </div>
))}



{/* 

  <div className="education position-relative">
    <div className="side_circle_ring  ">
      <div className="small_yellow_border">
        <div className="small_yellow_circle" />
      </div>
    </div>
    <div className="small_yellow_border_main  ">
      <div className="envato_group_main">
        <div>
          <h3 className="bachelor font_w_font_s1">
            junior design &amp; development
          </h3>
          <h4 className="company font_w_font_s1">Twitter / 2018 - 2019</h4>
        </div>
        <img
          className="company_logo"
          src="../assets/images/twitter.png"
          alt="twitter"
        />
      </div>
      <h5 className="cursus font_w_font_s1">
        Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
        suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut erat.
      </h5> 


    </div>
  </div> */}


    </TabSection>
  )
}
