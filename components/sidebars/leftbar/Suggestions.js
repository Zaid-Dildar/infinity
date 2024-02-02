import { Fragment, useEffect, useState } from "react";
import Suggestion from "../../suggestions/Sugggestion";

const Suggestions = (props) => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    lastName: "",
    birth: "",
    city: "",
    contact: "",
    country: "",
    coverPhoto: "",
    email: "",
    firstName: "",
    id: "",
    profession: "",
    profilePic: "",
  });

  const getData = async () => {
    console.log(userData.city);
    const response = await fetch(
      `../../api/suggestion?searchValue=${userData.city}&userDocId=${userData.docId}`
    );
    if (response.ok) {
      const data = await response.json();
      setUsers(data.usersData);
      console.log(data);
    }
    console.log(response);
  };
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  useEffect(() => {
    if (userData.city !== "") {
      getData();
    }
  }, [userData]);
  return (
    <Fragment>
      <div className="font-bold text-3xl ml-4 my-6 ">Suggestions</div>
      {!(users.length === 1 && users[0].email === userData.email) && (
        <div className="ml-4 px-3 py-4  mb-5 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {users.map((user, i, array) => {
              return (
                user.email !== userData.email && (
                  <Suggestion
                    key={user.id}
                    userId={userData.id}
                    senderFirstName={userData.firstName}
                    senderProfilePic={userData.profilePic}
                    userDocId={userData.docId}
                    friendId={user.id}
                    friendDocId={user.docId}
                    name={`${user.firstName} ${user.lastName}`}
                    email={user.email}
                    location={`${user.city}, ${user.country}`}
                    profilePic={user.profilePic}
                    bottom={array.length - 1 === i ? true : false}
                  />
                )
              );
            })}
          </ul>
        </div>
      )}
      {users.length === 1 && users[0].email === userData.email && (
        <div className="ml-4 px-3 py-4  mb-5 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
          No suggestions yet!
        </div>
      )}
    </Fragment>
  );
};

export default Suggestions;
