import { NavLink } from "react-router";

import sunIcon from "app/assets/icons/sun.svg";
import moonIcon from "app/assets/icons/moon.svg";
import { useState } from "react";

interface NavBarProps {
  onThemeChange: () => void;
}

export function NavBar({ onThemeChange }: NavBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed bg-primary flex flex-col flex-shrink-0 justify-between gap-4 h-screen border-r-2 border-primary-dark transition-all duration-300 ${isExpanded ? "w-[var(--navbar-width-expanded)]" : "w-[var(--navbar-width-collapsed)]"}`}
    >
      <div className="flex flex-col">
        <button
          onClick={handleExpandClick}
          aria-label={
            isExpanded ? "Collapse navigation bar" : "Expand navigation bar"
          }
          className="px-5 py-1 self-end w-[var(--navbar-width-collapsed)] hover:bg-primary-light hover:inset-shadow-xs hover:inset-shadow-primary-highlight shadow-sm"
        >
          {isExpanded ? "<<" : ">>"}
        </button>
        {NavbarRoutes.map((route) => (
          <NavLink
            key={route.to}
            to={route.to}
            className="relative px-5 py-3 grow-0 whitespace-nowrap overflow-x-hidden"
            end
          >
            {isExpanded ? (
              route.text
            ) : (
              <div className="text-center w-7">{route.shortText}</div>
            )}
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
  { to: "/", text: "Home", shortText: "H" },
  { to: "/intro", text: "Intro", shortText: "IN" },
  { to: "/play-overview", text: "Play Overview", shortText: "PO" },
  { to: "/era-1", text: "Era I: Age of Creation", shortText: "I" },
  { to: "/era-2", text: "Era II: Age of Myth", shortText: "II" },
  { to: "/era-3", text: "Era III: Age of Foundation", shortText: "III" },
  { to: "/era-4", text: "Era IV: Age of Discovery", shortText: "IV" },
  { to: "/era-5", text: "Era V: Age of Empires", shortText: "V" },
  { to: "/era-6", text: "Era VI: Age of Collapse", shortText: "VI" },
  { to: "/special-rules", text: "Special Rules", shortText: "SR" },
];
