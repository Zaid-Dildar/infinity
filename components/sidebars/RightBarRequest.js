import Link from "next/link";

const RightBarRequest = () => {
  return (
    <li>
      <Link href="#">
        <div className="p-1 border-b border-gray-500 flex overflow-y-auto bg-sidebar card dark:bg-gray-800 rounded-xl rounded-b-none hover:bg-gray-200 dark:hover:bg-gray-700">
          <img
            src="Rectangle 2.png"
            className="mx-1 w-13 h-13 rounded-xl"
          ></img>
          <div>
            <div>
              <h3 className="text-xs font-semibold">
                Mike Wallace
                <span className="text-gray-600 font-normal">
                  {" "}
                  wants to be friends with you.
                </span>
              </h3>
            </div>
            <div className="flex justify-around">
              <button className="px-5 py-1 rounded-xl text-xs font-bold text-white bg-gradient-to-b from-black to-red-700 hover:to-red-900">
                Add
              </button>
              <button className="px-3 py-1 rounded-xl border border-gray-500 text-xs font-bold hover:bg-gray-500">
                Ignore
              </button>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RightBarRequest;
