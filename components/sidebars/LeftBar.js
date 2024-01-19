"use client";
import Link from "next/link";
import { Fragment } from "react";
import { useState } from "react";
import Menu from "./Menu";
import Suggestion from "../suggestions/Sugggestion";

const LeftBar = () => {
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setShow(false);
  // }, []);

  const sidebarToggleHandler = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <Fragment>
      <button
        onClick={sidebarToggleHandler}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-background focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className={`fixed top-0 pr-2 border-r-4 border-r-gray-600 left-0 z-40 w-64 h-screen transition-transform ${
          !show ? "-translate-x-full" : " "
        } lg:translate-x-0 bg-background`}
        onBlur={sidebarToggleHandler}
        aria-label="Sidebar"
      >
        <Link href="/">
          <div className="flex ml-4 my-8">
            <svg
              className="mt-1.5 h-7 w-12"
              xmlns="http://www.w3.org/2000/svg"
              width="151"
              height="72"
              viewBox="0 0 151 100"
              fill="none"
            >
              <path
                d="M116.46 32.6285C135.119 32.6285 150.271 47.5304 150.271 66.3143C150.271 84.8478 135.119 99.9375 116.46 99.9375C107.381 99.9375 98.9285 96.4312 92.5419 90.1073L75.1355 74.7045L57.4161 90.4204C51.3426 96.4938 42.8273 100 33.811 100C15.1523 100 0 84.8478 0 66.3143C0 47.7809 15.1523 32.6285 33.811 32.6285C42.8273 32.6285 51.3426 36.1349 57.7291 42.5214L75.1355 57.9242L92.855 42.2083C98.9285 36.1349 107.444 32.6285 116.46 32.6285ZM48.8381 81.2789L65.7436 66.3143L49.0886 51.6003C44.8309 47.3426 39.5088 45.1511 33.811 45.1511C22.1024 45.1511 12.5226 54.6057 12.5226 66.3143C12.5226 78.023 22.1024 87.4776 33.811 87.4776C39.5088 87.4776 44.8309 85.2861 48.8381 81.2789ZM101.433 51.3498L84.5275 66.3143L101.183 81.0284C105.44 85.2861 110.825 87.4776 116.46 87.4776C128.169 87.4776 137.749 78.023 137.749 66.3143C137.749 54.6057 128.169 45.1511 116.46 45.1511C110.762 45.1511 105.44 47.3426 101.433 51.3498Z"
                fill="url(#paint0_linear_53_40)"
              />
              <path
                d="M116.46 0C135.119 0 150.271 14.9019 150.271 33.6858C150.271 52.2193 135.119 67.309 116.46 67.309C107.381 67.309 98.9285 63.8027 92.5419 57.4788L75.1355 42.076L57.4161 57.7918C51.3426 63.8653 42.8273 67.3716 33.811 67.3716C15.1523 67.3716 0 52.2193 0 33.6858C0 15.1524 15.1523 0 33.811 0C42.8273 0 51.3426 3.50633 57.7291 9.89286L75.1355 25.2957L92.855 9.57979C98.9285 3.50633 107.444 0 116.46 0ZM48.8381 48.6503L65.7436 33.6858L49.0886 18.9717C44.8309 14.7141 39.5088 12.5226 33.811 12.5226C22.1024 12.5226 12.5226 21.9772 12.5226 33.6858C12.5226 45.3944 22.1024 54.849 33.811 54.849C39.5088 54.849 44.8309 52.6576 48.8381 48.6503ZM101.433 18.7213L84.5275 33.6858L101.183 48.3999C105.44 52.6576 110.825 54.849 116.46 54.849C128.169 54.849 137.749 45.3944 137.749 33.6858C137.749 21.9772 128.169 12.5226 116.46 12.5226C110.762 12.5226 105.44 14.7141 101.433 18.7213Z"
                fill="url(#paint1_linear_53_40)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_53_40"
                  x1="75.1355"
                  y1="32.6285"
                  x2="75.1355"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.9999" stopColor="#D20000" />
                  <stop offset="1" stopColor="#FF0000" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_53_40"
                  x1="75.1355"
                  y1="0"
                  x2="75.1355"
                  y2="67.3716"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.9999" stopColor="#D20000" />
                  <stop offset="1" stopColor="#FF0000" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-3xl font-extrabold leading-normal text-transparent bg-clip-text bg-gradient-to-b from-black to-red-700">
              Infinity
            </h1>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex ml-4 px-3 py-4 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
            <img
              src="Rectangle 2.png"
              className="ml-1 w-13 h-13 rounded-xl"
            ></img>
            <div className="ml-3">
              <h3 className="text-lg font-semibold">Mike Wallace</h3>
              <p className="text-gray-600 text-base font-normal">
                tk@gmail.com
              </p>
            </div>
          </div>
        </Link>
        <Menu />
      </aside>
      {show && (
        <div
          onClick={sidebarToggleHandler}
          className="lg:hidden w-full min-h-screen backdrop-blur-[2px] fixed top-0 z-30 bg-black/10"
        >
          sdgs
        </div>
      )}
    </Fragment>
  );
};

export default LeftBar;
