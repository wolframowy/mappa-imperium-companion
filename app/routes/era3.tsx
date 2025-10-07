import json from "app/assets/text/5-Era3.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Examples from "~/components/examples";
import Sidenote from "~/components/sidenote";

export default function Era3() {
  return (
    <div className="flex flex-col gap-5 px-5 py-6 w-full h-full overflow-y-auto">
      {/*Era 3*/}
      <Section title={json.Intro.Title} noUnderline main>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/*Prime faction*/}
      <Section title={json["3.1"].Title}>
        <Paragraph textHtml={json["3.1"].Text} />
      </Section>
      {/*Faction development*/}
      <Section title={json["3.2"].Title} main noUnderline>
        <Paragraph textHtml={json["3.2"].Text} />
        {/*Symbol*/}
        <Section title={json["3.2"].Symbol.Title}>
          <Paragraph textHtml={json["3.2"].Symbol.Text} />
        </Section>
        {/*Color*/}
        <Section title={json["3.2"].Color.Title}>
          <Paragraph textHtml={json["3.2"].Color.Text} />
        </Section>
        {/*Theme*/}
        <Section title={json["3.2"].Theme.Title}>
          <Paragraph textHtml={json["3.2"].Theme.Text} />
          <Examples exampleTexts={json["3.2"].Theme.ExamplesList} noDisc />
        </Section>
        {/*Naming*/}
        <Section title={json["3.2"].Naming.Title}>
          <Paragraph textHtml={json["3.2"].Naming.Text} />
          <Examples exampleTexts={json["3.2"].Naming.ExamplesList} />
        </Section>
        {/*Leadership*/}
        <Section title={json["3.2"].Leadership.Title}>
          <Paragraph textHtml={json["3.2"].Leadership.Text} />
          <Examples exampleTexts={json["3.2"].Leadership.ExamplesList} />
        </Section>
        <Sidenote textHtml={json["3.2"].Sidenote} sidenoteType={"light"} />
      </Section>
      {/*Neighbours*/}
      <Section title={json["3.3"].Title}>
        <Paragraph textHtml={json["3.3"].Text} />
        <Section title={json["3.3"].Neighbors.Title}>
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
        <Section title={json["3.4"].SettlementTable.Title}>
          <div>tabela</div>
        </Section>
      </Section>
    </div>
  );
}
