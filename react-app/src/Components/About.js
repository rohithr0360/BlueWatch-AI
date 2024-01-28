import React from "react";
import Doctor from "../Assets/sea_image.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
{/* yolo */}
function About() {
  return (
    <div className="about-section" id="solution">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Solution</span>
        </h3>
        <p className="about-description">
        Our ocean cleanup solution employs YOLOv8, an advanced object detection algorithm, which can be integrated into autonomous robots equipped with state-of-the-art sensors. This technology enables real-time identification and removal of plastic debris on the ocean surface and in its depths. With swift and precise cleanup capabilities, the system ensures efficiency, scalability, and minimal impact on marine life, offering a high-tech solution to combat plastic pollution and contribute to the preservation of our aquatic ecosystems
        </p>

        <h4 className="about-text-title">Features</h4>

        <SolutionStep
          title="Advanced Deep-Sea Detection"
          description="YOLO Model Expertise: Our proprietary YOLO model stands as a pinnacle in deep-sea plastic detection, enabling real-time identification with unparalleled accuracy."
        />

        <SolutionStep
          title="Adapdability"
          description="can adpat to any kind of techinical equipments and work wel"
        />

        <SolutionStep
          title="Safety"
          description="Can go to the places where the cleaning is dangerous for humans like deep sea beds whre the pressure is very high"
        />
      </div>
    </div>
  );
}

export default About;
