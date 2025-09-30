export interface paragraphProps {
  title: string;
  text: string;
  underline?: boolean;
  main?: boolean
  boldText?: string;
}

export function Paragraph({main, title, text, underline, boldText}: paragraphProps) {
  return (
    <div className="max-w-lg">
      {main ? (
        <h1 className={`${underline ? 'border-b-2 border-(--color-border-accent)' : ''}`}>{title}</h1>
      ) : (
        <h2 className={`${underline ? 'border-b-2 border-(--color-border-accent)' : ''}`}>{title}</h2>
      )}
      {boldText && (
        <b>{boldText}</b>
      )}
      <p className="whitespace-pre-line">{text}</p>
    </div>
  )
}