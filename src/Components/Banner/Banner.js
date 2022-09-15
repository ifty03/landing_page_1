import React from "react";
import bannerImg from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#F5F5F5] flex lg:px-36 px-10 py-10 lg:py-20 gap-20  items-center">
      <div className="lg:w-[95%] ">
        <h1 className="lg:text-[45px] text-[30px] font-bold">
          Find a job easily and quickly. Reliable. Trust and Secure{" "}
        </h1>
        <p className="lg:py-14 py-8">
          You have more than{" "}
          <span className="text-orange-500 text-2xl">1400</span> jobs waiting
          for you!
        </p>
        <form>
          <div class="relative max-w-lg">
            <label class="sr-only" for="email">
              {" "}
              Email{" "}
            </label>

            <input
              class="w-full p-4 pr-32 text-sm font-medium bg-gray-100  rounded-lg border border-gray-300"
              id="email"
              type="email"
              placeholder="john@doe.com"
            />

            <button
              class="absolute px-10 py-3 text-sm font-medium text-white bg-gray-700 rounded-lg top-1/2 right-1 -translate-y-1/2 transition hover:bg-gray-800"
              type="button"
            >
              Join with us
            </button>
          </div>
        </form>
        <div className="flex items-center gap-5 lg:pt-14 pt-8">
          <h1 className="lg:text-4xl text-2xl font-bold ">1M+</h1>
          <div>
            <p>Trusted</p>
            <p>employee</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="lg:w-[100%] md:w-[80%]">
          <img
            style={{
              boxShadow: "-36px 47px 0px 0px rgba(54,54,54,1)",
              webkitBoxShadow: "-36px 47px 0px 0px rgba(54,54,54,1)",
              mozBoxShadow: "-36px 47px 0px 0px rgba(54,54,54,1)",
            }}
            className="-mt-10 rounded-lg "
            src={bannerImg}
            alt="banner img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
