import {Paragraph} from "~/components/paragraph";
import basics from "app/assets/text/Basics.json"

export default function Intro() {
  return (
    <div className="flex @md:flex-col flex-wrap px-5 py-6 gap-4 w-full h-full overflow-y-auto">
      <Paragraph title={basics.Entry.Title} text={basics.Entry.Text} main/>
      <Paragraph title={basics.Setup.Title} text={basics.Setup.Text} underline />
      <Paragraph title={basics.SoloPlay.Title} text={basics.SoloPlay.Text} underline bold />
      <Paragraph title={basics.Multiplayer.Title} text={basics.Multiplayer.Text} underline />
      <Paragraph title={basics.Drawing.Title} text={basics.Drawing.Text} underline />
    </div>
  );
}
