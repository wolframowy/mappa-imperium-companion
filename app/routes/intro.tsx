import { Paragraph } from "~/components/paragraph";
import json from "~/assets/text/1-Basics.json";
import Section from "~/components/section";
import Sidenote from "~/components/sidenote";
import Page from "~/components/page";

export default function Intro() {
  return (
    <Page>
      {/*Basics*/}
      <Section title={json.Intro.Title} noUnderline main>
        <Paragraph textHtml={json.Intro.Text} />
        <Sidenote textHtml={json.Sidenote} sidenoteType={"accent"} />
      </Section>
      {/*Setup*/}
      <Section title={json.Setup.Title}>
        <Paragraph textHtml={json.Setup.Text} />
      </Section>
      {/*Solo Play*/}
      <Section title={json.SoloPlay.Title}>
        <Paragraph textHtml={json.SoloPlay.Text} />
      </Section>
      {/*Multiplayer*/}
      <Section title={json.Multiplayer.Title}>
        <Paragraph textHtml={json.Multiplayer.Text} />
      </Section>
      {/*Drawing*/}
      <Section title={json.Drawing.Title}>
        <Paragraph textHtml={json.Drawing.Text} />
      </Section>
    </Page>
  );
}
