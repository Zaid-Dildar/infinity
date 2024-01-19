import Link from "next/link";

const RightBarMessage = () => {
  return (
    <li>
      <Link href="#">
        <div className="p-1 border-b border-gray-500 flex overflow-y-auto bg-sidebar card dark:bg-gray-800 rounded-xl rounded-b-none hover:bg-gray-200 dark:hover:bg-gray-700">
          <img src="Rectangle 2.png" className="ml-1 w-8 h-8 rounded-xl"></img>
          <div className="ml-1 my-auto">
            <p className="text-xs font-semibold">
              Mike Wallace
              <span className="block text-gray-600 font-normal">
                What about the meeting . .
              </span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RightBarMessage;
