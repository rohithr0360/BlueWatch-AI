import ocean from "../Assets/ocean.png";



import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const handleTryOurModelClick = () => {
    // Redirect to YouTube
    window.location.href = "http://127.0.0.1:5000/"; // You can replace this URL with the desired YouTube video URL
  };
  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Less plastic , More Life❤️</p>
          <h2 className="text-title">
            Revolutionizing Ocean Cleanup: BlueWatch AI
          </h2>
          <p className="text-descritpion">
          Dive into our demo and witness firsthand how our AI model detects plastic debris both on the surface and deep below. Join us in this educational journey as we explore innovative solutions for a cleaner, healthier marine environment.
like this!
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleTryOurModelClick}
          >
            Try Our AI model
          </button>
          {/*<div className="text-stats">
            <div className="text-stats-container">
              <p>100k+</p>
              <p>fishes dies</p>
            </div>

            <div className="text-stats-container">
              <p>700+</p>
              <p>species indanger</p>
            </div>

            <div className="text-stats-container">
              <p>$10bn+</p>
              <p>loss in economy</p>
            </div>
  </div> */}
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={ocean} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
