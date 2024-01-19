"use client";

import { FileInput, Label, TextInput } from "flowbite-react";
import { Fragment, useState } from "react";
import { Alert } from "flowbite-react";
import { useContext } from "react";
import UserContext from "@/store/user-context";

const PostForm = () => {
  const userCtx = useContext(UserContext);

  const [postAdded, setPostAdded] = useState(false);
  const postHandler = async (event) => {
    event.preventDefault();
    const addPost = async () => {
      const response = await fetch(`../../api/newsfeed`, {
        method: "POST",
        body: JSON.stringify({
          postData: {
            email: userCtx.email,
            profilePicture: userCtx.profilePic,
            authorId: userCtx.id,
            caption: "New Post",
            likes: "5",
            comments: "2",
            imageUrl:
              "https://res.cloudinary.com/dmx66oic1/image/upload/v1705569707/Infinity/Rectangle_15_r6dot0.png",
          },
        }),
        headers: {
          "CONTENT-TYPE": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    };
    await addPost();
    setPostAdded(true);
    setTimeout(() => {
      setPostAdded(false);
    }, 3000);
  };

  return (
    <Fragment>
      {postAdded && (
        <Alert className="rounded-3xl lg:ml-8 mb-6 p-4" color="info">
          <span className="font-medium">Post added Successfully !</span>
        </Alert>
      )}

      <form className="flex flex-col bg-gray-100 rounded-3xl lg:ml-8 mb-6 p-4">
        <div id="fileUpload" className="max-w-screen">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload Image" />
          </div>
          <FileInput id="file" />
        </div>
        <div>
          <div className="my-2 block">
            <Label htmlFor="caption" value="Caption" />
          </div>
          <TextInput
            id="caption"
            type="text"
            placeholder="Add a caption for your post."
            required
          />
        </div>
        <button
          className="w-28 h-10 mt-4 mx-auto bg-gradient-to-b from-black to-red-700 rounded-3xl hover:to-red-800"
          onClick={postHandler}
        >
          <p className="text-center text-white font-semibold text-2xl leading-normal">
            Post
          </p>
        </button>
      </form>
    </Fragment>
  );
};

export default PostForm;
