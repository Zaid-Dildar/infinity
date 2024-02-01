"use client";

import { Fragment, useEffect, useState } from "react";
import Post from "../post/Post";
import PostForm from "./PostForm";
import { Spinner } from "flowbite-react";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [gettingPosts, setGettingPosts] = useState(false);

  const getData = async () => {
    setGettingPosts(true);
    const response = await fetch(`../../api/newsfeed`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setPosts(data.postsData);
      setGettingPosts(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <div className="font-bold text-3xl lg:ml-8 mb-6 py-4 border-b-4 border-gray-500">
        Add a Post
      </div>
      <PostForm onSubmit={getData} />
      <div className="font-bold text-3xl lg:ml-8 mb-6 py-4 border-b-4 border-gray-500">
        Newsfeed
      </div>
      {gettingPosts && (
        <div className="flex justify-center mb-5">
          <div className="text-center">
            <Spinner size="lg" />
          </div>
          <p className="pl-3 text-lg mt-1 text-gray-800">Fetching Posts!</p>
        </div>
      )}
      {posts.map((post) => {
        return (
          <Post
            key={post.postId}
            id={post.postId}
            authorId={post.authorId}
            profilePicture={post.profilePicture}
            email={post.email}
            imageUrl={post.imageUrl}
            caption={post.caption}
            isImage={post.isImage}
          />
        );
      })}
    </Fragment>
  );
};

export default NewsFeed;
