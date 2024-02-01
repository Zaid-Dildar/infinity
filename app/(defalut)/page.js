import Link from "next/link";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <p className="mt-8 lg:mt-16 bg-background font text-5xl font-extrabold leading-normal text-center">
        Join today to share your happiness....
      </p>
      <div className="py-20 lg:py-0">
        <div className="bg-background flex flex-row-reverse mx-auto pt-4 lg:pb-44">
          <p className="max-lg:hidden mt-auto mb-2 ml-2 text-black font-bold text-2xl leading-normal mr-20">
            OR{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </p>
          <Link
            href="/register"
            className="w-60 h-20 mx-auto lg:mx-0 bg-gradient-to-b from-black to-red-700 rounded-3xl hover:to-red-800"
          >
            <p className="mt-3 text-center text-white font-semibold text-4xl leading-normal">
              Join Now !
            </p>
          </Link>
        </div>
        <p className="lg:hidden mt-4 mb-2 text-center text-black font-bold text-2xl leading-normal pb-20 lg:pb-60">
          OR{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </Fragment>
  );
};
export default Home;
