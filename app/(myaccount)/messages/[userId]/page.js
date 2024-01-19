import Message from "@/components/messages/Message";
import { Fragment } from "react";

const Chat = () => {
  return (
    <Fragment>
      <div className="h-40 w-1/2 lg:w-1/3 mb-10 lg:h-52 mx-auto">
        <img
          src="https://wallpapercave.com/wp/SKwS17W.jpg"
          className="rounded-3xl"
        ></img>
        <div className="text-center mt-3 border-gray-700 border-b-4 p-2">
          <text className="text-2xl font-semibold text-black mb-2 mt-1">
            Mike Wallace
          </text>
        </div>
      </div>
      <Message />
      <Message />
      <Message />
      <Message />
    </Fragment>
  );
};

export default Chat;
