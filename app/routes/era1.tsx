import json from "app/assets/text/3-Era1.json";
import { Paragraph } from "~/components/paragraph";
import Section from "~/components/section";

export default function Era1() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      {/*Era 1*/}
      <Section title={json.Intro.Title} noUnderline main>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/*Create the lands*/}
      <Section title={json["1.1"].Title}>
        <Paragraph textHtml={json["1.1"].Text} />
      </Section>
      {/*Geography*/}
      <Section title={json["1.2"].Title}>
        <Paragraph textHtml={json["1.2"].Text} />
      </Section>
      {/*Touching up*/}
      <Section title={json["1.3"].Title}>
        <Paragraph textHtml={json["1.3"].Text} />
      </Section>
      {/*Resources & Special Sites*/}
      <Section title={json["1.4"].Title}>
        <Paragraph textHtml={json["1.4"].Text} />
      </Section>
    </div>
  );
}
