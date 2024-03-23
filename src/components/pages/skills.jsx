

import React from 'react'
import TabSection from "../TabSection";
import CircleChart from './CircleChart';

import { useGlobalContext } from '../context';



const Skills = ({activeTab}) => {
    
  const { data } =useGlobalContext();


    const skills = [
        { name: "English", percentage: 90 },
        { name: "French", percentage: 75 },
        { name: "Spanish", percentage: 60 },
        { name: "German", percentage: 40 }
      ];
        
  return (
    <TabSection id="skill" title="my skills" subTitle="Crafting Stories through Design and Imagination" isActive={activeTab === "skills"}>
<h3 className="passionate font_w_font_s1 ">
    Nec ligula facilisis congue sed montes odio arcu. Sed
    suspendisse lectus pulvinar tempor ultrices quis tellus diam sollicitudin.
    </h3>
    
  <h3 className="lan_skill font_w_font_s">Language Skills</h3>


  {/* <div className="skill_circle_main">
    <div>
      <div className="circlechart" data-percentage={90} />
      <h2 className="subject">English</h2>
    </div>
    <div>
      <div className="circlechart" data-percentage={75} />
      <h2 className="subject">French</h2>
    </div>
    <div>
      <div className="circlechart" data-percentage={60} />
      <h2 className="subject">Spanish</h2>
    </div>
    <div>
      <div className="circlechart" data-percentage={40} />
      <h2 className="subject">German</h2>
    </div>
  </div> */}


  <div className="skill_circle_main">
      {skills.map((skill, index) => (
        <div key={index}>
          <CircleChart percentage={skill.percentage} />
          <h2 className="subject">{skill.name}</h2>
        </div>
      ))}
    </div>



    <h3 className="lan_skill hard_skill font_w_font_s  ">Hard Skills</h3>

<div className="skill_circle_main">
{data.user.skills.map((skill, index) => (
  <div className="skill_circle  ">
    <div className="hard_skill_group">
      <img className="figma" src={skill.image.url} alt="figma"  style={{
    borderRadius: '50%',
    width: '50px', // Adjust the width as needed
    height: '50px', // Adjust the height as needed
  }}/>
      <h4 className="hard_skill_counter font_w_font_s1">{skill.percentage}%</h4>
    </div>
    <h4 className="subject font_w_font_s1">{skill.name}</h4>

  </div>
    ))}
  </div>


 </TabSection>
  )
}

export default Skills;
