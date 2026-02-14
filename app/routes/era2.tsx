import json from "app/assets/text/4-Era2.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Examples from "~/components/examples";
import Sidenote from "~/components/sidenote";
import Table from "~/components/table";

export default function Era2() {
  return (
    <>
      {/*Era 2*/}
      <Section title={json.Intro.Title} noUnderline main id="2">
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/*Number of deities*/}
        <Section title={json["2.1"].Title} id="2.1">
          <Paragraph textHtml={json["2.1"].Text} />
          <Table tableId="2.1" />
        </Section>
        {/*Domain*/}
        <Section title={json["2.2"].Title} id="2.2">
          <Paragraph textHtml={json["2.2"].Text} />
          <Table tableId="2.2" />
        </Section>
        {/*Symbol*/}
        <Section title={json["2.3"].Title} id="2.3">
          <Paragraph textHtml={json["2.3"].Text} />
          <Table tableId="2.3" />
        </Section>
        {/*Name*/}
        <Section title={json["2.4"].Title} id="2.4">
          <Paragraph textHtml={json["2.4"].Text} />
          <div className="mt-1">
            <div className="text-2xl">
              <b>{json.Random.Title}</b>
            </div>
            <p>{json.Random.Text}</p>
          </div>
          <Table tableId="2.4" />
        </Section>
      </div>
      {/*Sacred sites*/}
      <Section title={json["2.5"].Title} id="2.5">
        <Paragraph textHtml={json["2.5"].Text} />
        <Examples exampleTexts={json.Examples.List} />
        <Table tableId="2.5" columnsNumber={2} />
        <Sidenote textHtml={json.Sidenote} sidenoteType={"light"} />
      </Section>
    </>
  );
}
