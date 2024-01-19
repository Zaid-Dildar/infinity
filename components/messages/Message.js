import { Fragment } from "react";

const Message = () => {
  return (
    <Fragment>
      <div className="flex w-full h-30 lg:h-20 m-2 p-2 border-b-gray-700 border-b-2 rounded-xl rounded-b-none hover:bg-gray-200 dark:hover:bg-gray-700">
        <div className="inline">
          <img src="Profile.png" className="h-16 rounded-xl"></img>
        </div>
        <div className="inline">
          <text className="block text-lg font-bold ml-3">Mike Wallace</text>
          <text className="block text-md text-gray-700 ml-3">
            What about the meeting tommorrow???
          </text>
        </div>
        <div className="inline text-sm text-gray-700 ml-auto mt-4">
          today 12:22
        </div>
      </div>
    </Fragment>
  );
};

export default Message;
