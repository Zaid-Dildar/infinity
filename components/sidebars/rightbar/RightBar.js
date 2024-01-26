"use client";

import { Fragment, useState, useEffect } from "react";
import RightBarRequest from "./RightBarRequest";

const RightBar = () => {
  const [notifications, setNotifications] = useState([]);
  const [storedData, setStoredData] = useState({
    id: "",
  });

  const getData = async () => {
    const response = await fetch(
      `../../api/notifications?userId=${storedData.docId}`
    );
    if (response.ok) {
      const data = await response.json();
      setNotifications(data.notificationsData);
      console.log(data);
    }
    console.log(response);
  };

  useEffect(() => {
    setStoredData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  useEffect(() => {
    console.log(storedData);
    if (storedData.id !== "") {
      getData();
    }
  }, [storedData]);
  return (
    <Fragment>
      <aside
        id="default-sidebar"
        className="max-lg:hidden flex flex-col justify-center fixed top-0 border-l-4 border-gray-500 overflow-y-scroll pr-4 overscroll-auto right-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="ml-8 px-3 py-4 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
          <div className="font-bold text-xl mb-3 border-gray-700 border-b-2 pb-2">
            Friend Requests
          </div>
          {notifications.length !== 0 && (
            <ul className="font-medium">
              {notifications.map((notification, i, array) => {
                return (
                  <RightBarRequest
                    key={i}
                    id={notification.id}
                    userDocId={storedData.docId}
                    userId={storedData.id}
                    friendId={notification.userId}
                    name={notification.name}
                    profilePic={notification.profilePicture}
                    bottom={array.length - 1 === i ? true : false}
                  />
                );
              })}
            </ul>
          )}
          {notifications.length === 0 && <div>No requests yet.</div>}
        </div>
      </aside>
    </Fragment>
  );
};

export default RightBar;
