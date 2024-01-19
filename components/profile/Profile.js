"use client";

import { Fragment } from "react";
import Post from "../post/Post";
import { useContext, useState, useEffect } from "react";
import UserContext from "@/store/user-context";

const Profile = () => {
  const userCtx = useContext(UserContext);
  const date = new Date(userCtx.birth);

  const [posts, setPosts] = useState([]);
  const getData = async () => {
    const response = await fetch(`../../api/profile?userId=${userCtx.id}`);
    if (response.ok) {
      const data = await response.json();
      setPosts(data.postsData);
      console.log(data);
    }
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div
        style={{ backgroundImage: `url(${userCtx.coverPhoto})` }}
        className="h-52 w-full mx-2 flex rounded-3xl flex-col-reverse bg-cover bg-center bg-background bg-no-repeat mb-6 "
      >
        <div className="flex w-sm lg:w-96 h-32 ml-12 mb-2 rounded-xl bg-gradient-to-b from-background/30 to-red-900/60 to-30%">
          <img
            src={userCtx.profilePic}
            className="h-full rounded-xl border-4 border-red-900/80"
          />
          <div className="flex flex-col ml-3">
            <p className="text-xl font-semibold text-white mb-2 mt-1">
              {`${userCtx.firstName} ${userCtx.lastName}`}
            </p>
            <p className="text-xs font-normal text-white mb-1">
              {userCtx.email}
            </p>
            <p className="text-xs font-normal text-white mb-1">
              {date.toLocaleDateString()}
            </p>
            <p className="max-lg:hidden text-xs font-normal text-white mb-1">
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 5.75C5.66848 5.75 5.35054 5.6183 5.11612 5.38388C4.8817 5.14946 4.75 4.83152 4.75 4.5C4.75 4.16848 4.8817 3.85054 5.11612 3.61612C5.35054 3.3817 5.66848 3.25 6 3.25C6.33152 3.25 6.64946 3.3817 6.88388 3.61612C7.11831 3.85054 7.25 4.16848 7.25 4.5C7.25 4.66415 7.21767 4.8267 7.15485 4.97835C7.09203 5.13001 6.99996 5.26781 6.88388 5.38388C6.76781 5.49996 6.63001 5.59203 6.47836 5.65485C6.3267 5.71767 6.16415 5.75 6 5.75ZM6 1C5.07174 1 4.1815 1.36875 3.52513 2.02513C2.86875 2.6815 2.5 3.57174 2.5 4.5C2.5 7.125 6 11 6 11C6 11 9.5 7.125 9.5 4.5C9.5 3.57174 9.13125 2.6815 8.47487 2.02513C7.8185 1.36875 6.92826 1 6 1Z"
                  fill="white"
                />
              </svg>
              {`${userCtx.city}, ${userCtx.country}`}
            </p>
            <p className="text-xs font-normal text-white mb-1">
              {userCtx.profession}
            </p>
          </div>
        </div>
      </div>
      <div className="font-bold text-3xl ml-8 my-6 pt-4 border-t-4 border-gray-500">
        Timeline
      </div>
      {posts.map((post, index) => {
        return (
          <Post
            key={post.postId}
            id={post.postId}
            profilePicture={post.profilePicture}
            email={post.email}
            likes={post.likes}
            comments={post.comments}
            imageUrl={post.imageUrl}
            caption={post.caption}
          />
        );
      })}
    </Fragment>
  );
};

export default Profile;
