import React from "react";

export interface SectionProps {
  main?: boolean;
  noUnderline?: boolean
  title: string;
  children: React.ReactElement | Array<React.ReactElement>;
}

export default function Section({children, main, noUnderline, title}: SectionProps) {
  return (
    <div className="max-w-lg">
      {main ? (
        <h1 className={`${noUnderline ? '' : 'border-b-2 border-accent-yellow'}`}>{title}</h1>
      ) : (
        <h2 className={`${noUnderline ? '' : 'border-b-2 border-accent-yellow'}`}>{title}</h2>
      )}
      {children}
    </div>
  )
}