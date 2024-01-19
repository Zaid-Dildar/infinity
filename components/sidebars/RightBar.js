import { Fragment } from "react";
import Link from "next/link";
import Message from "../messages/Message";
import RightBarMessage from "./RightBarMessage";
import RightBarRequest from "./RightBarRequest";
import RightBarNotification from "./RightBarNotifiction";

const RightBar = () => {
  return (
    <Fragment>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="max-lg:hidden inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-background focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        className="max-lg:hidden  fixed top-0 border-l-4 border-gray-500 overflow-y-scroll pr-4 overscroll-auto right-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <form className="ml-8 px-3 py-3 text-MD flex flex-row-reverse font-semibold mt-8 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
          <button className="ml-3 hover:bg-red-400 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 45 45"
              fill="none"
            >
              <g clipPath="url(#clip0_42_1447)">
                <path
                  d="M22.5 0C34.9264 0 45 10.0736 45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0ZM20.9564 9.75038C14.9364 9.75038 10.058 14.6316 10.058 20.6516C10.058 26.6715 14.9364 31.55 20.9564 31.55C22.7782 31.55 24.4952 31.1043 26.0046 30.314C26.0031 30.321 26.0007 30.3291 25.9992 30.336L30.9155 35.2496L34.942 31.2204L30.2014 26.4771C30.1936 26.4735 30.1845 26.4722 30.1767 26.4688C31.2412 24.7853 31.8576 22.7905 31.8576 20.6516C31.8576 14.6316 26.9764 9.75038 20.9564 9.75038ZM20.9564 14.5926C24.3019 14.5926 27.0154 17.3061 27.0154 20.6516C27.0154 23.997 24.3019 26.7078 20.9564 26.7078C17.6109 26.7078 14.9002 23.997 14.9002 20.6516C14.9002 17.3061 17.6109 14.5926 20.9564 14.5926Z"
                  fill="url(#paint0_linear_42_1447)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_42_1447"
                  x1="22.5"
                  y1="0"
                  x2="22.5"
                  y2="45"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stopColor="#FF0000" />
                </linearGradient>
                <clipPath id="clip0_42_1447">
                  <rect
                    width="45"
                    height="45"
                    fill="white"
                    transform="matrix(-1 0 0 1 45 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <input
            className="bg-transparent placeholder:text-gray-500 w-40 px-2"
            placeholder="Search Friends . . ."
          ></input>
        </form>
        <div className="ml-8 px-3 py-4 mt-8 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
          <div className="font-bold text-xl mb-3 border-gray-700 border-b-2 pb-2">
            Notifications
            <span className="text-xs float-right underline text-gray-600 mt-2">
              {"See All ->"}{" "}
            </span>
          </div>
          <ul className="space-y-2 font-medium">
            <RightBarRequest />
            <RightBarNotification />
            <RightBarRequest />
            <RightBarNotification />
          </ul>
        </div>
        <div className="ml-8 px-3 pb-0 py-4 mt-8 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
          <div className="font-bold text-xl mb-3 border-gray-700 border-b-2 pb-2">
            Messages
            <span className="text-xs float-right underline text-gray-600 mt-2">
              {"See All ->"}{" "}
            </span>
          </div>
          <ul className="space-y-2 font-medium mb-2">
            <RightBarMessage />
            <RightBarMessage />
            <RightBarMessage />
          </ul>
        </div>{" "}
      </aside>
    </Fragment>
  );
};

export default RightBar;
