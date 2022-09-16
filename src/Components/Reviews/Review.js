import React from "react";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="lg:grid grid-cols-2 lg:mx-36 mx-10 my-10 md:my-20 gap-7">
      {/* user 1 review */}
      <div className="flex gap-7 py-4 md:py-10 items-center">
        <img className="w-32 md:w-48" src={user1} alt="" />
        <div>
          {/* stars */}
          <div className="flex text-orange-400 items-center gap-2 text-14px md:text-[20px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>

          {/* description */}
          <div>
            <p className=" my-2 md:my-5 text-[11px] md:text-[15px]">
              "We love Landingfolio! Our designers were using it for their
              projects, so we already knew what kind of design they want."
            </p>
          </div>
          <div className="flex gap-4 md:gap-10 items-center text-[10px] md:text-sm">
            <p className="font-semibold">Jenny Wilson</p>
            <p>Grower.io</p>
          </div>
        </div>
      </div>

      {/* user 2 review */}
      <div className="flex gap-7 py-4 md:py-10 items-center">
        <img className="w-32 md:w-48" src={user2} alt="" />
        <div>
          {/* stars */}
          <div className="flex text-orange-400 items-center gap-2 text-14px md:text-[20px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>

          {/* description */}
          <div>
            <p className=" my-2 md:my-5 text-[11px] md:text-[15px]">
              "We love Landingfolio! Our designers were using it for their
              projects, so we already knew what kind of design they want."
            </p>
          </div>
          <div className="flex gap-4 md:gap-10 items-center text-[10px] md:text-sm">
            <p className="font-semibold">Devon Lane</p>
            <p>DLDesign.co</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
