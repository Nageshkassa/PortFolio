import React from 'react'
import Slider from "react-slick";
import TabSection from "../TabSection";
import { useGlobalContext } from '../context';
const Testimonials = ({activeTab}) => {
  const { data } =useGlobalContext();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
  
    <TabSection id="testimonials" title="testimonials" subTitle="Trusted By Hundred Clients" isActive={activeTab === "testimonials"}>
   <h3 class="passionate font_w_font_s1">Aliquam aenean quis massa sagittis quis. Aliquam metus
                        vel curabitur est bibendum scelerisque urna semper.
    </h3>

    


    <div className="testimonials_card">

      <Slider {...settings}>
      {data.user.testimonials.map((item, index) => (

  <div>
    <div className="">
      <div className="img_text">
        <img
          className="client_img"
          src={item.image.url}
          alt="testimonial_img"
          style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px', 
          }}
        />

        <div>
          <h4 className="client_name font_w_font_s">{item.name}</h4>
          <p className="client_roll font_w_font_s1">{item.position}</p>
        </div>
      </div>
      <img className="collan" src="../assets/images/collan.png" alt="collan" />
    </div>
    <div className="rating_main">
      <img src="../assets/images/rating.png" alt="rating" />
    </div>
    <h3 className="placerat font_w_font_s1">
     {item.review}
    </h3>
  </div>
      ))}
  
      </Slider>
</div>


 </TabSection>
  )
}

export default  Testimonials;
