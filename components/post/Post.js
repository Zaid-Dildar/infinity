"use client";

import { Fragment, useState } from "react";
import Comments from "./Comments";

const Post = (props) => {
  const [showComments, setShowComments] = useState(false);

  const showCommentsHandler = () => {
    setShowComments(true);
  };
  console.log(props.id);
  const imageUrl = props.imageUrl;

  return (
    <Fragment>
      <div className="mx-8 mt-6 lg:mx-20">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={`flex w-lg min-h-48 lg:min-h-72 rounded-3xl bg-cover bg-center bg-background bg-no-repeat mb-6 `}
        >
          <div className="flex w-full mt-auto lg:w-96 h-8 ml-12 rounded-xl bg-gradient-to-b from-background/30 to-red-900/80 to-30%">
            <p className="my-auto ml-3 text-white font-semibold">
              {props.caption}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <div className="flex">
            <img
              src={props.profilePicture}
              className="w-8 h-8 rounded-xl"
            ></img>
            <p className="lg:my-1 ml-2 text-gray-600 text-md text-base font-normal">
              {props.email}
            </p>
          </div>
          <div className="flex">
            <button className="mr-2">
              <img
                className="inline hover:bg-red-400 hover:ring ring-red-800 rounded-xl"
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/like--v1.png"
                alt="like--v1"
              />{" "}
              <p className="text-xs lg:text-base my-auto font-semibold">
                {props.likes}
              </p>
            </button>
            <button onClick={showCommentsHandler}>
              <img
                className="ml-2 inline hover:bg-gray-400 hover:ring ring-gray-800 rounded-xl"
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/comments--v1.png"
                alt="comments--v1"
              />{" "}
              <p className="text-xs lg:text-base my-auto font-semibold">
                {props.comments}
              </p>
            </button>
          </div>
        </div>
      </div>
      {showComments && <Comments postId={props.id} />}
    </Fragment>
  );
};

export default Post;
