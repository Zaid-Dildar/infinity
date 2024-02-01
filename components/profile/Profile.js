"use client";

import { Fragment } from "react";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";

const Profile = () => {
  const [storedData, setStoredData] = useState({
    lastName: "",
    birth: "",
    city: "",
    contact: "",
    country: "",
    coverPhoto: "",
    email: "",
    firstName: "",
    id: "",
    profession: "",
    profilePic: "",
  });

  const [posts, setPosts] = useState([]);
  const [gettingPosts, setGettingPosts] = useState(false);
  const getData = async () => {
    setGettingPosts(true);
    const response = await fetch(
      `../../api/profile?userId=${storedData.docId}`
    );
    if (response.ok) {
      const data = await response.json();
      setPosts(data.postsData);
      setGettingPosts(false);

      console.log(data);
    }
    console.log(response);
  };
  useEffect(() => {
    setStoredData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  useEffect(() => {
    console.log(storedData);
    if (storedData.id !== "") {
      getData();
    }
  }, [storedData]);

  const date = new Date(storedData.birth);
  return (
    <Fragment>
      <div
        style={{ backgroundImage: `url(${storedData.coverPhoto})` }}
        className="h-52 w-full mx-2 flex rounded-3xl flex-col-reverse bg-cover bg-center bg-background bg-no-repeat mb-6 "
      >
        <div className="flex w-sm lg:w-96 h-32 ml-12 mb-2 rounded-xl bg-gradient-to-b from-background/30 to-red-900/60 to-30%">
          <img
            src={storedData.profilePic}
            className="h-full rounded-xl border-4 border-red-900/80"
          />
          <div className="flex flex-col ml-3">
            <p className="text-xl font-semibold text-white mb-2 mt-1">
              {`${storedData.firstName} ${storedData.lastName}`}
            </p>
            <p className="text-xs font-normal text-white mb-1">
              {storedData.email}
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
              {`${storedData.city}, ${storedData.country}`}
            </p>
            <p className="text-xs font-normal text-white mb-1">
              {storedData.profession}
            </p>
          </div>
        </div>
      </div>
      <div className="font-bold text-3xl ml-8 my-6 py-4 border-y-4 border-gray-500">
        Timeline
      </div>
      {gettingPosts && (
        <div className="flex justify-center mb-5">
          <div className="text-center">
            <Spinner size="lg" />
          </div>
          <p className="pl-3 text-lg mt-1 text-gray-800">
            Fetching your Posts!
          </p>
        </div>
      )}
      {posts.map((post, index) => {
        return (
          <Post
            key={post.postId}
            id={post.postId}
            profilePicture={post.profilePicture}
            email={post.email}
            imageUrl={post.imageUrl}
            caption={post.caption}
            isImage={post.isImage}
          />
        );
      })}
      {posts.length === 0 && !gettingPosts && (
        <div>
          <p className="text-center text-lg font-semibold">
            You haven't made any posts yet.
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
