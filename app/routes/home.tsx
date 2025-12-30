import type { Route } from "./+types/home";
import json from "app/assets/text/0-Intro.json";
import Page from "~/components/page";
import Section from "~/components/section";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-4">
        <div className="text-8xl">Mappa Imperium</div>
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
      <Section title={json["Play Online"].Title}>
        <ul className="list-disc list-inside">
          {json["Play Online"].List.map((text, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: text }}></li>
          ))}
        </ul>
      </Section>
    </>
  );
}
