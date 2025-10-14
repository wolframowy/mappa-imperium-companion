import json from "app/assets/text/7-Era5.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Page from "~/components/page";

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
        <div>Tabela</div>
      </Section>
      {/* Neighbors Develop*/}
      <Section title={json["5.2"].Title}>
        <Paragraph textHtml={json["5.2"].Text} />
        {/* Minor Faction */}
        <Section title={json["5.2"].MinorFaction} noUnderline>
          <div>
            <b>1d6</b>
          </div>
          <div>Tabela</div>
        </Section>
        {/* Tribe/Bandits/Pirates */}
        <Section title={json["5.2"].Tribe} noUnderline>
          <div>
            <b>1d6</b>
          </div>
          <div>Tabela</div>
        </Section>
        {/* Hive */}
        <Section title={json["5.2"].Hive} noUnderline>
          <div>
            <b>1d6</b>
          </div>
          <div>Tabela</div>
        </Section>
        {/* Magic User */}
        <Section title={json["5.2"].MagicUser} noUnderline>
          <div>
            <b>1d6</b>
          </div>
          <div>Tabela</div>
        </Section>
        {/* Cult/Lair/Order */}
        <Section title={json["5.2"].Cult} noUnderline>
          <div>
            <b>1d6</b>
          </div>
          <div>Tabela</div>
        </Section>
        {/* Monster */}
        <Section title={json["5.2"].Monster} noUnderline>
          <div>
            <b>1d6</b>
          </div>
          <div>Tabela</div>
        </Section>
      </Section>
    </Page>
  );
}
