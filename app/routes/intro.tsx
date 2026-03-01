import { Paragraph } from "~/components/paragraph";
import json from "~/assets/text/1-Basics.json";
import Section from "~/components/section";
import Sidenote from "~/components/sidenote";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import { useNavigate } from "react-router";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid lg:grid-rows-3 lg:grid-flow-col lg:auto-cols-fr gap-4">
        {/*Basics*/}
        <div className="row-span-2">
          <Section title={json.Intro.Title} noUnderline main>
            <Paragraph textHtml={json.Intro.Text} />
            <Sidenote textHtml={json.Sidenote} sidenoteType={"accent"} />
          </Section>
        </div>
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
      </div>
      <BottomScrollButton
        onClick={() => navigate("/play-overview")}
        targetSelector="#mainPage"
        bottomPosition={200}
      >
        Play Overview
      </BottomScrollButton>
    </>
  );
}
