import Link from "next/link";
import { Fragment, useState } from "react";

const User = (props) => {
  const date = new Date(props.birth);
  const [removed, setRemoved] = useState(false);

  const removeHandler = () => {
    setRemoved(true);
    setTimeout(() => {
      setRemoved(false);
    }, 3000);
  };

  return (
    <Fragment>
      <Link href="#">
        <div className="flex w-full h-32 lg:h-20 m-2 p-1 lg:p-2 bg-sidebar rounded-xl  hover:bg-gray-200 dark:hover:bg-gray-700">
          <div className="flex my-auto">
            <img
              src={props.profilePic}
              className="my-auto w-14 h-14 rounded-xl"
            ></img>
            <div className="ml-3">
              <p className="block text-lg font-bold">{props.name}</p>
              <p className="block text-sm font-semibold text-gray-700">
                {props.email}
              </p>
              <p className="block text-sm font-semibold text-gray-700">
                {props.profession}
              </p>
            </div>
            <div className="max-lg:hidden ml-5 lg:ml-10 my-auto">
              <p className="block text-sm font-semibold text-gray-700 mb-1">
                {date.toLocaleDateString()}
              </p>
              <p className="block text-sm font-semibold text-gray-700 mb-0.5">
                Male
              </p>
              <p className="block text-sm font-semibold text-gray-700">
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M6 6.07007C5.66848 6.07007 5.35054 5.93837 5.11612 5.70395C4.8817 5.46953 4.75 5.15159 4.75 4.82007C4.75 4.48855 4.8817 4.17061 5.11612 3.93618C5.35054 3.70176 5.66848 3.57007 6 3.57007C6.33152 3.57007 6.64946 3.70176 6.88388 3.93618C7.11831 4.17061 7.25 4.48855 7.25 4.82007C7.25 4.98422 7.21767 5.14677 7.15485 5.29842C7.09203 5.45008 6.99996 5.58788 6.88388 5.70395C6.76781 5.82002 6.63001 5.9121 6.47836 5.97492C6.3267 6.03774 6.16415 6.07007 6 6.07007ZM6 1.32007C5.07174 1.32007 4.1815 1.68882 3.52513 2.34519C2.86875 3.00157 2.5 3.89181 2.5 4.82007C2.5 7.44507 6 11.3201 6 11.3201C6 11.3201 9.5 7.44507 9.5 4.82007C9.5 3.89181 9.13125 3.00157 8.47487 2.34519C7.8185 1.68882 6.92826 1.32007 6 1.32007Z"
                    fill="#5F6B88"
                  />
                </svg>
                {props.location}
              </p>
            </div>
          </div>
          <div className="ml-auto lg:my-auto flex lg:h-10 lg:w-72 max-lg:flex-col">
            <button
              onClick={props.onClick.bind(null, props.id)}
              className="max-md:max-w-20 block lg:block my-auto p-2 rounded-3xl bg-gradient-to-b from-black to-red-700 hover:to-red-900 ml-4 lg:ml-auto mr-2"
            >
              <p className="text-center text-white font-semibold text-xs lg:text-sm leading-normal">
                {!props.add !== true ? "Remove Friend" : "Add Friend"}
              </p>
            </button>
            {/* {props.add && (
              <button className="inline lg:block lg:p-2 p-1 bg-gray-500 rounded-3xl hover:bg-gray-800 ml-4 max-lg:mt-2 lg:ml-auto mr-2">
                <p className="text-center text-white font-semibold text-xs lg:text-sm leading-normal">
                  View Profile
                </p>
              </button>
            )} */}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default User;
