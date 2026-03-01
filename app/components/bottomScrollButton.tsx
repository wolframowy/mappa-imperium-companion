import { useEffect, useState } from "react";

export function BottomScrollButton({
  children,
  onClick,
  targetSelector,
  bottomPosition = 100,
}: {
  children: React.ReactNode;
  onClick: () => void;
  targetSelector?: string;

  bottomPosition?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currTarget =
      (targetSelector ? document.querySelector(targetSelector) : null) ??
      document.documentElement;

    // Initial visibility: if content fits without scrolling, show the button.
    setIsVisible(currTarget.scrollHeight <= currTarget.clientHeight);

    const handleScroll = () => {
      // Check if user has scrolled to bottom (within bottomPosition px)
      const isAtBottom =
        currTarget.clientHeight + currTarget.scrollTop >=
        currTarget.scrollHeight - bottomPosition;
      setIsVisible(isAtBottom);
    };

    currTarget.addEventListener("scroll", handleScroll, true);
    return () => {
      currTarget.removeEventListener("scroll", handleScroll, true);
    };
  }, [bottomPosition, targetSelector]);
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 px-3 py-2 text-neutral-100 bg-accent-yellow hover:bg-accent-yellow-highlight rounded-lg shadow-lg hover:shadow-xl transition-opacity z-10 duration-300
        ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {children} &gt;
    </button>
  );
}
