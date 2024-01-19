"use client";

import { Fragment, useEffect, useState } from "react";
import Post from "../post/Post";
import Comments from "../post/Comments";
import PostForm from "./PostForm";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    const response = await fetch(`../../api/newsfeed`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setPosts(data.postsData);
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
      <PostForm />
      <div className="font-bold text-3xl lg:ml-8 mb-6 py-4 border-b-4 border-gray-500">
        Newsfeed
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

export default NewsFeed;
