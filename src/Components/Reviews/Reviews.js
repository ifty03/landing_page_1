import React from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="lg:pt-32 md:pt-24 pt-16 pb-16">
      <p className="text-center text-sm">3940+ Happy Users</p>
      <p className="text-center text-sm">Users</p>
      <h2 className="px-10 text-3xl md:text-4xl text-center font-bold mt-2">
        Don’t just take our words
      </h2>
      <Review />
    </div>
  );
};

export default Reviews;
