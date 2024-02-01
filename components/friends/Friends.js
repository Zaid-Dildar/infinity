"use client";

import { Fragment, useState, useEffect } from "react";
import { Alert } from "flowbite-react";
import User from "../user/User";

const Friends = () => {
  //   const [userData, setUserData] = useState();
  //   console.log(userData);

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
    docId: "",
    profession: "",
    profilePic: "",
  });
  const [friends, setFriends] = useState([]);
  const [removed, setRemoved] = useState(false);

  const removeHandler = () => {
    setRemoved(true);
    setTimeout(() => {
      setRemoved(false);
    }, 3000);
  };

  const getUserData = async () => {
    // setUserData(JSON.parse(localStorage.getItem("userData")));
    // while (!userData) {
    //   setTimeout(() => {}, 3000);
    // }
    const response = await fetch(`../../api/friends?userId=${userData.docId}`);
    if (response.ok) {
      const data = await response.json();
      setFriends(data.usersData);
      console.log(data);
    }
    console.log(response);
  };
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  useEffect(() => {
    if (userData.docId !== "") {
      getUserData();
    }
  }, [userData]);
  return (
    <Fragment>
      {removed && (
        <Alert className="rounded-3xl lg:ml-8 mb-6 p-4" color="failure">
          <span className="font-medium">Friend removed successfully!</span>
        </Alert>
      )}
      {friends !== undefined &&
        friends.map((friend, i) => {
          return (
            <User
              key={i}
              add={true}
              email={friend.email}
              onClick={removeHandler}
              profession={friend.profession}
              birth={friend.birth}
              profilePic={friend.profilePic}
              name={`${friend.firstName} ${friend.lastName}`}
              location={`${friend.city}, ${friend.country}`}
            />
          );
        })}
      {friends === undefined && (
        <div>
          <p className="text-center text-lg font-semibold">
            You don't have any friends yet.
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default Friends;
