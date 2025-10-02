import {parseBoldText} from "~/util/parseBoldText";

export interface paragraphProps {
  title: string;
  text: string;
  underline?: boolean;
  main?: boolean;
  bold?: boolean;
}

export function Paragraph({main, title, text, underline, bold }: paragraphProps) {
  return (
    <div className="max-w-lg">
      {main ? (
        <h1 className={`${underline ? 'border-b-2 border-accent-yellow' : ''}`}>{title}</h1>
      ) : (
        <h2 className={`${underline ? 'border-b-2 border-accent-yellow' : ''}`}>{title}</h2>
      )}
      <p className="whitespace-pre-line">{bold ? parseBoldText(text) : text}</p>
    </div>
  )
}