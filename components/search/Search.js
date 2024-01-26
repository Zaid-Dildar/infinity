"use client";

import User from "@/components/user/User";
import { Fragment, useRef, useState, useEffect } from "react";
import { Alert } from "flowbite-react";

const Search = () => {
  const [searched, setSearched] = useState(false);
  const [users, setUsers] = useState([]);
  const [requested, setRequested] = useState(false);
  const [userData, setUserData] = useState();

  const addHandler = async (id) => {
    const response = await fetch(`../../api/notifications`, {
      method: "POST",
      body: JSON.stringify({
        notificationData: {
          name: userData.firstName,
          profilePicture: userData.profilePic,
          request: true,
          id: userData.id,
        },
        userId: id,
      }),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setRequested(true);
    setTimeout(() => {
      setRequested(false);
    }, 3000);
  };

  const searchValue = useRef();
  const getData = async () => {
    const response = await fetch(
      `../../api/search?searchValue=${searchValue.current.value}`
    );
    if (response.ok) {
      const data = await response.json();
      setUsers(data.usersData);
      console.log(data);
    }
    console.log(response);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    setSearched(true);
    console.log(searchValue.current.value);
    getData();
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  return (
    <Fragment>
      <form className="ml-3 w-md px-3 py-3 text-MD flex flex-row-reverse font-semibold mt-8 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
        <button
          onClick={searchHandler}
          className="ml-3 max-lg:hover:ring-4 max-lg:ring-red-500 max-lg:ring-offset-4 max-lg:ring-offset-sidebar hover:bg-red-400 rounded-3xl"
        >
          <svg
            className="lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 45 45"
            fill="none"
            className="max-lg:hidden"
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
          ref={searchValue}
          className="bg-transparent placeholder:text-gray-500 w-full px-2"
          placeholder="Search users . . ."
        ></input>
      </form>
      {!searched && (
        <div className="font-bold text-3xl mt-6 ml-3 mb-6 py-4 border-y-4 border-gray-500">
          Enter first name, last name or email address of user to search for
          him.
        </div>
      )}
      {searched && (
        <Fragment>
          <div className="font-bold text-3xl mt-6 ml-3 mb-6 py-4 border-y-4 border-gray-500">
            Search Results
          </div>
          {requested && (
            <Alert className="rounded-3xl lg:ml-8 mb-6 p-4" color="info">
              <span className="font-medium">Request sent successfully!</span>
            </Alert>
          )}
          {users.map((user, i) => {
            return (
              <User
                key={i}
                email={user.email}
                onClick={addHandler}
                id={user.docId}
                profession={user.profession}
                birth={user.birth}
                profilePic={user.profilePic}
                name={`${user.firstName} ${user.lastName}`}
                location={`${user.city}, ${user.country}`}
              />
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Search;
