import LoginForm from "@/components/login/LoginForm";
import { Fragment } from "react";
import { cookies } from "next/headers";

const login = () => {
  const cookieStore = cookies();
  const tried = cookieStore.get("tried");
  // const isLoggedIn = cookieStore.get("isLoggedIn");
  // let trying = false
  // if(!isLoggedIn || isLoggedIn.value === 'false'){
  // }
  return (
    <Fragment>
      <p className="bg-background font text-5xl font-extrabold leading-normal text-center">
        Join today to share your happiness....
      </p>
      <LoginForm tried={tried ? tried.value : false} />
    </Fragment>
  );
};

export default login;
