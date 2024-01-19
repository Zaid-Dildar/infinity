import RegisterForm from "@/components/register/RegisterForm";
import { Fragment } from "react";

const register = () => {
  return (
    <Fragment>
      <p className="bg-background font text-5xl font-extrabold leading-normal text-center mb-1">
        Join today to share your happiness....
      </p>
      <RegisterForm />
    </Fragment>
  );
};

export default register;
