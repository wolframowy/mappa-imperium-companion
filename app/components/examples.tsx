export interface ExamplesProps {
  exampleTexts: string[],
  noDisc?: boolean
}

export default function Examples({exampleTexts, noDisc}: ExamplesProps) {
  return (
    <div className='max-w-lg'>
      <b className="text-xl">Examples</b>
      <ul className={`${!noDisc && "list-disc list-inside" }`}>{exampleTexts.map((text, index) => {
        const renderedHtml = {__html: text}
        return (
        <li key={index} dangerouslySetInnerHTML={renderedHtml}></li>
      )})}</ul>
    </div>
  )
}