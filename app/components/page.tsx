import { useEffect, useRef, type PropsWithChildren } from "react";
import { useLocation } from "react-router";

export default function Page({ children }: PropsWithChildren) {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [location]);
  return (
    <div
      ref={ref}
      className="h-screen flex-grow min-w-xs px-3 sm:px-7 py-6 sm:ml-[var(--navbar-width-collapsed)] overflow-y-auto"
    >
      <div className="flex flex-col gap-5 w-full">{children}</div>
    </div>
  );
}
