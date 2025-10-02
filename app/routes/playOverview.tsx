import {Paragraph} from "~/components/paragraph";
import json from "app/assets/text/2-PlayOverview.json"

export default function playOverview() {
  return (
    <div className="flex @md:flex-col flex-wrap px-5 py-6 gap-4 w-full h-full overflow-y-auto">
      <Paragraph title={json.Intro.Title} textHtml={json.Intro.Text} noUnderline main/>
      <Paragraph title={json.Era1.Title} textHtml={json.Era1.Text} />
      <Paragraph title={json.Era2.Title} textHtml={json.Era2.Text} />
      <Paragraph title={json.Era3.Title} textHtml={json.Era3.Text} />
      <Paragraph title={json.Era4.Title} textHtml={json.Era4.Text} />
      <Paragraph title={json.Era5.Title} textHtml={json.Era5.Text} />
      <Paragraph title={json.Era6.Title} textHtml={json.Era6.Text} />
      <Paragraph title={json.GameLength.Title} textHtml={json.GameLength.Text} />
    </div>
  )
}