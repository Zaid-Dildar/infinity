import React from "react";

const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  contact: "",
  profession: "",
  city: "",
  country: "",
  birth: "",
  profilePicture: "",
  coverPicture: "",
});

export default UserContext;
