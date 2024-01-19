import Message from "@/components/messages/Message";
import { Fragment } from "react";

const Messages = () => {
  return (
    <Fragment>
      <div className="font-bold text-3xl ml-8 mb-6 py-4 border-b-4 border-gray-500">
        Messages
      </div>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Fragment>
  );
};

export default Messages;
