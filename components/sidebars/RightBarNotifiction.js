import Link from "next/link";

const RightBarNotification = () => {
  return (
    <li>
      <Link href="#">
        <div className="p-1 border-b border-gray-500 flex overflow-y-auto bg-sidebar card dark:bg-gray-800 rounded-xl rounded-b-none hover:bg-gray-200 dark:hover:bg-gray-700">
          <img src="Rectangle 2.png" className="ml-1 w-6 h-6 rounded-xl"></img>
          <div className="ml-1 my-auto">
            <h3 className="text-xs font-semibold">
              Mike Wallace
              <span className="text-gray-600 font-normal">
                {" "}
                liked your post.
              </span>
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RightBarNotification;
