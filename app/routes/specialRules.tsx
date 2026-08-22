import json from "~/assets/text/9-SpecialRules.json";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Table from "~/components/table";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function SpecialRules() {
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
      {/* Special Rules */}
      <Section title={json.Intro.Title} main noUnderline>
        {/* War */}
        <Section title={json.War.Title} noShadow>
          <Paragraph textHtml={json.War.Text} />
          <Table tableId="War" />
        </Section>
      </Section>
      {/* Neighbors Develop*/}
      <Section title={json["NeighborsDevelop"].Title} id="5.2">
        <Paragraph textHtml={json["NeighborsDevelop"].Text} />
        {/* Minor Faction */}
        <Section
          title={json["NeighborsDevelop"].MinorFaction}
          noUnderline
          noShadow
        >
          <Table tableId="7.2.1" />
        </Section>
        {/* Tribe/Bandits/Pirates */}
        <Section title={json["NeighborsDevelop"].Tribe} noUnderline noShadow>
          <Table tableId="7.2.2" />
        </Section>
        {/* Hive */}
        <Section title={json["NeighborsDevelop"].Hive} noUnderline noShadow>
          <Table tableId="7.2.3" />
        </Section>
        {/* Magic User */}
        <Section
          title={json["NeighborsDevelop"].MagicUser}
          noUnderline
          noShadow
        >
          <Table tableId="7.2.4" />
        </Section>
        {/* Cult/Lair/Order */}
        <Section title={json["NeighborsDevelop"].Cult} noUnderline noShadow>
          <Table tableId="7.2.5" />
        </Section>
        {/* Monster */}
        <Section title={json["NeighborsDevelop"].Monster} noUnderline noShadow>
          <Table tableId="7.2.6" />
        </Section>
      </Section>
      <BottomScrollButton
        onClick={() => navigate("/about")}
        targetSelector="#mainPage"
        bottomPosition={200}
      >
        About
      </BottomScrollButton>
    </>
  );
}
