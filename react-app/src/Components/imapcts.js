import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";
{/* services */}
function Info() {
  return (
    <div className="info-section" id="necess">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Why it is needed?</span>
        </h3>
        <p className="info-description">
        </p>
      </div>
           
      <div className="info-cards-content">
        <InformationCard
          title="ENVIRONMENT"
          description="Plastic pollution in the world's oceans is one of the biggest environmental issues of our time, impacting nearly 900 marine species.

          "
          
        />

        <InformationCard
          title="ECONOMY"
          description="Plastic pollution in the oceans costs up to $19 billion annually, impacting economies through 
          cleanup expenses, tourism losses, and damage to fishing industries, emphasizing the 
          financial toll of plastic waste.
          "
        
        />
        <InformationCard
          title="HEALTH"
          description="Plastic pollution does not only impact sea life, it also carries toxic pollutants into the food chain – a food chain including us humans."
        
        />
        
      </div>
    </div>
  );
}

export default Info;
