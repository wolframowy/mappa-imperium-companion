export interface paragraphProps {
  textHtml: string;
}


export function Paragraph({ textHtml }: paragraphProps) {
  const renderedHTML = {__html: textHtml}
  return (
    <p className="whitespace-pre-line" dangerouslySetInnerHTML={renderedHTML} />
  )
}