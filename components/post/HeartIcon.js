import React, { Fragment, useState, useEffect } from "react";

const HeartIcon = (props) => {
  const [likes, setLikes] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [userData, setUserData] = useState({ id: "" });
  const [docId, setDocId] = useState();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  useEffect(() => {
    getLikes();
  }, [userData]);
  const getLikes = async () => {
    const response = await fetch(`../../api/likes?postId=${props.postId}`);
    if (response.ok) {
      const data = await response.json();
      setLikes(data.likesData);
      setDocId(data.docId);
      if (data.likesData.includes(userData.id)) {
        console.log("LIKED");
        setClicked(true);
      }
      console.log(data);
      console.log(props.postId);
    }
  };

  const likeHandler = async () => {
    setClicked((prevClicked) => !prevClicked);
    if (!clicked) {
      const response = await fetch(`../../api/likes`, {
        method: "POST",
        body: JSON.stringify({
          likesData: {
            postId: props.postId,
            userId: userData.id,
            docId: docId,
            action: "add",
          },
        }),
        headers: {
          "CONTENT-TYPE": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } else {
      const response = await fetch(`../../api/likes`, {
        method: "POST",
        body: JSON.stringify({
          likesData: {
            postId: props.postId,
            userId: userData.id,
            docId: docId,
            action: "remove",
          },
        }),
        headers: {
          "CONTENT-TYPE": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    }
    getLikes();
  };

  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 26"
        fill={clicked ? "red" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ cursor: "pointer" }}
        onClick={likeHandler}
      >
        {/* Heart shape */}
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <p className="text-xs lg:text-base my-auto font-semibold">
        {likes.length}
      </p>
    </Fragment>
  );
};

export default HeartIcon;
