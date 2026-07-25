import json from "~/assets/text/0-Intro.json";
import { useNavigate } from "react-router";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-4">
        <div className="font-medieval text-7xl sm:text-8xl">Mappa Imperium</div>
      </div>
      <Section noUnderline>A World Building Game for 1 or More Players</Section>
      <Section title={json["Game Components"].Title}>
        <ul className="list-disc list-inside">
          {json["Game Components"].List.map((text, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: text }}></li>
          ))}
        </ul>
      </Section>
      <Section title={json["Inspiration"].Title}>
        <ul className="list-disc list-inside">
          {json["Inspiration"].List.map((text, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: text }}></li>
          ))}
        </ul>
      </Section>
      <Section title={json["Resources"].Title}>
        <Section title={json["Resources"].Map.Title} noUnderline noShadow>
          <Paragraph textHtml={json["Resources"].Map.Text} />
          <ul className="list-disc list-inside">
            {json["Resources"].Map.List.map((text, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: text }}></li>
            ))}
          </ul>
        </Section>
      </Section>
      <Section title={json["Play Online"].Title}>
        <ul className="list-disc list-inside">
          {json["Play Online"].List.map((text, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: text }}></li>
          ))}
        </ul>
      </Section>
      <BottomScrollButton
        onClick={() => navigate("/intro")}
        targetSelector="#mainPage"
        bottomPosition={200}
      >
        Intro
      </BottomScrollButton>
    </>
  );
}
