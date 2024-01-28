import React from "react";
import Doctor from "../Assets/image_big.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section" id="probl">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

     <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Troubled waters   </span>
        </h3>
        <p className="ba-description">
        In today's world, our water bodies face an unprecedented threat: pollution, particularly from plastic debris. This crisis not only harms aquatic life and ecosystems but also poses risks to human health and the global economy. With millions of tons of plastic entering our water bodies every year, traditional cleanup methods alone are insufficient to address the scale of the problem. That's where our project comes in. By harnessing the power of AI to detect and map plastic debris, we offer a novel and efficient solution to aid in water cleanup efforts. Our project is not just about technology; it's about safeguarding our planet's most precious resource and ensuring a sustainable future for generations to come.
        </p>

        {/*<p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Deep sea plastic cleaning
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Can be integrated with automated like robots
  </p>*/}

        
      </div>
    </div>
  );
}

export default BookAppointment;
