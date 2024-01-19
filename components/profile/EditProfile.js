import { Fragment } from "react";
import EditForm from "./EditForm";

const Profile = () => {
  return (
    <Fragment>
      <div className="font-bold text-3xl ml-8 my-6 border-b-4 border-gray-500">
        Edit Profile
      </div>
      <div className="h-52 w-2/3 mx-auto flex justify-around rounded-3xl flex-col-reverse bg-cover bg-center bg-background bg-no-repeat mb-6 bg-[url('https://res.cloudinary.com/dmx66oic1/image/upload/v1705392280/Infinity/Rectangle_1_djaiqi.png')]">
        <div className="h-32 w-32 ml-12 mb-2 rounded-xl bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/dmx66oic1/image/upload/v1705569707/Infinity/Rectangle_15_r6dot0.png')]">
          <button className=" float-right ">
            <svg
              className="p-0.5 m-2 rounded ring ring-red-800/90 ring-offset-2 ring-offset-transparent"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                d="M12.7206 2.43236L12.7206 2.43241C12.9193 2.64114 12.9154 2.81213 12.8848 2.9265C12.8676 2.99127 12.8385 3.04661 12.8128 3.08639C12.8002 3.10589 12.789 3.12054 12.7819 3.12948C12.7801 3.13169 12.7786 3.13352 12.7774 3.13497C12.7761 3.13644 12.7752 3.13751 12.7746 3.13817C12.7746 3.13821 12.7746 3.13824 12.7745 3.13828L11.9689 3.9857L9.37341 1.25649L10.1938 0.39401L10.2014 0.386824C10.2015 0.386693 10.2017 0.386561 10.2018 0.386429C10.23 0.359974 10.3177 0.286802 10.4256 0.259907C10.5109 0.23863 10.633 0.237535 10.7862 0.398516C10.7862 0.398529 10.7862 0.398541 10.7862 0.398554L12.7206 2.43236ZM1.15824 12.6322L2.09029 9.17869L4.44277 11.6524L1.15824 12.6322ZM2.60304 8.37588L8.73327 1.93059L11.3276 4.65856L5.19791 11.1033L2.60304 8.37588Z"
                fill="white"
                stroke="url(#paint0_linear_37_721)"
                strokeWidth="0.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_37_721"
                  x1="6.97517"
                  y1="0"
                  x2="6.97517"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.9999" stopColor="#FF0000" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
        <button className="ml-2 ">
          <svg
            className="p-0.5 m-2 rounded ring ring-red-800/90 ring-offset-2 ring-offset-transparent"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M12.7206 2.43236L12.7206 2.43241C12.9193 2.64114 12.9154 2.81213 12.8848 2.9265C12.8676 2.99127 12.8385 3.04661 12.8128 3.08639C12.8002 3.10589 12.789 3.12054 12.7819 3.12948C12.7801 3.13169 12.7786 3.13352 12.7774 3.13497C12.7761 3.13644 12.7752 3.13751 12.7746 3.13817C12.7746 3.13821 12.7746 3.13824 12.7745 3.13828L11.9689 3.9857L9.37341 1.25649L10.1938 0.39401L10.2014 0.386824C10.2015 0.386693 10.2017 0.386561 10.2018 0.386429C10.23 0.359974 10.3177 0.286802 10.4256 0.259907C10.5109 0.23863 10.633 0.237535 10.7862 0.398516C10.7862 0.398529 10.7862 0.398541 10.7862 0.398554L12.7206 2.43236ZM1.15824 12.6322L2.09029 9.17869L4.44277 11.6524L1.15824 12.6322ZM2.60304 8.37588L8.73327 1.93059L11.3276 4.65856L5.19791 11.1033L2.60304 8.37588Z"
              fill="white"
              stroke="url(#paint0_linear_37_721)"
              strokeWidth="0.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_721"
                x1="6.97517"
                y1="0"
                x2="6.97517"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.9999" stopColor="#FF0000" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
      <EditForm />
    </Fragment>
  );
};

export default Profile;
