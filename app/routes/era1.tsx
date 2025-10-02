import {Paragraph} from "~/components/paragraph";
import json from "app/assets/text/3-Era1.json";
import json2 from "app/assets/text/4-Era2.json";
import Examples from "~/components/examples";

export default function era1() {
  return (
    <div className="flex @md:flex-col flex-wrap px-5 py-6 gap-4 w-full h-full overflow-y-auto">
      <Paragraph title={json.Intro.Title} textHtml={json.Intro.Text} noUnderline main/>
      <Paragraph title={json["1.1"].Title} textHtml={json["1.1"].Text} />
      <Paragraph title={json["1.2"].Title} textHtml={json["1.2"].Text} />
      <Paragraph title={json["1.3"].Title} textHtml={json["1.3"].Text} />
      <Paragraph title={json["1.4"].Title} textHtml={json["1.4"].Text} />
      <Examples exampleTexts={json2.Examples.Text} />
    </div>
  )
}