import React from "react";
import { TiLocationOutline } from "react-icons/ti";

const SingleJob = ({ job }) => {
  const { jobRole, logo, company, salary, post, location } = job;
  return (
    <tr className="h-28">
      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
        <div className="flex gap-5 items-center">
          <img className="w-10" src={logo} alt="" />
          <div>
            <p>{jobRole}</p>
            <small className="text-[#4F4F4FA6] flex items-center gap-2">
              <TiLocationOutline className="text-lg" /> {location}
            </small>
          </div>
        </div>
      </td>
      <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{company}</td>
      <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{salary}</td>
      <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{post}</td>
      <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
        <button className="px-8 py-2 rounded-md border border-black hover:bg-black hover:text-white transition duration-700 ease-in-out">
          Apply Now
        </button>
      </td>
    </tr>
  );
};

export default SingleJob;
