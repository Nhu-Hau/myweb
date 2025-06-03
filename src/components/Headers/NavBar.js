import Link from "next/link";
import UserActions from "./UserActions";

function NavBar() {
  const menuItems = [
    { name: "NAM", link: "/men" },
    { name: "NỮ", link: "/women" },
    { name: "UNISEX", link: "/" },
    { name: "PHỤ KIỆN", link: "/" },
  ];

  return (
    <>
      <nav className="px-3 sm:px-5 flex items-center">
          <span className="sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" role="img" aria-label="Menu">
            &#9776;
          </span>
          <ul className="flex px-4 sm:px-6 md:px-7 lg:px-8 items-center whitespace-nowrap">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-gray-800 rounded-lg text-[9px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base font-medium px-2 flex items-center"
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
    </>
  );
}

export default NavBar;
