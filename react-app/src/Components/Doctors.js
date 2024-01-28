import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/sujith.jpg";
import profile2 from "../Assets/sujith.jpg";
import profile3 from "../Assets/ganesh.jpg";
import profile4 from "../Assets/ganesh.jpg";
import "../Styles/Doctors.css";
import flask from "../Assets/flask.png";
import ec2 from "../Assets/ec2.png";
import react_js from "../Assets/react.png";
import yolo from "../Assets/yolo.png";



function Doctors() {
  return (
    <div className="doctor-section" id="Techstacks">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Tech Stacks used</span>
        </h3>
&nbsp;
        <p className="dt-description">
    
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={yolo}
          name="Ultralytics YOLOv8"
          title="To develop a AI model for object detection"
        />
        <DoctorCard
          img={ec2}
          name="AWS EC2       "
          title="To host the AI model in the Cloud to use it anywhere"
        />
        <DoctorCard
          img={react_js}
          name="React JS"
          title="To develop a responsive frontend webpage"
        />
        <DoctorCard
          img={flask}
          name="Flask"
          title="Python framework to deploy the ML model in WebPage"
        />
      </div>
    </div>
  );
}

export default Doctors;
