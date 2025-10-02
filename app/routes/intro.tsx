import {Paragraph} from "~/components/paragraph";
import json from "~/assets/text/1-Basics.json"

export default function Intro() {
  return (
    <div className="flex @md:flex-col flex-wrap px-5 py-6 gap-4 w-full h-full overflow-y-auto">
      <Paragraph title={json.Intro.Title} textHtml={json.Intro.Text} noUnderline main/>
      <Paragraph title={json.Setup.Title} textHtml={json.Setup.Text} />
      <Paragraph title={json.SoloPlay.Title} textHtml={json.SoloPlay.Text} />
      <Paragraph title={json.Multiplayer.Title} textHtml={json.Multiplayer.Text} />
      <Paragraph title={json.Drawing.Title} textHtml={json.Drawing.Text} />
    </div>
  );
}
