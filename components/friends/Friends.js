"use client";

import { Fragment, useContext, useState, useEffect } from "react";
import UserContext from "@/store/user-context";
import User from "../user/User";

const Friends = () => {
  const userCtx = useContext(UserContext);

  const [friends, setFriends] = useState([]);
  const getData = async () => {
    const response = await fetch(`../../api/friends?userId=${userCtx.id}`);
    if (response.ok) {
      const data = await response.json();
      setFriends(data.postsData);
      console.log(data);
    }
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      {friends.map((friend) => {
        return (
          <User
            email={friend.email}
            profession={friend.profession}
            birth={friend.birth}
            profilePic={friend.profilePic}
            name={`${friend.firstName} ${friend.lastName}`}
            location={`${friend.city}, ${friend.country}`}
          />
        );
      })}
    </Fragment>
  );
};

export default Friends;
