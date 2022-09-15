import React from "react";

const Navbar = () => {
  return (
    <header class="bg-[#F5F5F5]">
      <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <h1 className="font-bold text-2xl">AK FARM</h1>
          </div>

          <div class="md:flex md:items-center md:gap-8 lg:gap-32">
            <nav class="hidden  md:block" aria-labelledby="header-navigation">
              <h2 class="sr-only" id="header-navigation">
                Header navigation
              </h2>

              <ul class="flex items-center text-sm lg:gap-10 gap-5">
                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75"
                    href="/"
                  >
                    Jobs
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75"
                    href="/"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75"
                    href="/"
                  >
                    Job Locations
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="sm:gap-4 sm:flex">
                <a
                  class="px-5 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-md"
                  href="/"
                >
                  Contact Us
                </a>

                <div class="hidden sm:flex">
                  <a
                    class="px-5 py-2.5 text-sm font-medium text-white bg-[#363636] rounded-md shadow"
                    href="/"
                  >
                    Post a job
                  </a>
                </div>
              </div>

              <div class="block md:hidden">
                <button class="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
