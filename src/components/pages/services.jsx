import React from 'react'
import TabSection from "../TabSection";

import { useGlobalContext } from '../context';
function Services({activeTab}) {
  const { data } =useGlobalContext();



  return (
    <TabSection id="services" title="my services" subTitle="Bringing your vision to life with Precision and Passion" isActive={activeTab ==="services"}>
   
   <h3 className="passionate font_w_font_s1">
    Faucibus nulla elit fringilla duis nunc. Enim urna nisl odio sed sapien.
    Aliquam turpis sit justo commodo elit in at. Elementum neque iaculis est in
    proin. Aliquam turpis sed diam a quis volutpat risus.
  </h3>



  <div className="services_box_main">

  {data.user.services.map((item, index) => (
  <div key={index} className="service_box">
    <img className="services_icon" src={item.image.url} alt="ux" />
    <h3 className="ui_ux font_w_font_s">{item.name}</h3>
    <h4 className="ui_sub_text font_w_font_s1">{item.desc}</h4>
  </div>
))}

    
{/* 
    <div className="service_box">
      <img
        className="services_icon"
        src="../assets/images/android.png"
        alt="android"
      />
      <h3 className="ui_ux font_w_font_s">App Development</h3>
      <h4 className="ui_sub_text font_w_font_s1">
        Semper donec bibendum amet consectetur enim sem imperdiet faucibus
        augue. Risus lorem pellentesque lorem viverra.
      </h4>
    </div>
    <div className="service_box">
      <img className="services_icon" src="../assets/images/web.png" alt="web" />
      <h3 className="ui_ux font_w_font_s">Web Development</h3>
      <h4 className="ui_sub_text font_w_font_s1">
        Vestibulum et egestas nisi elementum. Est quis mi id aenean at lorem
        scelerisque eget. Et sollicitudin augue sit.
      </h4>
    </div>
    <div className="service_box">
      <img
        className="services_icon"
        src="../assets/images/marketing.png"
        alt="marketing"
      />
      <h3 className="ui_ux font_w_font_s">SEO &amp; Marketing</h3>
      <h4 className="ui_sub_text font_w_font_s1">
        Platea non tristique ultricies mi malesuada amet imperdiet posuere ut.
        Orci pellentesque vehicula iaculis integer donec.
      </h4>
    </div>*/} 
  </div>


  <div className="pricing_group">
<div className="intro_main">
      <h2 className="intro font_w_font_s">pricing</h2>
    </div>
    <h2 className="moswa font_w_font_s">My Pricing Plan</h2>


    <div className="plan_box  ">
      <div className="plan_box_sub">
        <div>
          <h3 className="basic_plain font_w_font_s">Basic Plan</h3>
          <h4 className="per_month font_w_font_s">
            <span className="plan_price">$39</span>/ Per Month
          </h4>
        </div>
        <button
          className="download_cv buy_now font_w_font_s"
          // onClick="window.open('https://themeforest.net/user/the_krishna');"
        >
          <img
            className="shopping_bag"
            src="../assets/images/shopping_bag.png"
            alt="shopping_bag"
          />
          Buy Now
        </button>
      </div>
      
      <h5 className="build font_w_font_s1">
        Have design ready to build? or <span className="help">Need Help ?</span>
      </h5>
      <div className="plan_box_sub2">
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Web Development</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Mobile Development</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Advertising</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev decline font_w_font_s1">Graphic design</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev decline font_w_font_s1">Project management</h3>
        </div>
      </div>
    </div>


    
    <div className="plan_box" id="plan_box">
      <div className="plan_box_sub">
        <div>
          <h3 className="basic_plain font_w_font_s">Ultra Plan</h3>
          <h4 className="per_month font_w_font_s">
            <span className="plan_price">$69</span>/ Per Month
          </h4>
        </div>
        <button
          className="download_cv buy_now font_w_font_s"
          // onClick="window.open('https://themeforest.net/user/the_krishna');"
        >
          <img
            className="shopping_bag"
            src="../assets/images/shopping_bag.png"
            alt="shopping_bag"
          />
          Buy Now
        </button>
      </div>
      <h5 className="build font_w_font_s1">
        Have design ready to build? or <span className="help">Need Help ?</span>
      </h5>
      <div className="plan_box_sub2">
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Web Development</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Mobile Development</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Advertising</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Graphic design</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev decline font_w_font_s1">Project management</h3>
        </div>
      </div>
    </div>
    <div className="plan_box  " id="plan_box2">
      <div className="plan_box_sub">
        <div>
          <h3 className="basic_plain font_w_font_s">Gold Plan</h3>
          <h4 className="per_month font_w_font_s">
            <span className="plan_price">$99</span>/ Per Month
          </h4>
        </div>
        <button
          className="download_cv buy_now font_w_font_s"
          // onClick="window.open('https://themeforest.net/user/the_krishna');"
        >
          <img
            className="shopping_bag"
            src="../assets/images/shopping_bag.png"
            alt="shopping_bag"
          />
          Buy Now
        </button>
      </div>
      <h5 className="build font_w_font_s1">
        Have design ready to build? or <span className="help">Need Help ?</span>
      </h5>
      <div className="plan_box_sub2">
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Web Development</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Mobile Development</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Advertising</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Graphic design</h3>
        </div>
        <div className="web-dev_main">
          <img src="../assets/images/check.png" alt="check" />
          <h3 className="web-dev font_w_font_s1">Project management</h3>
        </div>
      </div>
    </div>
  </div>
</TabSection>
  )
}

export default Services
