import json from "app/assets/text/6-Era4.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Sidenote from "~/components/sidenote";
import Table from "~/components/table";

export default function Era4() {
  return (
    <>
      {/* Era 4 */}
      <Section title={json.Intro.Title} main noUnderline id="4">
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/* Exploration Begins */}
      <Section title={json["4.1"].Title} id="4.1">
        <Paragraph textHtml={json["4.1"].Text} />
        <Table tableId="4.1" />
      </Section>
      {/* Colonization */}
      <Section title={json["4.2"].Title} id="4.2">
        <Paragraph textHtml={json["4.2"].Text} />
        <Table tableId="4.2" columnsNumber={2} />
        <Sidenote textHtml={json["4.2"].Sidenote} sidenoteType={"light"} />
      </Section>
      {/* Prosperity */}
      <Section title={json["4.3"].Title} id="4.3">
        <Paragraph textHtml={json["4.3"].Text} />
        <Table tableId="4.3" columnsNumber={2} />
        <Paragraph textHtml={json["4.3"].BottomText} />
      </Section>
    </>
  );
}
