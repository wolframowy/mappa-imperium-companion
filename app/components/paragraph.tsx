export interface paragraphProps {
  title: string;
  textHtml: string;
  noUnderline?: boolean;
  main?: boolean;
}


export function Paragraph({main, title, textHtml, noUnderline }: paragraphProps) {
  const renderedHTML = {__html: textHtml}
  return (
    <div className="max-w-lg">
      {main ? (
        <h1 className={`${noUnderline ? '' : 'border-b-2 border-accent-yellow'}`}>{title}</h1>
      ) : (
        <h2 className={`${noUnderline ? '' : 'border-b-2 border-accent-yellow'}`}>{title}</h2>
      )}
      <p className="whitespace-pre-line" dangerouslySetInnerHTML={renderedHTML}></p>
    </div>
  )
}