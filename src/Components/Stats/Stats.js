import React from "react";
import coinbase from "../../assets/images/stats/coinebase.png";
import spotify from "../../assets/images/stats/spotify.png";
import slack from "../../assets/images/stats/slack.png";
import dropbox_logo from "../../assets/images/stats/dropbox_logo.png";
import dropbox_text from "../../assets/images/stats/dropbox_text.png";
import webflow from "../../assets/images/stats/webflow.png";
import zoom from "../../assets/images/stats/zoom.png";

const Stats = () => {
  return (
    <div className="py-10 px-10">
      <p className="text-[#667085] text-sm text-center">
        Trusted by 4,000+ companies
      </p>
      <div className="flex flex-wrap gap-8 md:gap-10 lg:gap-0 justify-around items-center mt-8">
        <img className="w-20 md:w-fit" src={coinbase} alt="" />
        <img className="w-20 md:w-fit" src={spotify} alt="" />
        <img className="w-16 md:w-fit" src={slack} alt="" />
        <div className="flex gap-2">
          <img className="w-6 md:w-fit" src={dropbox_logo} alt="" />
          <img className="w-16 md:w-fit" src={dropbox_text} alt="" />
        </div>
        <img className="w-20 md:w-fit" src={webflow} alt="" />
        <img className="w-16 md:w-fit" src={zoom} alt="" />
      </div>
    </div>
  );
};

export default Stats;
