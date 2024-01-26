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
  friends: [],
  onSignIn: (userData) => {},
});

export default UserContext;
