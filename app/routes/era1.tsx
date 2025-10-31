import json from "app/assets/text/3-Era1.json";
import tableData from "app/assets/text/Tables.json";
import Page from "~/components/page";
import { Paragraph } from "~/components/paragraph";
import Section from "~/components/section";
import Table from "~/components/table";

export default function Era1() {
  return (
    <Page>
      {/*Era 1*/}
      <Section title={json.Intro.Title} noUnderline main>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/*Create the lands*/}
      <Section title={json["1.1"].Title}>
        <Paragraph textHtml={json["1.1"].Text} />
        <Table tableData={tableData["1.1 Create the lands"]} />
      </Section>
      {/*Geography*/}
      <Section title={json["1.2"].Title}>
        <Paragraph textHtml={json["1.2"].Text} />
        <Table tableData={tableData["1.2 Geography"]} columnsNumber={2} />
      </Section>
      {/*Touching up*/}
      <Section title={json["1.3"].Title}>
        <Paragraph textHtml={json["1.3"].Text} />
      </Section>
      {/*Resources & Special Sites*/}
      <Section title={json["1.4"].Title}>
        <Paragraph textHtml={json["1.4"].Text} />
      </Section>
    </Page>
  );
}
