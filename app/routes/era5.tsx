import json from "~/assets/text/7-Era5.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Table from "~/components/table";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Era5() {
  const navigate = useNavigate();
  useEffect(() => {
    ReactGA.initialize("G-3S7MM56JKY");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }, []);
  return (
    <>
      {/* Era 5 */}
      <Section title={json.Intro.Title} main noUnderline id="5">
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      {/* Worldwide Expansion */}
      <Section title={json["5.1"].Title} id="5.1">
        <Paragraph textHtml={json["5.1"].Text} />
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
