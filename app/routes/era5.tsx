import json from "app/assets/text/7-Era5.json";
import tableData from "app/assets/text/Tables.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Table from "~/components/table";

export default function Era5() {
  return (
    <>
      {/* Era 5 */}
      <Section title={json.Intro.Title} main noUnderline>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/* Worldwide Expansion */}
      <Section title={json["5.1"].Title}>
        <Paragraph textHtml={json["5.1"].Text} />
        <Table tableData={tableData["5.1"]} />
      </Section>
      {/* Neighbors Develop*/}
      <Section title={json["5.2"].Title}>
        <Paragraph textHtml={json["5.2"].Text} />
        {/* Minor Faction */}
        <Section title={json["5.2"].MinorFaction} noUnderline noShadow>
          <Table tableData={tableData["5.2.1"]} />
        </Section>
        {/* Tribe/Bandits/Pirates */}
        <Section title={json["5.2"].Tribe} noUnderline noShadow>
          <Table tableData={tableData["5.2.2"]} />
        </Section>
        {/* Hive */}
        <Section title={json["5.2"].Hive} noUnderline noShadow>
          <Table tableData={tableData["5.2.3"]} />
        </Section>
        {/* Magic User */}
        <Section title={json["5.2"].MagicUser} noUnderline noShadow>
          <Table tableData={tableData["5.2.4"]} />
        </Section>
        {/* Cult/Lair/Order */}
        <Section title={json["5.2"].Cult} noUnderline noShadow>
          <Table tableData={tableData["5.2.5"]} />
        </Section>
        {/* Monster */}
        <Section title={json["5.2"].Monster} noUnderline noShadow>
          <Table tableData={tableData["5.2.6"]} />
        </Section>
      </Section>
    </>
  );
}
