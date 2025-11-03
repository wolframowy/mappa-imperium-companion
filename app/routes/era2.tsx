import json from "app/assets/text/4-Era2.json";
import tableData from "app/assets/text/Tables.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Examples from "~/components/examples";
import Sidenote from "~/components/sidenote";
import Page from "~/components/page";
import Table from "~/components/table";

export default function Era2() {
  return (
    <Page>
      {/*Era 2*/}
      <Section title={json.Intro.Title} noUnderline main>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/*Number of deities*/}
        <Section title={json["2.1"].Title}>
          <Paragraph textHtml={json["2.1"].Text} />
          <Table tableData={tableData["2.1 Number of deities"]} />
        </Section>
        {/*Domain*/}
        <Section title={json["2.2"].Title}>
          <Paragraph textHtml={json["2.2"].Text} />
          <Table tableData={tableData["2.2 Domain"]} />
        </Section>
        {/*Symbol*/}
        <Section title={json["2.3"].Title}>
          <Paragraph textHtml={json["2.3"].Text} />
          <Table tableData={tableData["2.3 Symbol"]} />
        </Section>
        {/*Name*/}
        <Section title={json["2.4"].Title}>
          <Paragraph textHtml={json["2.4"].Text} />
          <div className="mt-1">
            <div className="text-2xl">
              <b>{json.Random.Title}</b>
            </div>
            <p>{json.Random.Text}</p>
          </div>
          <Table tableData={tableData["Random Name List"]} />
        </Section>
      </div>
      {/*Sacred sites*/}
      <Section title={json["2.5"].Title}>
        <Paragraph textHtml={json["2.5"].Text} />
        <Examples exampleTexts={json.Examples.List} />
        <Table tableData={tableData["2.5 Sacred Sites"]} columnsNumber={2} />
        <Sidenote textHtml={json.Sidenote} sidenoteType={"light"} />
      </Section>
    </Page>
  );
}
