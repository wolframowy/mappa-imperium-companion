import React from "react";

export interface SectionProps {
  main?: boolean;
  noUnderline?: boolean;
  title: string;
  children: React.ReactElement | Array<React.ReactElement>;
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
      className={`py-2 px-3 bg-primary rounded-lg ${!noShadow && "inset-shadow-sm inset-shadow-primary-light shadow-md"}`}
    >
      {main ? (
        <h1
          className={`py-1 my-3 ${noUnderline ? "" : "border-b-2 border-accent-yellow"}`}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={`py-1 my-2 ${noUnderline ? "" : "border-b-2 border-accent-yellow"}`}
        >
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
