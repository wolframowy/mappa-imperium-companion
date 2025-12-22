import {
  isRouteErrorResponse,
  Links,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { createContext, useEffect, useState } from "react";
import { NavBar } from "./components/navbar";
import TableShelf from "./components/tableShelf";

export const TableShelfContext = createContext<{
  lookupTables: Array<any>;
  setLookupTables: (tables: Array<any>) => void;
} | null>(null);

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nova+Square&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap",
  },
];

// Layout is above App so it can render things above ErrorBoundary and HydrateFallback
// put things here that you  always want to show up like a nav bar
export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lookupTables, setLookupTables] = useState<Array<any>>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage?.theme) {
      setTheme(localStorage.theme);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.remove("dark", "light");
      document.body.classList.add(theme);
    }
  }, [theme]);

  function toggleLightDark() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (typeof window !== "undefined" && localStorage) {
      localStorage.theme = nextTheme;
    }
  }

  return (
    <html lang="en">
      <head>
        <title>Mappa Imperium Companion</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        <TableShelfContext value={{ lookupTables, setLookupTables }}>
          <div className="flex w-screen">
            <NavBar onThemeChange={toggleLightDark} />
            <div className="h-screen flex-grow min-w-xs px-3 sm:px-7 py-6 sm:ml-[var(--navbar-width-collapsed)] overflow-y-auto">
              {children}
            </div>
          </div>
          <TableShelf />
        </TableShelfContext>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return (
    <div className="pt-16 p-4 container mx-auto">
      <h1>Loading...</h1>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
