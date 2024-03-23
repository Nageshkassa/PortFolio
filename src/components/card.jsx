import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../components/context';

const Card = () => {
  const { data } = useGlobalContext();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Your interval logic here
    }, 600 * 3);
    
    if (data && data.user) {
      const { about } = data.user;
      setUser(about); 
      console.log("fetched data from contextAPI is ", user && user.name);
    }

    return () => clearInterval(interval);
  }, [data]);

  return (
    <section className="card_section" id="card_main">
      <div className="olivia_bio" id="oliva_details">
        <div className="imgBox">
          <img
            className="olivia-img"
            src={user ? user.avatar.url : '../assets/images/olivia-img.jpg'}
            alt="olivia-img"
          />
        </div>
        <div className="bio_contain">
          <h1 className="olivia_moswa">{user ? user.name : ''}</h1>
          <h2 className="designer font_w_font_s1 overflow-hidden">{user ? user.title : ''}</h2>
          <button className="download_cv hire_me font_w_font_s">
            <i className="ri-at-line" /> Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card;
