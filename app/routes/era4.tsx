import json from "app/assets/text/6-Era4.json"
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Sidenote from "~/components/sidenote";

export default function Era4() {
  return (
    <div className="flex flex-col gap-5 px-5 py-6 w-full h-full overflow-y-auto">
    {/* Era 4 */}
      <Section title={json.Intro.Title} main noUnderline>
        <Paragraph textHtml={json.Intro.Text}/>
      </Section>
      {/* Exploration Begins */}
      <Section title={json["4.1"].Title}>
        <Paragraph textHtml={json["4.1"].Text}/>
        <div>Tabela</div>
      </Section>
      {/* Colonization */}
      <Section title={json["4.2"].Title}>
        <Paragraph textHtml={json["4.2"].Text}/>
        <div>Tabela</div>
        <Sidenote textHtml={json["4.2"].Sidenote} sidenoteType={"light"}/>
      </Section>
      {/* Prosperity */}
      <Section title={json["4.3"].Title}>
        <Paragraph textHtml={json["4.3"].Text}/>
        <div>Tabela</div>
        <Paragraph textHtml={json["4.3"].BottomText}/>
      </Section>
    </div>
  )
}