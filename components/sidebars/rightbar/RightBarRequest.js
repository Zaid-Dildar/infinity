import Link from "next/link";
import { useState } from "react";

const RightBarRequest = (props) => {
  const [added, setAdded] = useState(false);
  const addFriendHandler = async () => {
    const response = await fetch("../../api/friends/add", {
      method: "POST",
      body: JSON.stringify({
        userId: props.userId,
        userDocId: props.userDocId,
        friendId: props.friendId,
        friendDocId: props.friendDocId,
        notificationDocId: props.notificationDocId,
        // action: "add",
      }),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    });
    const data = await response.json();
    setAdded(data.added);
    if (data.added) {
      alert("Friend added successfully!");
    }
    if (data.error) {
      alert("Something went wrong!");
    }
    console.log(data);
    await delDoc();
    setAdded(true);
  };

  const delDoc = async () => {
    const response = await fetch(`../../api/notifications`, {
      method: "DELETE",
      body: JSON.stringify({
        notificationData: {
          userDocId: props.userDocId,
          notificatoinDocId: props.notificationDocId,
        },
      }),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  if (added) {
    props.onAdd();
  }

  return (
    <li>
      <Link href="#">
        <div
          className={`p-1 ${
            !props.bottom && "border-b border-gray-500"
          } flex overflow-y-auto bg-sidebar card dark:bg-gray-800 rounded-xl ${
            !props.bottom ? "rounded-b-none" : "rounded-t-none"
          } hover:bg-gray-200 dark:hover:bg-gray-700`}
        >
          <img
            src={props.profilePic}
            className="my-auto mx-1 w-12 h-8 rounded-xl"
          ></img>
          <div className=" leading-4 mt-2">
            <h3 className="inline text-xs font-semibold">
              {props.name}
              <span className="text-gray-600 font-normal ">
                {" "}
                wants to be friends.
              </span>
            </h3>
            <button
              onClick={addFriendHandler}
              className="mt-1 float-right inline px-5 py-1 rounded-xl text-xs font-bold text-white bg-gradient-to-b from-black to-red-700 hover:to-red-900"
            >
              Add
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RightBarRequest;
