import json from "app/assets/text/6-Era4.json";
import tableData from "app/assets/text/Tables.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Sidenote from "~/components/sidenote";
import Table from "~/components/table";

export default function Era4() {
  return (
    <>
      {/* Era 4 */}
      <Section title={json.Intro.Title} main noUnderline>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/* Exploration Begins */}
      <Section title={json["4.1"].Title}>
        <Paragraph textHtml={json["4.1"].Text} />
        <Table tableData={tableData["4.1"]} />
      </Section>
      {/* Colonization */}
      <Section title={json["4.2"].Title}>
        <Paragraph textHtml={json["4.2"].Text} />
        <Table tableData={tableData["4.2"]} columnsNumber={2} />
        <Sidenote textHtml={json["4.2"].Sidenote} sidenoteType={"light"} />
      </Section>
      {/* Prosperity */}
      <Section title={json["4.3"].Title}>
        <Paragraph textHtml={json["4.3"].Text} />
        <Table tableData={tableData["4.3"]} columnsNumber={2} />
        <Paragraph textHtml={json["4.3"].BottomText} />
      </Section>
    </>
  );
}
