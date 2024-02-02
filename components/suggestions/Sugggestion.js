import { Fragment } from "react";
import Link from "next/link";

const Suggestion = (props) => {
  const addHandler = async () => {
    const response = await fetch(`../../api/notifications`, {
      method: "POST",
      body: JSON.stringify({
        notificationData: {
          name: props.senderFirstName,
          profilePicture: props.senderProfilePic,
          senderDocId: props.userDocId,
          request: true,
          id: props.userId,
        },
        userId: props.friendDocId,
      }),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    alert("Request sent!");
  };

  return (
    <Fragment>
      <li>
        <Link href="#">
          <div
            className={`p-1 ${
              !props.bottom && "border-b border-gray-500"
            } rounded-xl ${!props.bottom ? "rounded-b-none" : "rounded-t-none"}
            flex overflow-y-auto bg-sidebar card dark:bg-gray-800 hover:bg-background dark:hover:bg-gray-700`}
          >
            <img
              src={props.profilePic}
              className="mx-1 w-10 my-auto h-16 rounded-xl"
            ></img>
            <div>
              <div>
                <h3 className="text-xs font-semibold">
                  {props.name}
                  <div className="text-gray-600 text-xs font-normal">
                    {props.email}
                  </div>
                  <span className="text-gray-600 text-xs font-normal">
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <path
                        d="M6 6.07007C5.66848 6.07007 5.35054 5.93837 5.11612 5.70395C4.8817 5.46953 4.75 5.15159 4.75 4.82007C4.75 4.48855 4.8817 4.17061 5.11612 3.93618C5.35054 3.70176 5.66848 3.57007 6 3.57007C6.33152 3.57007 6.64946 3.70176 6.88388 3.93618C7.11831 4.17061 7.25 4.48855 7.25 4.82007C7.25 4.98422 7.21767 5.14677 7.15485 5.29842C7.09203 5.45008 6.99996 5.58788 6.88388 5.70395C6.76781 5.82002 6.63001 5.9121 6.47836 5.97492C6.3267 6.03774 6.16415 6.07007 6 6.07007ZM6 1.32007C5.07174 1.32007 4.1815 1.68882 3.52513 2.34519C2.86875 3.00157 2.5 3.89181 2.5 4.82007C2.5 7.44507 6 11.3201 6 11.3201C6 11.3201 9.5 7.44507 9.5 4.82007C9.5 3.89181 9.13125 3.00157 8.47487 2.34519C7.8185 1.68882 6.92826 1.32007 6 1.32007Z"
                        fill="#5F6B88"
                      />
                    </svg>
                    {props.location}
                  </span>
                </h3>
              </div>
              <div className="flex justify-around">
                <button
                  onClick={addHandler}
                  className="px-5 py-1 rounded-xl text-xs font-bold text-white bg-gradient-to-b from-black to-red-700 hover:to-red-900"
                >
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
    </Fragment>
  );
};

export default Suggestion;
