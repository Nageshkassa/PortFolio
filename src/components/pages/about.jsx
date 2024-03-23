import React from "react";
import TabSection from "../TabSection";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
function About({ activeTab }) {
  const { data } = useGlobalContext();
  // const [title,setTitle]=useState("");

  // const user=data.user;
  console.log("fetched data from contextAPI is ", data.user.about.subTitle);

  // useEffect(() => {
  //   if (data && data.user) {

  //   // setTitle(data);
  //     // console.log("about data  is ", );
  //   }

  // }, [data]);

  // console.log("About page is rendering");

  return (
    <TabSection
      id="about"
      title="about"
      subTitle={data.user.about.subTitle}
      isActive={activeTab === "about"}
    >
      <h3 className="passionate font_w_font_s1">
        {data.user.about.description}
      </h3>

      <div className="about_counter">
        <div className="counter">
          <h3 className="counter2 count font_w_font_s" data-count={5}>
            {data.user.about.exp_year}+
          </h3>
          <h3 className="experince font_w_font_s1">YEARS OF EXPERIENCE</h3>
        </div>
        <div className="counter">
          <h3 className="counter2 count font_w_font_s" data-count={160}>
            160+
          </h3>
          <h3 className="experince">PROJECTS COMPLETED ON 15 COUNTRIES</h3>
        </div>
      </div>
    </TabSection>
  );
}

export default About;
