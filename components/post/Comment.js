import { Fragment } from "react";

const Comments = (props) => {
  return (
    <Fragment>
      <div className="flex w-lg h-10 m-2 lg:mx-16 p-2 rounded-3xl border-gray-700 border">
        <p className="block text-lg font-bold ml-3">{props.userName + ": "}</p>
        <p className="block text-md text-gray-700 mt-1  ml-3">{props.text}</p>
      </div>
    </Fragment>
  );
};

export default Comments;
