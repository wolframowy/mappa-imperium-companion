import json from "app/assets/text/9-SpecialRules.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Table from "~/components/table";

export default function SpecialRules() {
  return (
    <>
      {/* Special Rules */}
      <Section title={json.Intro.Title} main noUnderline>
        {/* War */}
        <Section title={json.War.Title} noShadow>
          <Paragraph textHtml={json.War.Text} />
          <Table tableId="War" />
        </Section>
        {/* Fallen Empires*/}
        <Section title={json.FallenEmpires.Title} noShadow>
          <Paragraph textHtml={json.FallenEmpires.Text} />
        </Section>
      </Section>
    </>
  );
}
