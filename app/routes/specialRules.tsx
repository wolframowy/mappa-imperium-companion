import json from "app/assets/text/9-SpecialRules.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Page from "~/components/page";

export default function SpecialRules() {
  return (
    <Page>
      {/* Special Rules */}
      <Section title={json.Intro.Title} main noUnderline></Section>
      {/* War */}
      <Section title={json.War.Title}>
        <Paragraph textHtml={json.War.Text} />
        <div>Tabela</div>
      </Section>
      {/* Fallen Empires*/}
      <Section title={json.FallenEmpires.Title}>
        <Paragraph textHtml={json.FallenEmpires.Text} />
      </Section>
    </Page>
  );
}
