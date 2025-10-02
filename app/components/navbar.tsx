import { NavLink } from "react-router";

import sunIcon from "app/assets/icons/sun.svg";
import moonIcon from "app/assets/icons/moon.svg";

interface NavBarProps {
  onThemeChange: () => void;
}

export function NavBar({ onThemeChange }: NavBarProps) {
  return (
    <div className="bg-primary flex flex-col flex-shrink-0 w-[150px] justify-between py-6 gap-4 h-screen">
      <div className="flex flex-col">
        {NavbarRoutes.map((route) => (
          <NavLink
            key={route.to}
            to={route.to}
            className="px-6 py-4 hover:bg-primary-light"
            end
          >
            {route.text}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          className="group size-8 flex justify-center items-center"
          onClick={onThemeChange}
        >
          <img
            src={moonIcon}
            alt="Light/Dark Mode Toggle"
            className="block w-6 h-6 dark:hidden group-hover:brightness-200"
          />
          <img
            src={sunIcon}
            alt="Light/Dark Mode Toggle"
            className="hidden w-6 h-6 dark:block group-hover:brightness-125"
          />
        </button>
        <NavLink
          to="/options"
          className="py-4 self-stretch text-center hover:bg-primary-light"
          end
        >
          Options
        </NavLink>
      </div>
    </div>
  );
}

const NavbarRoutes = [
  { to: "/", text: "Home" },
  { to: "/intro", text: "Intro" },
  { to: "/playOverview", text: "Play Overview"},
  { to: "/era-1", text: "Era I"},
  { to: "/era-2", text: "Era II"},
  { to: "/era-3", text: "Era III"}
];
