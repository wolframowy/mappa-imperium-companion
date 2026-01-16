import { NavLink } from "react-router";

import sunIcon from "app/assets/icons/sun.svg";
import moonIcon from "app/assets/icons/moon.svg";
import { useEffect, useRef, useState } from "react";
import Tooltip from "./tooltip";

interface NavBarProps {
  onThemeChange: () => void;
}

export function NavBar({ onThemeChange }: NavBarProps) {
  const navBarRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        navBarRef.current &&
        !navBarRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [navBarRef, isExpanded]);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Mobile Navigation Bar */}
      <div className="fixed sm:hidden top-2.5 left-2.5 z-10 flex rounded-md bg-primary/60">
        <button
          onClick={handleExpandClick}
          aria-label={
            isExpanded ? "Collapse navigation bar" : "Expand navigation bar"
          }
          className="px-3 py-2 rounded-md hover:bg-primary-light hover:inset-shadow-xs hover:inset-shadow-primary-highlight hover:shadow-sm font-square"
        >
          {isExpanded ? "<<" : ">>"}
        </button>
        <button
          className="group px-3 py-2 flex justify-center items-center rounded-md hover:bg-primary-light hover:inset-shadow-xs hover:inset-shadow-primary-highlight hover:shadow-sm"
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
      </div>
      {/* Navigation Bar */}
      <div
        ref={navBarRef}
        className={`
          fixed overflow-hidden -translate-x-full
          w-(--navbar-width-collapsed) sm:overflow-visible sm:translate-x-0
          z-20 bg-primary flex flex-col shrink-0 justify-between gap-4 h-screen border-r-2 border-primary-dark transition-all duration-300
          ${isExpanded && "w-(--navbar-width-expanded) sm:w-(--navbar-width-expanded) translate-x-0"}`}
      >
        <div className="flex flex-col">
          <button
            onClick={handleExpandClick}
            aria-label={
              isExpanded ? "Collapse navigation bar" : "Expand navigation bar"
            }
            className="px-5 py-1 self-end w-(--navbar-width-collapsed) hover:bg-primary-light hover:inset-shadow-xs hover:inset-shadow-primary-highlight hover:shadow-sm font-square"
          >
            {isExpanded ? "<<" : ">>"}
          </button>
          {NavbarRoutes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className="relative px-5 py-3 grow-0 whitespace-nowrap
              hover:bg-primary-light hover:inset-shadow-xs hover:inset-shadow-primary-highlight hover:shadow-sm"
              end
            >
              {isExpanded ? (
                <div className="overflow-x-hidden">{route.text}</div>
              ) : (
                <div className="text-center">
                  <Tooltip tooltip={route.text} direction="right">
                    {route.shortText}
                  </Tooltip>
                </div>
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
    </>
  );
}

const NavbarRoutes = [
  { to: "/", text: "Home", shortText: "H" },
  { to: "/intro", text: "Intro", shortText: "Intro" },
  { to: "/play-overview", text: "Play Overview", shortText: "PO" },
  { to: "/era-1", text: "Era I: Age of Creation", shortText: "I" },
  { to: "/era-2", text: "Era II: Age of Myth", shortText: "II" },
  { to: "/era-3", text: "Era III: Age of Foundation", shortText: "III" },
  { to: "/era-4", text: "Era IV: Age of Discovery", shortText: "IV" },
  { to: "/era-5", text: "Era V: Age of Empires", shortText: "V" },
  { to: "/era-6", text: "Era VI: Age of Collapse", shortText: "VI" },
  { to: "/special-rules", text: "Special Rules", shortText: "SR" },
];
