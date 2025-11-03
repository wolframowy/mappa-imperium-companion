import json from "app/assets/text/7-Era5.json";
import tableData from "app/assets/text/Tables.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Page from "~/components/page";
import Table from "~/components/table";

export default function Era5() {
  return (
    <Page>
      {/* Era 5 */}
      <Section title={json.Intro.Title} main noUnderline>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/* Worldwide Expansion */}
      <Section title={json["5.1"].Title}>
        <Paragraph textHtml={json["5.1"].Text} />
        <Table tableData={tableData["Age of Empires Table"]} />
      </Section>
      {/* Neighbors Develop*/}
      <Section title={json["5.2"].Title}>
        <Paragraph textHtml={json["5.2"].Text} />
        {/* Minor Faction */}
        <Section title={json["5.2"].MinorFaction} noUnderline>
          <Table tableData={tableData["Minor Faction"]} />
        </Section>
        {/* Tribe/Bandits/Pirates */}
        <Section title={json["5.2"].Tribe} noUnderline>
          <Table tableData={tableData["Tribe / Bandits / Pirates"]} />
        </Section>
        {/* Hive */}
        <Section title={json["5.2"].Hive} noUnderline>
          <Table tableData={tableData["Hive"]} />
        </Section>
        {/* Magic User */}
        <Section title={json["5.2"].MagicUser} noUnderline>
          <Table tableData={tableData["Magic User"]} />
        </Section>
        {/* Cult/Lair/Order */}
        <Section title={json["5.2"].Cult} noUnderline>
          <Table tableData={tableData["Cult / Lair / Order"]} />
        </Section>
        {/* Monster */}
        <Section title={json["5.2"].Monster} noUnderline>
          <Table tableData={tableData["Monster"]} />
        </Section>
      </Section>
    </Page>
  );
}
