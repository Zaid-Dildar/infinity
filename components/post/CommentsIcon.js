import React, { Fragment, useEffect, useState } from "react";

const CommentsIcon = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`../../api/comments?postId=${props.postId}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data.commentsData);
        console.log(data);
        console.log(props.postId);
      }
    };
    getData();
  }, []);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={clicked ? "gray" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={handleClick}
      >
        <path d="M21.95 2H2v17h5v4l4-4h5.35l4 4V6c0-1.05-.37-2-1.05-2z" />
      </svg>
      <p className="text-xs lg:text-base my-auto font-semibold">
        {comments.length + props.added}
      </p>
    </Fragment>
  );
};

export default CommentsIcon;
