import { useState, useId, type ReactNode, useEffect } from "react";

interface AccordionProps {
  title: string;
  isOpen?: boolean;
  onToggle?: () => void;
  children?: ReactNode;
}

export default function Accordion({
  title,
  children,
  isOpen = false,
  onToggle,
}: AccordionProps) {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const contentId = useId();

  return (
    <div className="max-w-full inset-shadow-sm inset-shadow-primary-light shadow-md grow">
      <button
        type="button"
        onClick={() =>
          setIsOpenState((prev) => {
            onToggle?.();
            return !prev;
          })
        }
        className="w-full flex items-center justify-between p-1 cursor-pointer bg-primary inset-shadow-sm inset-shadow-primary-light"
        aria-expanded={isOpenState}
        aria-controls={contentId}
      >
        <div className="font-bold text-lg text-accent-red">{title}</div>
        <span
          className={`text-accent-red mx-2 transition-transform duration-200 text-xl ${isOpenState ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>
      <div
        id={contentId}
        className={`p-1 border-t border-primary-light overflow-hidden ${isOpenState ? "" : "invisible h-0 p-0!"}`}
      >
        {children}
      </div>
    </div>
  );
}
