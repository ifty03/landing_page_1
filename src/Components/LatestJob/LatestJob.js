import React from "react";

const LatestJob = () => {
  return (
    <div className="py-14 lg:px-36 px-10  lg:py-20">
      <h2 className="text-2xl font-bold">Latest Job</h2>
      {/* job filter div */}
      <div>
        <div className="flex items-center gap-2">
          <label htmlFor="part-time">Part time</label>
          <input type="checkbox" name="part-time" id="part-time" />
        </div>
      </div>
    </div>
  );
};

export default LatestJob;
