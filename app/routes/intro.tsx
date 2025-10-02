import {Paragraph} from "~/components/paragraph";
import basics from "app/assets/text/Basics.json"

export default function Intro() {
  return (
    <div className="flex @md:flex-col flex-wrap px-5 py-6 gap-4 w-full h-full overflow-y-auto">
      <Paragraph title={basics.Entry.Title} textHtml={basics.Entry.Text} noUnderline main/>
      <Paragraph title={basics.Setup.Title} textHtml={basics.Setup.Text} />
      <Paragraph title={basics.SoloPlay.Title} textHtml={basics.SoloPlay.Text} />
      <Paragraph title={basics.Multiplayer.Title} textHtml={basics.Multiplayer.Text} />
      <Paragraph title={basics.Drawing.Title} textHtml={basics.Drawing.Text} />
    </div>
  );
}
