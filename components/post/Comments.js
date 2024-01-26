import { Fragment, useState, useEffect, useRef } from "react";
import Comment from "./Comment";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [userData, setUserData] = useState({
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
  const commentText = useRef();

  const getData = async () => {
    const response = await fetch(`../../api/comments?postId=${props.postId}`);
    if (response.ok) {
      const data = await response.json();
      setComments(data.commentsData);
      console.log(data);
      console.log(props.postId);
    }
  };
  const addCommentHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`../../api/comments`, {
      method: "POST",
      body: JSON.stringify({
        commentData: {
          name: userData.firstName,
          postId: props.postId,
          profilePicture: userData.profilePic,
          text: commentText.current.value,
        },
      }),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    commentText.current.value = "";
    props.onAddComment();
    getData();
  };
  useEffect(() => {
    getData();
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  return (
    <Fragment>
      <div className="font-bold text-xl mb-3 text-center pb-2">Comments</div>
      {comments.map((comment, i) => {
        return (
          <Comment
            key={i}
            text={comment.text}
            userName={comment.name}
            profilePic={comment.profilePicture}
          />
        );
      })}
      <div className="flex max-md:w-full h-10  m-2 lg:mx-16 p-2 rounded-3xl border-gray-700 border">
        <form className="flex max-md:w-full lg:min-w-full">
          <img src={userData.profilePic} className="block rounded-xl" />

          <input
            ref={commentText}
            type="email"
            id="email"
            className="ml-4 inline bg-background border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add a comment ..."
            required
          />
          <button
            className="ml-auto border border-gray-500 rounded-3xl h-6 w-16 pb-1 hover:bg-gray-400"
            onClick={addCommentHandler}
          >
            <p className="mx-2 my-auto text-gray-700 text-bold text-center">
              Add
            </p>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Comments;
