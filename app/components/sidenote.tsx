export interface SidenoteProps {
  textHtml: string;
  sidenoteType: "light" | "accent";
}

export default function Sidenote({ textHtml, sidenoteType }: SidenoteProps) {
  const renderedHTML = { __html: textHtml };
  const classNames = getSidenoteClassName(sidenoteType);
  return (
    <div
      className={`p-2 my-2 w-fit shadow-md rounded-sm ${classNames}`}
      dangerouslySetInnerHTML={renderedHTML}
    />
  );
}

function getSidenoteClassName(sidenoteType: "light" | "accent"): string {
  switch (sidenoteType) {
    case "light":
      return "bg-primary-light border-l-2 border-r-2 border-text-primary";
    case "accent":
      return "bg-accent-yellow text-primary-dark border-t-2 border-b-2 border-text-primary";
    default:
      return "";
  }
}
