"use client";

import { FileInput, Label, TextInput } from "flowbite-react";
import { Fragment, useState, useEffect, useRef } from "react";
import { Alert } from "flowbite-react";

const PostForm = (props) => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const captionValue = useRef();
  const postImage = useRef();

  const [postAdded, setPostAdded] = useState(false);
  // const [postImage, setPostImage] = useState(null);

  let caption = "";

  // const handleFileChange = (event) => {
  //   setPostImage(event.target.files[0]);
  // };

  const postHandler = async (event) => {
    event.preventDefault();
    console.log(postImage);
    const formData = new FormData();
    formData.append("file", postImage.current.files[0]);

    const response = await fetch(`../../api/newsfeed/image`, {
      method: "POST",
      body: formData,
    });
    const imageData = await response.json();
    const imageUrl = imageData.url;
    const addPost = async () => {
      const response = await fetch(`../../api/newsfeed`, {
        method: "POST",
        body: JSON.stringify({
          postData: {
            email: userData.email,
            profilePicture: userData.profilePic,
            authorId: userData.docId,
            caption: captionValue.current.value,
            likes: 0,
            comments: 0,
            imageUrl: imageUrl,
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
    props.onSubmit();
    captionValue.current.value = "";
    postImage.current = null;
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
          <FileInput ref={postImage} id="file" />
        </div>
        <div>
          <div className="my-2 block">
            <Label htmlFor="caption" value="Caption" />
          </div>
          <TextInput
            ref={captionValue}
            id="caption"
            type="text"
            placeholder="Add a caption for your post."
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
