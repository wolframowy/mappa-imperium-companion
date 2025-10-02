export interface ExamplesProps {
  exampleTexts: string[]
}

export default function Examples({exampleTexts}: ExamplesProps) {
  return (
    <div className='max-w-lg'>
      <b>Examples</b>
      <ul className="list-disc list-inside">{exampleTexts.map((text) => (
        <li>
          {text}
        </li>
      ))}</ul>
    </div>
  )
}