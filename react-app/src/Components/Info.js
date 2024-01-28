import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import tabl from "../Assets/tab.png";
import SolutionStep from "./SolutionStep";

function Info() {
  return (
    <div className="info-section" id="yolomodel">
      
      <div className="info-title-content">
        <h3 className="info-title">
          <span>YOLO v8</span>
        </h3>
        <p className="info-description">
        Leveraging YOLOv8, our robotic platform swiftly identifies aquatic plastic, enhancing real-time object detection. This advanced model streamlines autonomous trash collection, efficiently navigating water environments. YOLOv8's rapid processing enables instantaneous decision-making, optimizing the cleanup process. Our commitment to cutting-edge solutions is exemplified through the integration of this technology. The adoption of YOLOv8 underscores our dedication to addressing environmental challenges and making a tangible impact on water protection.</p>      </div>
        <div className="info-title-content">
        <h5 className="info-title">
          <span>Why YOLO</span>
        </h5>
        &nbsp;
        <SolutionStep
          title="      YOLO enables real-time object detection with a single forward pass through the network.
          "
        /><SolutionStep
        title="The model's unified framework efficiently combines object localization and classification in one step."
      /><SolutionStep
      title="YOLO considers global context, capturing relationships between objects in an image."
    />
    <SolutionStep
      title="It is scale-invariant, capable of detecting objects at different scales without additional processing."
    />
    <SolutionStep
      title="YOLO's direct regression approach simplifies training and provides accurate object localization."
    />
          
          </div>
    </div>
  );
}

export default Info;
