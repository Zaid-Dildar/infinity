"use client";

import UserContext from "@/store/user-context";

export default function ThemeProvider({ children }) {
  return (
    <UserContext.Provider
      value={{
        birth: "2002-11-30T19:00:00.000Z",

        city: "Lahore",

        contact: "0300 1233432",

        country: "Pakistan",

        coverPhoto:
          "https://res.cloudinary.com/dmx66oic1/image/upload/v1705618034/Infinity/mit_fk3ba4.jpg",

        email: "rzd@gmail.com",

        firstName: "Muhammad",

        id: "Vx0SLddxfJago3GqRLEu",

        lastName: "Zaid",

        password: "123123",

        profession: "Student",

        profilePic:
          "https://res.cloudinary.com/dmx66oic1/image/upload/v1705617948/Infinity/Screenshot_2024-01-19_034529_hff4sb.png",
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
