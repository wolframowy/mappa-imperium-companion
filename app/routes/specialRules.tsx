import json from "app/assets/text/9-SpecialRules.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";

export default function SpecialRules() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
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
    </div>
  );
}
