import React, { type ReactNode } from "react";

export interface SectionProps {
  main?: boolean;
  noUnderline?: boolean;
  title?: string;
  children?: ReactNode;
  noShadow?: boolean;
  id?: string;
}

export default function Section({
  children,
  main,
  noUnderline,
  noShadow,
  title,
  id,
}: SectionProps) {
  return (
    <div
      id={id}
      className={`max-w-full py-4 px-1 sm:px-3 h-full bg-primary rounded-lg ${!noShadow && "inset-shadow-sm inset-shadow-primary-light shadow-md"}`}
    >
      {title &&
        (main ? (
          <h1
            className={`py-1 mb-4 group ${noUnderline ? "" : "border-b-2 border-accent-yellow"}`}
          >
            {title}
            {id && (
              <a
                aria-label="Link to this section"
                href={`#${id}`}
                className="ml-2 md:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-accent-red-highlight transition-opacity duration-300"
              >
                #
              </a>
            )}
          </h1>
        ) : (
          <h2
            className={`py-1 mb-3 group ${noUnderline ? "" : "border-b-2 border-accent-yellow"}`}
          >
            {title}
            {id && (
              <a
                aria-label="Link to this section"
                href={`#${id}`}
                className="ml-2 md:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-accent-red-highlight transition-opacity duration-300"
              >
                #
              </a>
            )}
          </h2>
        ))}
      {children ? (
        <div className="flex flex-col items-start gap-3">{children}</div>
      ) : null}
    </div>
  );
}
