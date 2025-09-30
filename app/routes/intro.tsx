import {Paragraph} from "~/components/paragraph";
import basics from "app/assets/text/Basics.json"

export default function Intro() {
  return (
    <div className="flex @md:flex-col flex-wrap px-5 py-6 gap-4 w-full h-full overflow-y-auto">
      <Paragraph title={'Basics'} text={basics.Entry} main/>
      <Paragraph title={'Setup'} text={basics.Setup} underline />
      <Paragraph title={'Solo Play'} text={basics.SoloPlay.Text} underline boldText={basics.SoloPlay.Bold} />
      <Paragraph title={'Multiplayer'} text={basics.Multiplayer} underline />
      <Paragraph title={'Drawing'} text={basics.Drawing} underline />
    </div>
  );
}
