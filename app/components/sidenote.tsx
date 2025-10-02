export interface SidenoteProps {
  textHtml: string;
  sidenoteType: 'white' | 'green'
}

export default function Sidenote({textHtml, sidenoteType}: SidenoteProps) {
  const renderedHTML = {__html: textHtml}
  const classNames = getSidenoteClassName(sidenoteType)
  return (
    <div
      className={`p-2 ${classNames}`}
      dangerouslySetInnerHTML={renderedHTML}
    />
  )
}

function getSidenoteClassName(sidenoteType: 'white' | 'green') {
  switch (sidenoteType) {
    case "white":
      return "bg-white border-l-2 border-r-2";
    case "green":
      return "bg-green-100 border-t-2 border-b-2";
    default:
      return "";
  }
}