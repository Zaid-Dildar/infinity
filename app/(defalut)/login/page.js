import LoginForm from "@/components/login/LoginForm";
import { Fragment } from "react";

const login = () => {
  return (
    <Fragment>
      <p className="bg-background font text-5xl font-extrabold leading-normal text-center">
        Join today to share your happiness....
      </p>
      <LoginForm />
    </Fragment>
  );
};

export default login;
