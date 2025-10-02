import json from "app/assets/text/4-Era2.json"
import Section from "~/components/section";
import {Paragraph} from "~/components/paragraph";
import Examples from "~/components/examples";
import Sidenote from "~/components/sidenote";

export default function Era2() {
  return (
    <div className="flex @md:flex-col flex-wrap px-5 py-6 gap-4 w-full h-full overflow-y-auto">
      {/*Era 2*/}
      <Section title={json.Intro.Title} noUnderline main>
        <Paragraph textHtml={json.Intro.Text}/>
      </Section>
      {/*Number of deities*/}
      <Section title={json["2.1"].Title}>
        <Paragraph textHtml={json["2.1"].Text}/>
      </Section>
      {/*Domain*/}
      <Section title={json["2.2"].Title}>
        <Paragraph textHtml={json["2.2"].Text}/>
      </Section>
      {/*Symbol*/}
      <Section title={json["2.3"].Title}>
        <Paragraph textHtml={json["2.3"].Text}/>
      </Section>
      {/*Name*/}
      <Section title={json["2.4"].Title}>
        <Paragraph textHtml={json["2.4"].Text}/>
        <div className="mt-1">
          <div className="text-2xl"><b>{json.Random.Title}</b></div>
          <p>{json.Random.Text}</p>
        </div>
      </Section>
      {/*Sacred sites*/}
      <Section title={json["2.5"].Title}>
        <Paragraph textHtml={json["2.5"].Text}/>
        <Examples exampleTexts={json.Examples.List}/>
        <Sidenote textHtml={json.Sidenote} sidenoteType={'white'}/>
      </Section>
    </div>
  )
}