"use client";

import Link from "next/link";
import { Datepicker } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useInput from "../hooks/useInput";

const isSame = (value1, value2) => value1 === value2;
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const RegisterForm = () => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);
  const [birthValue, setBirthValue] = useState(false);

  const router = useRouter();

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: professionValue,
    isValid: professionIsValid,
    hasError: professionHasError,
    valueChangeHandler: professionChangeHandler,
    inputBlurHandler: professionBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: contactValue,
    isValid: contactIsValid,
    hasError: contactHasError,
    valueChangeHandler: contactChangeHandler,
    inputBlurHandler: contactBlurHandler,
  } = useInput(isNotEmpty);

  const formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid &&
    emailIsValid &&
    cityIsValid &&
    countryIsValid &&
    contactIsValid &&
    professionIsValid &&
    passwordValue === confirmPasswordValue;

  const registerHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const createUser = async (email, password) => {
      console.log(email);
      console.log(password);
      const response = await fetch(`../../api/register`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          userData: {
            firstName: firstNameValue,
            lastName: lastNameValue,
            password: passwordValue,
            city: cityValue,
            email: emailValue,
            country: countryValue,
            contact: contactValue,
            birth: birthValue,
            profession: professionValue,
          },
        }),
        headers: {
          "CONTENT-TYPE": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setError(data.error);
      setUser(data.user);
    };
    await createUser(emailValue, passwordValue);
  };

  if (user) {
    router.replace("/newsfeed");
  }
  return (
    <form className=" bg-sidebar rounded-xl max-w-screen-md p-4 m-2 mx-2 md:mx-auto">
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative z-0 w-full group">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <TextInput
            type="text"
            name="firstName"
            id="firstName"
            className="my-2"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            color={`${!firstNameHasError ? "" : "failure"}`}
            helperText={`${!firstNameHasError ? "" : "First Name is invalid!"}`}
            required
          />
        </div>
        <div className="relative z-0 w-full group">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <TextInput
            type="text"
            name="lastName"
            id="lastName"
            className="my-2"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            color={`${!lastNameHasError ? "" : "failure"}`}
            helperText={`${!lastNameHasError ? "" : "Last Name is invallid!"}`}
            required
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative z-0 w-full group">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <TextInput
            type="password"
            id="password"
            className=""
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            color={`${!passwordHasError ? "" : "failure"}`}
            helperText={`${!passwordHasError ? "" : "Password invallid!"}`}
            required
          />
        </div>
        <div className="relative z-0 w-full group">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <TextInput
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="my-2"
            value={confirmPasswordValue}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            color={`${
              !confirmPasswordHasError &&
              isSame(passwordValue, confirmPasswordValue)
                ? ""
                : "failure"
            }`}
            helperText={`${
              !confirmPasswordHasError ? "" : "Confirm Password is invallid!"
            }${
              confirmPasswordHasError ||
              isSame(passwordValue, confirmPasswordValue)
                ? ""
                : "Password does not match"
            }`}
            required
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative z-0 w-full group">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <TextInput
            type="text"
            name="city"
            id="city"
            className="my-2"
            value={cityValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            color={`${!cityHasError ? "" : "failure"}`}
            helperText={`${!cityHasError ? "" : "City Name invallid!"}`}
            required
          />
        </div>
        <div className="relative z-0 w-full group">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Country
          </label>
          <TextInput
            type="text"
            name="country"
            id="country"
            className="my-2"
            value={countryValue}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            color={`${!countryHasError ? "" : "failure"}`}
            helperText={`${!countryHasError ? "" : "Country Name invallid!"}`}
            required
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative z-0 w-full group">
          <label
            htmlFor="profession"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Profession
          </label>
          <TextInput
            type="text"
            name="profession"
            id="profession"
            className="my-2"
            value={professionValue}
            onChange={professionChangeHandler}
            onBlur={professionBlurHandler}
            color={`${!professionHasError ? "" : "failure"}`}
            helperText={`${!professionHasError ? "" : "Profession invallid!"}`}
            required
          />
        </div>
        <div className="relative z-10 w-full group">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Date of Birth
          </label>
          <Datepicker
            className="my-2"
            onSelectedDateChanged={(date) => setBirthValue(date)}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative z-0 w-full group">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <TextInput
            type="email"
            id="email"
            className="my-2"
            placeholder="name@gmail.com"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            color={`${!emailHasError ? "" : "failure"}`}
            helperText={`${!emailHasError ? "" : "Email invallid!"}`}
            required
          />
        </div>
        <div className="relative z-0 w-full group">
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact
          </label>
          <TextInput
            type="tel"
            id="contact"
            className="my-2"
            placeholder="+92 3021234556"
            pattern="[0-9]{4}-[0-9]{7}"
            value={contactValue}
            onChange={contactChangeHandler}
            onBlur={contactBlurHandler}
            color={`${!contactHasError ? "" : "failure"}`}
            helperText={`${!contactHasError ? "" : "Contact info invallid!"}`}
            required
          />
        </div>
      </div>
      <div className="bg-sidebar flex pt-4">
        <button
          className={`w-60 h-20 bg-gradient-to-b from-black to-red-700 rounded-3xl  ${
            !formIsValid ? "cursor-not-allowed opacity-80" : "hover:to-red-800"
          }`}
          onClick={registerHandler}
        >
          <p className="text-center text-white font-semibold text-4xl leading-normal">
            Register
          </p>
        </button>
        <p className="max-lg:hidden mt-auto ml-2 text-black font-bold text-2xl leading-normal">
          OR{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
      <p className="lg:hidden mt-4 mb-2 text-center text-black font-bold text-2xl leading-normal lg:pb-60">
        OR{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
