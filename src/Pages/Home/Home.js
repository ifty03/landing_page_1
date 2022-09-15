import React from "react";
import Banner from "../../Components/Banner/Banner";
import LatestJob from "../../Components/LatestJob/LatestJob";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <LatestJob />
    </div>
  );
};

export default Home;
