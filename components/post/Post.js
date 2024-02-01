"use client";

import { Fragment, useState, useEffect } from "react";
import Comments from "./Comments";
import HeartIcon from "./HeartIcon";
import CommentsIcon from "./CommentsIcon";
import VideoBackground from "./VideoBackground";

const Post = (props) => {
  const [userData, setUserData] = useState({ id: "" });

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  // const [clicked, setClicked] = useState(false);
  // const [likes, setLikes] = useState(props.likes);

  const [showComments, setShowComments] = useState(false);
  const [added, setAdded] = useState(0);

  const addCommentHandler = () => {
    setAdded((prevAdded) => prevAdded + 1);
  };
  // const likeHandler = () => {
  //   setClicked((prevClicked) => !prevClicked);
  // };

  // useEffect(() => {
  //   if (clicked) {
  //     setLikes((prevLikes) => prevLikes + 1);
  //     console.log("likes:", likes);
  //   } else {
  //     setLikes(props.likes);
  //     console.log("o-likes:", likes);
  //   }
  // }, [clicked]);
  const showCommentsHandler = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };
  const imageUrl = props.imageUrl;
  // useEffect(() => {
  // return async () => {
  //   console.log(likes);
  //   console.log(props.likes);
  //   console.log("Unmounting");
  //   if (props.comments !== added || props.likes !== likes) {
  //     const response = await fetch(`../../api/postUpdated`, {
  //       method: "POST",
  //       body: JSON.stringify({
  //         postId: props.id,
  //         likes: likes,
  //         comments: added,
  //       }),
  //       headers: {
  //         "CONTENT-TYPE": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   }
  // };
  // }, []);

  return (
    <Fragment>
      <div className=" mx-8 mt-6 mb-15 lg:mx-20">
        {!props.isImage && (
          <div
            className={`flex w-lg min-h-48 lg:min-h-72 rounded-3xl bg-cover bg-center bg-background bg-no-repeat mb-0 `}
          >
            <VideoBackground
              imageUrl={props.imageUrl}
              caption={props.caption}
            />
          </div>
        )}
        {props.isImage && (
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`flex w-lg min-h-48 lg:min-h-72 rounded-3xl bg-cover bg-center bg-background bg-no-repeat mb-0 `}
          >
            <div className="flex w-full mt-auto lg:w-96 h-8 mr-1 ml-12 rounded-3xl bg-gradient-to-b from-background/30 to-red-900/80 to-30%">
              <p className="my-auto ml-3 text-white font-semibold">
                {props.caption}
              </p>
            </div>
          </div>
        )}
        <div className="flex justify-between mt-1">
          <div className="flex">
            <img
              src={props.profilePicture}
              className="w-8 h-8 rounded-xl"
            ></img>
            <p className="my-1 ml-2 text-gray-600 text-md text-base font-normal">
              {props.email}
            </p>
          </div>
          <div className="flex">
            <button className="mr-2 pr-1">
              <HeartIcon postId={props.id} />
            </button>
            <button onClick={showCommentsHandler}>
              <CommentsIcon postId={props.id} added={added} />
            </button>
          </div>
        </div>
        {showComments && (
          <Comments onAddComment={addCommentHandler} postId={props.id} />
        )}
      </div>
    </Fragment>
  );
};

export default Post;
