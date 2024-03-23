import React from "react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

function Home() {
  const { data } = useGlobalContext();
  const [user, setUser] = useState();

  useEffect(() => {
    if (data) {
      const { about } = data.user;
      setUser(about);
    }
  }, [data]);

  return (
    <div className="all_page" id="page">
      <section className="card_section" id="card_main">
        <div className="right_card_main icetab-content" id="icetab-content">
          <section className="oliva-intro tabcontent tab-active" id="home">
            {/*  */}
            <div className="intro_main">
              <h2 className="intro font_w_font_s">intro</h2>
            </div>
            {user && (
              <>
                <h2 className="moswa font_w_font_s">
                  Say Hi from {user.name}, {user.title}
                </h2>
                <h3 className="passionate font_w_font_s1">{user.subTitle}</h3>
              </>
            )}

            <div className="button_circle_group">
              <div>
                <button
                  className="download_cv font_w_font_s"
                  onClick={() =>
                    window.open("../assets/pdf/olivia_resume.pdf", "_blank")
                  }
                >
                  <i className="ri-download-cloud-2-line" />
                  Download CV
                </button>
              </div>
              <div className="circular_text_main ">
                <a href="/" className="down_arrow_main position-relative">
                  <img
                    className="circular_text"
                    src="../assets/images/circular_text.png"
                    alt="circular_text"
                  />
                  <img
                    className="down_arrow"
                    src="../assets/images/down_arrow.svg"
                    alt="down_arrow"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
