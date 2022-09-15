import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { FiArrowRightCircle } from "react-icons/fi";

const LatestJob = () => {
  const jobs = [
    {
      jobRole: "Driver",
      location: "Paris, France",
      company: "cattle house",
      salary: "5000",
      post: "2 hours ago",
      logo: "https://i.ibb.co/ZgNJRFg/Vector.png",
    },
    {
      jobRole: "Accountent",
      location: " Paris, France",
      company: "Food hub",
      salary: "15000",
      post: "2 hours ago",
      logo: "https://i.ibb.co/dgD8rKH/Vector-1.png",
    },
    {
      jobRole: "Accountent",
      location: "Paris, France",
      company: "cattle house",
      salary: "5000",
      post: "2 hours ago",
      logo: "https://i.ibb.co/qynLKg9/Vector-4.png",
    },
    {
      jobRole: "Gate Man",
      location: "Paris, France",
      company: "cattle house",
      salary: "7000",
      post: "2 hours ago",
      logo: "https://i.ibb.co/ZgNJRFg/Vector.png",
    },
    {
      jobRole: "Accountent",
      location: "Paris, France",
      company: "cattle house",
      salary: "5000",
      post: "2 hours ago",
      logo: "https://i.ibb.co/qynLKg9/Vector-4.png",
    },
    {
      jobRole: "Accountent",
      location: "Paris, France",
      company: "cattle house",
      salary: "5000",
      post: "2 hours ago",
      logo: "https://i.ibb.co/ZgNJRFg/Vector.png",
    },
    {
      jobRole: "Accountent",
      location: "Paris, France",
      company: "cattle house",
      salary: "5000",
      post: "2 hours ago",
      logo: "https://i.ibb.co/ZgNJRFg/Vector.png",
    },
  ];
  console.log(jobs);
  return (
    <div className="py-10 lg:px-36 px-10  lg:py-24">
      <h2 className="text-2xl font-bold text-center text-[#4F4F4F]">
        Latest Job
      </h2>
      {/* job filter div */}
      <div className="flex justify-end gap-8 my-12">
        <div className="flex items-center gap-2">
          <label htmlFor="part-time">Part time</label>
          <input type="checkbox" name="part-time" id="part-time" />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="full-time">Full time</label>
          <input type="checkbox" name="full-time" id="full-time" />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="remote">Remote</label>
          <input type="checkbox" name="remote" id="remote" />
        </div>
      </div>

      {/* latest job table */}
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm divide-y-2 divide-gray-200">
          <thead className="bg-[#4B4B4B] h-[85px] text-white">
            <tr>
              <th class="px-4 py-2 font-medium text-left whitespace-nowrap">
                Job Role
              </th>
              <th class="px-4 py-2 font-medium text-left whitespace-nowrap">
                Company
              </th>
              <th class="px-4 py-2 font-medium text-left whitespace-nowrap">
                Salary
              </th>
              <th class="px-4 py-2 font-medium text-left whitespace-nowrap">
                Post
              </th>
              <th class="px-4 py-2 font-medium text-left whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>

          <tbody class="divide-y-2 divide-[#4F4F4FA6]">
            {jobs?.map((job) => (
              <SingleJob job={job} />
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex items-center gap-3 w-fit mx-auto mt-10">
        <button className="bg-black border border-black hover:text-white px-3 py-1 text-sm text-white rounded-md">
          1
        </button>
        <button className="border border-black hover:bg-black hover:text-white transition duration-700 ease-in-out px-3 py-1 text-sm rounded-md">
          2
        </button>
        <button className="border border-black hover:bg-black hover:text-white transition duration-700 ease-in-out px-3 py-1 text-sm rounded-md">
          3
        </button>
        <button className="border border-black hover:bg-black hover:text-white transition duration-700 ease-in-out px-3 py-1 text-sm rounded-md">
          4
        </button>
        <button className="text-2xl ml-8">
          <FiArrowRightCircle />
        </button>
      </div>
    </div>
  );
};

export default LatestJob;
