import React from "react";
import avatar1 from "../../assets/images/avatar/Avatar1.png";
import avatar2 from "../../assets/images/avatar/Avatar2.png";
import avatar3 from "../../assets/images/avatar/Avatar3.png";

const GetInTouch = () => {
  return (
    <div className="bg-[#D4D4D8] p-12 rounded-md lg:mx-36 mx-10 my-20">
      {/* avatars */}
      <div className="flex justify-center">
        <img src={avatar1} alt="" />
        <img className="-mx-4 -mt-3" src={avatar2} alt="" />
        <img src={avatar3} alt="" />
      </div>
      <h1 className="text-[20px] font-semibold mb-2 mt-5 text-center">
        Still have question
      </h1>
      <p className="text-[#667085] text-center">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>
      <button className="px-8 py-2 rounded-md bg-black  text-white hover:bg-gray-900 mt-10 block w-fit mx-auto">
        Get in touch
      </button>
    </div>
  );
};

export default GetInTouch;
