import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="lg:px-24 px-10 pb-10">
      <div className="md:flex justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold">
            Join us to grow 💪audience fast in carrier opurtunity
          </h2>
        </div>
        <div>
          <button className="px-10 py-3 mt-4 md:mt-0 rounded-full bg-black text-white hover:bg-gray-900">
            Download Free App
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-gray-300 w-full md:my-10 my-7"></div>
      {/* all link */}
      <div className="grid grid-cols-2 lg:grid-cols-12 md:gap-10">
        <div className="col-span-5">
          <h2 className="text-lg font-bold">About Ferm Job</h2>
          <p className="text-sm my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>

          {/* social media icon */}
          <div className="flex items-center gap-4 text-lg mb-5 md:mb-0">
            <AiOutlineTwitter />
            <FaFacebookF />
            <IoLogoInstagram />
            <AiFillGithub />
          </div>
        </div>
        <div className="col-span-7 flex justify-around text-sm">
          <div className="flex flex-col gap-2">
            <p className="mb-8 font-semibold">Company</p>
            <p>About</p>
            <p>Features </p>
            <p>Works </p>
            <p>Career </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-8 font-semibold">Help</p>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-8 font-semibold">Resources</p>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
