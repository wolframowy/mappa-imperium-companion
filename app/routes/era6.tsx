import json from "app/assets/text/8-Era6.json";
import tableData from "app/assets/text/Tables.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Page from "~/components/page";
import Table from "~/components/table";

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
        <Table tableData={tableData["Age of Collapse Table"]} />
      </Section>
      {/* Iconic Landmarks */}
      <Section title={json["6.2"].Title}>
        <Paragraph textHtml={json["6.2"].Text} />
      </Section>
      {/* Omens */}
      <Section title={json["6.3"].Title}>
        <Paragraph textHtml={json["6.3"].Text} />
        <Table tableData={tableData["Omen Table"]} />
      </Section>
      {/*Finalizing */}
      <Section title={json["6.4"].Title}>
        <Paragraph textHtml={json["6.4"].Text} />
      </Section>
    </Page>
  );
}
