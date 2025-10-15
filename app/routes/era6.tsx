import json from "app/assets/text/8-Era6.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Page from "~/components/page";

export default function Era6() {
  return (
    <Page>
      {/* Era 6 */}
      <Section title={json.Intro.Title} main noUnderline>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/* Final Era */}
      <Section title={json["6.1"].Title}>
        <Paragraph textHtml={json["6.1"].Text} />
        <div>Tabela</div>
      </Section>
      {/* Iconic Landmarks */}
      <Section title={json["6.2"].Title}>
        <Paragraph textHtml={json["6.2"].Text} />
      </Section>
      {/* Omens */}
      <Section title={json["6.3"].Title}>
        <Paragraph textHtml={json["6.3"].Text} />
        <div>Tabela</div>
      </Section>
      {/*Finalizing */}
      <Section title={json["6.4"].Title}>
        <Paragraph textHtml={json["6.4"].Text} />
      </Section>
    </Page>
  );
}
