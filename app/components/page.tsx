import { useEffect, useRef, type PropsWithChildren } from "react";
import { useLocation } from "react-router";

export default function Page({ children }: PropsWithChildren) {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!location.hash) {
      ref.current?.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div
      id="mainPage"
      ref={ref}
      className="h-screen grow min-w-xs px-3 sm:px-7 pt-13 pb-20 sm:ml-(--navbar-width-collapsed) overflow-y-auto
      bg-[url(/parchment.jpg)] bg-cover bg-center bg-white/60 bg-blend-overlay dark:bg-primary-dark/70"
    >
      <div className="flex flex-col gap-5 w-full">{children}</div>
    </div>
  );
}
