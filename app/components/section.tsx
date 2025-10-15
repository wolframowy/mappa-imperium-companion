import React, { type ReactNode } from "react";

export interface SectionProps {
  main?: boolean;
  noUnderline?: boolean;
  title: string;
  children?: ReactNode;
  noShadow?: boolean;
}

export default function Section({
  children,
  main,
  noUnderline,
  noShadow,
  title,
}: SectionProps) {
  return (
    <div
      className={`py-4 px-1 sm:px-3 bg-primary rounded-lg ${!noShadow && "inset-shadow-sm inset-shadow-primary-light shadow-md"}`}
    >
      {main ? (
        <h1
          className={`py-1 mb-4 ${noUnderline ? "" : "border-b-2 border-accent-yellow"}`}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={`py-1 mb-3 ${noUnderline ? "" : "border-b-2 border-accent-yellow"}`}
        >
          {title}
        </h2>
      )}
      {children ?? <div className="flex flex-col gap-2">{children}</div>}
    </div>
  );
}
