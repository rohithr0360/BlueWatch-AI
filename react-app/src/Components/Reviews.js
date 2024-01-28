import React, { useState, useEffect } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  let rMessage, rName, rLocation;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // Function to update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
    rMessage = reviewMessage.message;
  };

  // Back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // Go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // useEffect to automatically change the review every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setReview((prevReview) => (prevReview >= reviewsLength ? 0 : prevReview + 1));
      handleReviewsUpdation();
    }, 6000);

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearInterval(timer);
  }, [review, reviewsLength]);

  // List review on visit
  handleReviewsUpdation();

  return (
    <div className="review-section" id="facts">
      <div className="rw-text-content">
        <p className="rw-text-desc">Check some of the facts</p>

        <p className="rw-text-format">
        <span className="rw-text-quote1">''</span>
          <span className="rw-review">{rMessage}</span>
         <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{rName}</p>
            <p className="rw-reviewer-place">{rLocation}</p>
          </div>

          <div className="rw-btns">
            <button className="rw-next-btn" type="button" onClick={backBtnClick}>
              ←
            </button>
            <button className="rw-next-btn" type="button" onClick={frontBtnClick}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
