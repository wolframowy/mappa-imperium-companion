import React from "react";

export interface SectionProps {
  main?: boolean;
  noUnderline?: boolean;
  title: string;
  children: React.ReactElement | Array<React.ReactElement>;
}

export default function Section({
  children,
  main,
  noUnderline,
  title,
}: SectionProps) {
  return (
    <div className="py-2">
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
      {children}
    </div>
  );
}
