"use client";

import { useState, useContext } from "react";
import UserContext from "@/store/user-context";
import { useRouter } from "next/navigation";
import useInput from "../hooks/useInput";
import Link from "next/link";
import { TextInput } from "flowbite-react";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const LoginForm = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);

  const [isUser, setIsUser] = useState(false);
  const [error, setError] = useState(false);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const formIsValid = emailIsValid && passwordIsValid;
  const loginHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const authenticate = async (email, password) => {
      const response = await fetch(`../../api/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "CONTENT-TYPE": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setError(data.error);
      setIsUser(data.isUser);
    };
    await authenticate(emailValue, passwordValue);
    console.log(error);
    const getData = async () => {
      const response = await fetch(`../../api/login`);
      if (response.ok) {
        const data = await response.json();
        // userCtx = data.userData;
        console.log(data);
      }
    };
    getData();
  };
  // if (isUser) {
  //   router.push("/newsfeed");
  // }
  return (
    <form className="max-w-sm bg-sidebar p-4 rounded-xl mx-auto">
      {error && (
        <p className="my-2 text-xs text-red-800 dark:text-red-400 font-semibold font-semiboldfont-semibold">
          *Invalid Credentials! Try again.
        </p>
      )}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <TextInput
          type="email"
          id="email"
          className=""
          placeholder="name@gmail.com"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          color={`${!emailHasError ? "" : "failure"}`}
          helperText={`${!emailHasError ? "" : "Email invallid!"}`}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <TextInput
          type="password"
          id="password"
          className=""
          placeholder="password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          color={`${!passwordHasError ? "" : "failure"}`}
          helperText={`${!passwordHasError ? "" : "Password invallid!"}`}
          required
        />
      </div>
      <div className="bg-sidebar flex flex-row-reverse pt-4">
        <p className="max-lg:hidden mt-auto mb-2 ml-2 text-black font-bold text-2xl leading-normal mr-20">
          OR{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </p>
        <button
          className={`w-60 h-20 bg-gradient-to-b from-black to-red-700 rounded-3xl  ${
            !formIsValid ? "cursor-not-allowed opacity-80" : "hover:to-red-800"
          }`}
          onClick={loginHandler}
        >
          <p className="text-center text-white font-semibold text-4xl leading-normal">
            Login
          </p>
        </button>
      </div>
      <p className="lg:hidden mt-4 text-center text-black font-bold text-2xl leading-normal lg:pb-60">
        OR{" "}
        <Link href="/register" className="underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
