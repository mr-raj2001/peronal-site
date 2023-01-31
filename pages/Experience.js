import React from 'react';
import {VerticalTimeLine, VerticalTimeLineElement,} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";


function Experience() {
  return (
    <div className='experience'><VerticalTimeLine  lineColor="#3e497a">
        <VerticalTimeLineElement className="vertical-timeline-element--education" date="2017-2018" iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}> <h3 className="vertical-timeline-element-title">
          Saint Lawrence School,Angul,Odisha
        </h3>
        <p> Primary School Diploma</p></VerticalTimeLineElement></VerticalTimeLine>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
          >
          <h3 className="vertical-timeline-element-title">
            Lovely Proffesional University
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
          </VerticalTimelineElement>

        
        
        
        
        </div>
  )
}

export default Experience