import { useId } from "react";

interface TooltipProps {
  children: React.ReactNode;
  tooltip: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function Tooltip({
  children,
  tooltip,
  direction = "up",
}: TooltipProps) {
  const tooltipId = useId();

  const directionClasses = {
    up: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    down: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  }[direction];

  return (
    <span className="group relative" aria-describedby={tooltipId}>
      {children}
      <span
        id={tooltipId}
        className={`absolute invisible opacity-0 py-1 px-2 z-10 text-center w-max bg-primary-dark text-text-primary-muted rounded-md transition-opacity duration-300
        group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100
        ${directionClasses}
        `}
      >
        {tooltip}
      </span>
    </span>
  );
}
