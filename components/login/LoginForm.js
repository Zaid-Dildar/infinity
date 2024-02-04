"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import useInput from "../hooks/useInput";
import Link from "next/link";
import { TextInput, Spinner, Alert } from "flowbite-react";

// export async function getServerSideProps(context) {
//   // Access cookies from the request headers
//   const cookies = context.req.cookie || "";
//   const parsedCookies = cookies.split(";").reduce((acc, cookie) => {
//     const [key, value] = cookie.trim().split("=");
//     acc[key] = decodeURIComponent(value);
//     return acc;
//   }, {});
//   // const cookies = req.cookies;
//   console.log(cookies);
//   return {
//     props: {
//       cookies: cookies,
//     },
//   };
// }

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const LoginForm = (props) => {
  const router = useRouter();

  // const [isUser, setIsUser] = useState(false);

  const [tried, setTried] = useState(props.tried);
  const [loggingUser, setLoggingUser] = useState(false);
  const [error, setError] = useState(false);

  setTimeout(() => {
    setTried(false);
  }, 3000);

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
    setLoggingUser(true);
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
      // setIsUser(data.isUser);
      console.log(data.user);
      localStorage.setItem("userData", JSON.stringify(data.user));
      setLoggingUser(false);
      if (data.isUser) {
        // console.log("true");
        router.push("/profile");
      }
    };
    await authenticate(emailValue, passwordValue);
    console.log(error);

    // const getData = async () => {
    //   const response = await fetch(`../../api/login`);
    //   if (response.ok) {
    //     const data = await response.json();
    //     // userCtx = data.userData;
    //     console.log(data);
    //   }
    // };
    // getData();
  };
  // if (isUser) {
  //   console.log("true");
  //   // router.push("/profile");
  // }

  return (
    <Fragment>
      {tried === "true" && (
        <Alert
          className="max-w-sm rounded-xl p-4 m-2 mx-2 md:mx-auto"
          color="failure"
        >
          <span className="font-medium">You aren't logged in!</span>
        </Alert>
      )}

      <form className="max-w-sm bg-sidebar rounded-xl p-4 m-2 mx-2 md:mx-auto">
        {error && (
          <p className="my-2 text-xs text-red-800 dark:text-red-400 font-semibold font-semiboldfont-semibold">
            *Invalid Credentials! Try again.
          </p>
        )}
        {loggingUser && (
          <div className="flex justify-center mb-5">
            <div className="text-center">
              <Spinner size="lg" />
            </div>
            <p className="pl-3 text-lg mt-1 text-gray-800">Logging you in.</p>
          </div>
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
              !formIsValid
                ? "cursor-not-allowed opacity-80"
                : "hover:to-red-800"
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
    </Fragment>
  );
};

export default LoginForm;
