import { Fragment } from "react";
import Friends from "@/components/friends/Friends";

const FriendsPage = () => {
  return (
    <Fragment>
      <div className="font-bold text-3xl ml-8 mb-6 py-4 border-b-4 border-gray-500">
        Friends
      </div>
      <Friends />
    </Fragment>
  );
};

export default FriendsPage;
