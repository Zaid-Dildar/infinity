import Link from "next/link";

const RightBarRequest = (props) => {
  const addFriendHandler = async () => {
    const response = await fetch("../../api/friends/add", {
      method: "POST",
      body: JSON.stringify({
        userId: props.userId,
        userdocId: props.userDocId,
        friendId: props.friendId,
        id: props.id,
      }),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

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
