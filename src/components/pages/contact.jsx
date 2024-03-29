import React from 'react'
import { useGlobalContext } from '../context';
import TabSection from "../TabSection";
function Contact({activeTab}) {
  const { data } =useGlobalContext();
  
  return (
  
    <TabSection id="contact" title="contact us" subTitle="Let's Work Together!" isActive={activeTab === "contact"}>
 <>
  <div className="container1">
    <div className="form form__1">
      <label htmlFor="name" className="form__label">
        What’s Your Name*
      </label>
      <input
        type="text"
        className="form__input"
        placeholder=""
        id="name"
        required=""
        autoComplete="off"
      />
    </div>
    <div className="form form__2">
      <label htmlFor="email" className="form__label">
        Your Email*
      </label>
      <input
        type="email"
        className="form__input"
        placeholder=""
        id="email"
        required=""
        autoComplete="off"
      />
    </div>
    <div className="form form__1">
      <label htmlFor="name" className="form__label">
        Your Phone Number*
      </label>
      <input
        type="text"
        className="form__input"
        placeholder=""
        id="phone"
        required=""
        autoComplete="off"
      />
    </div>
    <div className="form form__1">
      <label htmlFor="name" className="form__label">
        Subject*
      </label>
      <input
        type="text"
        className="form__input"
        placeholder=""
        id="subject"
        required=""
        autoComplete="off"
      />
    </div>
  </div>
  <div className="btn_message">
    <div className="form form__3">
      <label htmlFor="name" className="form__label">
        Tell us about your project*
      </label>
      <input
        type="text"
        className="form__input message2"
        placeholder=""
        id="project"
        required=""
      />
    </div>
    <div className="send_message_form">
      <button className="download_cv form__btn">
        <i className="fa-regular fa-paper-plane material-icons" />
        Send Message
      </button>
    </div>
  </div>
  <div>
    <h3 className="moswa touch">Get in touch!</h3>
    <div className="contact_number_main">
      <img src="../assets/images/contact.svg" alt="contact" />
      <h4 className="contact_number">
        <a href="tel:+12345678899">{data.user.about.phoneNumber}</a>
      </h4>
    </div>
    <div className="contact_number_main">
      <img src="../assets/images/gmail.svg" alt="gmail" />
      <h4 className="contact_number">
        <a href="mailto:hello@olivia.com">{data.user.email}</a>
      </h4>
    </div>
    <div className="contact_number_main">
      <img src="../assets/images/map.svg" alt="map" />
      <h4 className="contact_number">
        <a href="">
        {data.user.about.address}
        </a>
      </h4>
    </div>
  </div>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11661.278162829134!2d-76.16113884753138!3d43.0557465765357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3add89232d3%3A0x516c4febad79a023!2sNear%20Northeast%2C%20Syracuse%2C%20NY%2013203%2C%20USA!5e0!3m2!1sen!2sin!4v1704092010021!5m2!1sen!2sin"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <h5 className="copyright">
    © Olivia 2024. All rights reserved by
    <a
      className="krishna"
      href="https://themeforest.net/user/the_krishna"
      target="_blank"
    >
      The_Krishna.
    </a>
  </h5>
</>

 </TabSection>
  )
}

export default Contact;
