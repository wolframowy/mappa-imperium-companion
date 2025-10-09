export interface SidenoteProps {
  textHtml: string;
  sidenoteType: "light" | "accent";
}

export default function Sidenote({ textHtml, sidenoteType }: SidenoteProps) {
  const renderedHTML = { __html: textHtml };
  const classNames = getSidenoteClassName(sidenoteType);
  return (
    <div
      className={`p-2 my-2 w-fit shadow-lg inset-shadow-xs rounded-sm ${classNames}`}
      dangerouslySetInnerHTML={renderedHTML}
    />
  );
}

function getSidenoteClassName(sidenoteType: "light" | "accent"): string {
  switch (sidenoteType) {
    case "light":
      return "bg-primary-light inset-shadow-primary-highlight border-l-2 border-r-2 border-text-primary";
    case "accent":
      return "bg-accent-yellow text-primary border-l-2 border-r-2 border-text-primary inset-shadow-accent-yellow-highlight";
    default:
      return "";
  }
}
