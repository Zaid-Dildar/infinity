import { Fragment } from "react";

const Comments = (props) => {
  return (
    <Fragment>
      <div className="flex max-md:w-full lg:w-lg h-10 m-2 lg:mx-16 p-2 rounded-3xl border-gray-700 border">
        <img src={props.profilePic} className="block rounded-xl" />
        <p className="block text-xs lg:text-lg font-bold ml-3 max-md:mt-1">
          {props.userName + ": "}
        </p>
        <p className="block text-xs lg:text-lg text-gray-700 ml-2 max-md:mt-1">
          {props.text}
        </p>
      </div>
    </Fragment>
  );
};

export default Comments;
