import json from "~/assets/text/7-Era5.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Table from "~/components/table";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import { useNavigate } from "react-router";
import GameLengthIndicator from "~/components/gameLengthIndicator";

export default function Era5() {
  const navigate = useNavigate();
  return (
    <>
      {/* Era 5 */}
      <Section title={json.Intro.Title} main noUnderline id="5">
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/* Worldwide Expansion */}
      <Section title={json["5.1"].Title} id="5.1">
        <p>All results can now be placed in any region on the map.</p>
        <p>
          Roll <GameLengthIndicator eraIdx={1} /> times in this Era for 60 years
          of advancement, using the Growing Empires Table below and recording
          the results.
        </p>
        <Table tableId="5.1" />
      </Section>
      <BottomScrollButton
        onClick={() => navigate("/era-6")}
        targetSelector="#mainPage"
        bottomPosition={200}
      >
        Era VI: Age of Collapse
      </BottomScrollButton>
    </>
  );
}
