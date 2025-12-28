import type { Route } from "./+types/home";
import json from "app/assets/text/0-Intro.json";
import Examples from "~/components/examples";
import Page from "~/components/page";
import Section from "~/components/section";

export default function Home({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-4">
        <div className="text-8xl">Mappa Imperium</div>
      </div>
      <Section noUnderline>A World Building Game for 1 or More Players</Section>
      <Section title={json["Game Components"].Title}>
        <Examples exampleTexts={json["Game Components"].List} />
      </Section>
      <Section title={json["Inspiration"].Title}>
        <Examples exampleTexts={json["Inspiration"].List} />
      </Section>
      <Section title={json["Play Online"].Title}>
        <Examples exampleTexts={json["Play Online"].List} />
      </Section>
    </Page>
  );
}
