import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = (props) => {
  const pathname = usePathname();

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    localStorage.setItem("isLoggedIn", false);
  };

  return (
    <li
      onClick={props.text === "Logout" ? logoutHandler : props.onClick}
      className={`${props.bottom ? "border-gray-700 border-b-2" : " "}`}
    >
      <Link
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
          pathname === props.pathname
            ? " bg-background dark:bg-gray-700 group"
            : " hover:bg-background dark:hover:bg-gray-700 group"
        }`}
        href={props.href}
      >
        {props.SVG}
        <span className="flex-1 ms-3 whitespace-nowrap">{props.text}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
