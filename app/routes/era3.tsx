import json from "app/assets/text/5-Era3.json";
import tableData from "app/assets/text/Tables.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Examples from "~/components/examples";
import Sidenote from "~/components/sidenote";
import Page from "~/components/page";
import Table from "~/components/table";

export default function Era3() {
  return (
    <Page>
      {/*Era 3*/}
      <Section title={json.Intro.Title} noUnderline main>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/*Prime faction*/}
      <Section title={json["3.1"].Title}>
        <Paragraph textHtml={json["3.1"].Text} />
        <Table tableData={tableData["3.1 Race Table"]} />
      </Section>
      {/*Faction development*/}
      <Section title={json["3.2"].Title} main noUnderline>
        <Paragraph textHtml={json["3.2"].Text} />
        {/*Symbol*/}
        <Section title={json["3.2"].Symbol.Title} noShadow>
          <Paragraph textHtml={json["3.2"].Symbol.Text} />
          <Table tableData={tableData["3.2 Symbol"]} />
        </Section>
        {/*Color*/}
        <Section title={json["3.2"].Color.Title} noShadow>
          <Paragraph textHtml={json["3.2"].Color.Text} />
          <Table tableData={tableData["Color"]} />
        </Section>
        {/*Theme*/}
        <Section title={json["3.2"].Theme.Title} noShadow>
          <Paragraph textHtml={json["3.2"].Theme.Text} />
          <Examples exampleTexts={json["3.2"].Theme.ExamplesList} noDisc />
        </Section>
        {/*Naming*/}
        <Section title={json["3.2"].Naming.Title} noShadow>
          <Paragraph textHtml={json["3.2"].Naming.Text} />
          <Table tableData={tableData["Faction Names"]} />
          <Examples exampleTexts={json["3.2"].Naming.ExamplesList} />
        </Section>
        {/*Leadership*/}
        <Section title={json["3.2"].Leadership.Title} noShadow>
          <Paragraph textHtml={json["3.2"].Leadership.Text} />
          <Examples exampleTexts={json["3.2"].Leadership.ExamplesList} />
        </Section>
        <Sidenote textHtml={json["3.2"].Sidenote} sidenoteType={"light"} />
      </Section>
      {/*Neighbours*/}
      <Section title={json["3.3"].Title}>
        <Paragraph textHtml={json["3.3"].Text} />
        <Section title={json["3.3"].Neighbors.Title} noShadow>
          <Table tableData={tableData["Neighbors Table"]} />
          <Paragraph textHtml={json["3.3"].Neighbors.Text} />
        </Section>
        <Sidenote
          textHtml={json["3.3"].Neighbors.Sidenote}
          sidenoteType={"light"}
        />
      </Section>

      {/*Early settlers*/}
      <Section title={json["3.4"].Title}>
        <Paragraph textHtml={json["3.4"].Text} />
        <br />
        <div>
          <b>{json["3.4"].Roll}</b>
        </div>
        <Section title={json["3.4"].SettlementTable.Title} noShadow>
          <Table tableData={tableData["Settlement Table"]} />
        </Section>
      </Section>
    </Page>
  );
}
