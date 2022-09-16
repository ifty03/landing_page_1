import React from "react";
import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import LatestJob from "../../Components/LatestJob/LatestJob";
import Navbar from "../../Components/Navbar/Navbar";
import Reviews from "../../Components/Reviews/Reviews";
import Stats from "../../Components/Stats/Stats";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <LatestJob />
      <Faq />
      <GetInTouch />
      <Stats />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
