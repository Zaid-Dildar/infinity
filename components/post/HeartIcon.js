import React, { Fragment } from "react";

const HeartIcon = (props) => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 26"
        fill={props.added ? "red" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ cursor: "pointer" }}
      >
        {/* Heart shape */}
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <p className="text-xs lg:text-base my-auto font-semibold">
        {props.added ? props.likes + 1 : props.likes}
      </p>
    </Fragment>
  );
};

export default HeartIcon;
