import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Impact from "../Components/imapcts"
function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />{/* home */}
      <Impact />{/* home */}
      <BookAppointment />{/* home */}
      <About />{/* yolo */}
      <Info />{/* what we do */}
      
      <Doctors />{/* stats */}
     
      
      <Reviews />{/* home */}
      
      <Footer />{/* home */}
    </div>
  );
}

export default Home;
