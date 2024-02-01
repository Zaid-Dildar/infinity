"use client";

import { FileInput, Label, TextInput } from "flowbite-react";
import { Fragment, useState, useEffect, useRef } from "react";
import { Alert, Spinner } from "flowbite-react";

const PostForm = (props) => {
  const [userData, setUserData] = useState();
  const [posting, setPosting] = useState(false);
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const captionValue = useRef();
  // const postImage = useRef();

  const [postAdded, setPostAdded] = useState(false);
  const [postImage, setPostImage] = useState(null);

  let caption = "";

  const handleFileChange = (event) => {
    console.log(event.target.value);
    if (event.target.value !== "") {
      if (event.target.files[0].type.includes("video")) {
        const video = document.createElement("video");
        video.src = URL.createObjectURL(event.target.files[0]);
        video.addEventListener("loadedmetadata", () => {
          const durationInSeconds = video.duration;

          // You can set your desired maximum duration here
          const maxDuration = 60; // 60 seconds

          if (durationInSeconds > maxDuration) {
            alert("Selected video exceeds the maximum allowed duration.");
            // Clear the file input if needed
            event.target.value = "";
          }
        });
      }
    }
    setPostImage(event.target.files[0]);
  };

  const postHandler = async (event) => {
    event.preventDefault();
    if (captionValue.current.value === "") {
      alert("Must include a caption!");
      return;
    }
    if (postImage === null) {
      alert("Must select an image or video!");
      return;
    }
    setPosting(true);
    const formData = new FormData();
    formData.append("file", postImage);

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
            imageUrl: imageUrl,
            isImage: postImage.type.includes("image"),
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
    setPosting(false);
    setPostAdded(true);
    setTimeout(() => {
      setPostAdded(false);
    }, 3000);
    props.onSubmit();
    captionValue.current.value = "";
    event.target.fileInput.value = "";
  };

  return (
    <Fragment>
      {postAdded && (
        <Alert className="rounded-3xl lg:ml-8 mb-6 p-4" color="info">
          <span className="font-medium">Post added Successfully !</span>
        </Alert>
      )}

      <form
        onSubmit={postHandler}
        className="flex flex-col bg-gray-100 rounded-3xl lg:ml-8 mb-6 p-4"
      >
        {posting && (
          <div className="flex justify-center">
            <div className="text-center">
              <Spinner size="lg" />
            </div>
            <p className="pl-3 text-lg mt-1 text-gray-800">Adding your Post.</p>
          </div>
        )}
        <div id="fileUpload" className="max-w-screen">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload Image" />
          </div>
          <FileInput
            name="fileInput"
            onChange={handleFileChange}
            id="file"
            helperText="JPEG, JPG, PNG, MP4(Max 60 seconds)"
            accept=".jpeg,.jpg,.mp4,.png"
          />
        </div>
        <div>
          <div className="my-2 block">
            <Label htmlFor="caption" value="Caption" />
          </div>
          <TextInput
            ref={captionValue}
            onChange={() => {
              console.log(captionValue.current.value);
            }}
            id="caption"
            type="text"
            placeholder="Add a caption for your post."
          />
        </div>
        <button className="w-28 h-10 mt-4 mx-auto bg-gradient-to-b from-black to-red-700 rounded-3xl hover:to-red-800">
          <p className="text-center text-white font-semibold text-2xl leading-normal">
            Post
          </p>
        </button>
      </form>
    </Fragment>
  );
};

export default PostForm;
