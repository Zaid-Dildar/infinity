const { Fragment } = require("react");
import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <Fragment>
      <div className="font-bold text-3xl ml-4 my-6 ">Menu</div>
      <div className="ml-4 px-3 py-4 overflow-y-auto rounded-3xl bg-sidebar card dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <MenuItem
            onClick={props.onClick}
            SVG={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5275 1.11898C10.9413 0.719563 11.4685 0.5 12.0137 0.5C12.5589 0.5 13.0861 0.719563 13.5 1.11898L20.7326 8.09436L23.5716 10.6507C23.6887 10.7562 23.7862 10.8865 23.8585 11.0343C23.9308 11.1822 23.9765 11.3446 23.993 11.5123C24.0096 11.68 23.9966 11.8497 23.9548 12.0118C23.9131 12.1739 23.8434 12.3251 23.7497 12.4569C23.656 12.5886 23.5401 12.6983 23.4088 12.7797C23.2774 12.8611 23.1331 12.9125 22.9841 12.9311C22.835 12.9497 22.6842 12.9351 22.5402 12.8881C22.3962 12.8412 22.2618 12.7627 22.1447 12.6573L21.1459 11.758V21.9308C21.1459 22.6122 20.9053 23.2657 20.4772 23.7475C20.049 24.2293 19.4683 24.5 18.8628 24.5H14.2968V18.077C14.2968 17.3956 14.0562 16.7421 13.6281 16.2603C13.1999 15.7785 12.6192 15.5078 12.0137 15.5078C11.4082 15.5078 10.8275 15.7785 10.3994 16.2603C9.97124 16.7421 9.73071 17.3956 9.73071 18.077V24.5H5.16464C4.55914 24.5 3.97844 24.2293 3.55029 23.7475C3.12214 23.2657 2.88161 22.6122 2.88161 21.9308V11.7568L1.88278 12.656C1.7665 12.7677 1.63145 12.852 1.48566 12.9039C1.33987 12.9558 1.1863 12.9742 1.03408 12.958C0.881848 12.9418 0.734063 12.8913 0.599494 12.8096C0.464924 12.7279 0.346312 12.6166 0.250699 12.4823C0.155086 12.3481 0.0844206 12.1935 0.0428971 12.0279C0.00137356 11.8623 -0.0101615 11.689 0.00897659 11.5183C0.0281146 11.3476 0.0775357 11.1829 0.154306 11.0341C0.231077 10.8853 0.333632 10.7554 0.455885 10.652L3.29484 8.09565L10.5275 1.11898Z"
                  fill="url(#paint0_linear_38_849)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_38_849"
                    x1="12"
                    y1="0.5"
                    x2="12"
                    y2="24.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop
                      offset="0.9998"
                      stopColor="#9C0000"
                      stopOpacity="0.59736"
                    />
                    <stop
                      offset="0.9999"
                      stopColor="#FF0000"
                      stopOpacity="0.34"
                    />
                    <stop offset="1" stopColor="#FF0000" />
                  </linearGradient>
                </defs>
              </svg>
            }
            text={"Home"}
            bottom={true}
            href={"/newsfeed"}
            pathname={"/newsfeed"}
          />
          {/* <MenuItem
            onClick={props.onClick}
            SVG={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M18 0.5H6C2.688 0.5 0 3.17734 0 6.47899V13.6586V14.8592C0 18.1608 2.688 20.8382 6 20.8382H7.8C8.124 20.8382 8.556 21.0543 8.76 21.3184L10.56 23.7076C11.352 24.7641 12.648 24.7641 13.44 23.7076L15.24 21.3184C15.468 21.0183 15.828 20.8382 16.2 20.8382H18C21.312 20.8382 24 18.1608 24 14.8592V6.47899C24 3.17734 21.312 0.5 18 0.5ZM7.2 12.506C6.528 12.506 6 11.9657 6 11.3054C6 10.6451 6.54 10.1048 7.2 10.1048C7.86 10.1048 8.4 10.6451 8.4 11.3054C8.4 11.9657 7.872 12.506 7.2 12.506ZM12 12.506C11.328 12.506 10.8 11.9657 10.8 11.3054C10.8 10.6451 11.34 10.1048 12 10.1048C12.66 10.1048 13.2 10.6451 13.2 11.3054C13.2 11.9657 12.672 12.506 12 12.506ZM16.8 12.506C16.128 12.506 15.6 11.9657 15.6 11.3054C15.6 10.6451 16.14 10.1048 16.8 10.1048C17.46 10.1048 18 10.6451 18 11.3054C18 11.9657 17.472 12.506 16.8 12.506Z"
                  fill="#5F6B88"
                />
              </svg>
            }
            text={"Messages"}
            bottom={true}
            pathname={"/messages"}
            href={"/messages"}
          /> */}
          <MenuItem
            onClick={props.onClick}
            SVG={
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
            }
            text={"Friends"}
            bottom={true}
            pathname={"/friends"}
            href={"/friends"}
          />
          <MenuItem
            onClick={props.onClick}
            SVG={
              <img
                width="24"
                height="25"
                src="https://img.icons8.com/puffy/32/test-account.png"
                alt="test-account"
              />
            }
            text={"Profile"}
            bottom={true}
            pathname={"/profile"}
            href={"/profile"}
          />
          <MenuItem
            onClick={props.onClick}
            SVG={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            }
            text={"Search"}
            bottom={true}
            pathname={"/search"}
            href={"/search"}
          />
          <MenuItem
            onClick={props.onClick}
            SVG={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2H12C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4H18C18.5523 4 19 4.44772 19 5V19C19 19.5523 18.5523 20 18 20H12C11.4477 20 11 20.4477 11 21C11 21.5523 11.4477 22 12 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" />
                <path d="M8 7L3 12L8 17" />
                <path d="M13 12H3" />
              </svg>
            }
            text={"Logout"}
            bottom={false}
            pathname={"/"}
            href={"/"}
          />
          {/* <MenuItem
            onClick={props.onClick}
            SVG={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21.7091 8.96569C19.5382 8.96569 18.6507 7.33838 19.7301 5.34239C20.3538 4.18547 19.982 2.71073 18.8906 2.04963L16.8156 0.79101C15.8681 0.193483 14.6447 0.549457 14.081 1.55381L13.949 1.79536C12.8696 3.79136 11.0945 3.79136 10.003 1.79536L9.87106 1.55381C9.33133 0.549457 8.10795 0.193483 7.16042 0.79101L5.08546 2.04963C3.994 2.71073 3.62219 4.19819 4.24588 5.3551C5.33733 7.33838 4.44978 8.96569 2.27886 8.96569C1.03148 8.96569 0 10.0463 0 11.3812V13.6188C0 14.941 1.01949 16.0343 2.27886 16.0343C4.44978 16.0343 5.33733 17.6616 4.24588 19.6576C3.62219 20.8145 3.994 22.2893 5.08546 22.9504L7.16042 24.209C8.10795 24.8065 9.33133 24.4505 9.89505 23.4462L10.027 23.2046C11.1064 21.2086 12.8816 21.2086 13.973 23.2046L14.1049 23.4462C14.6687 24.4505 15.8921 24.8065 16.8396 24.209L18.9145 22.9504C20.006 22.2893 20.3778 20.8018 19.7541 19.6576C18.6627 17.6616 19.5502 16.0343 21.7211 16.0343C22.9685 16.0343 24 14.9537 24 13.6188V11.3812C23.988 10.059 22.9685 8.96569 21.7091 8.96569ZM11.994 16.6318C9.84708 16.6318 8.09595 14.7757 8.09595 12.5C8.09595 10.2243 9.84708 8.36816 11.994 8.36816C14.1409 8.36816 15.8921 10.2243 15.8921 12.5C15.8921 14.7757 14.1409 16.6318 11.994 16.6318Z"
                  fill="#5F6B88"
                />
              </svg>
            }
            text={"Edit Profile"}
            bottom={false}
            href={"/edit-profile"}
            pathname={"/edit-profile"}
          /> */}
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;
