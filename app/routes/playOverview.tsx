import { Paragraph } from "~/components/paragraph";
import json from "app/assets/text/2-PlayOverview.json";
import Section from "~/components/section";

export default function playOverview() {
  return (
    <div className="flex flex-col gap-5 px-5 py-6 w-full h-full overflow-y-auto">
      {/*Play Overview*/}
      <Section title={json.Intro.Title} noUnderline main>
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      <div className="grid lg:grid-rows-3 lg:grid-flow-col lg:auto-cols-fr gap-4">
        {/*Era 1*/}
        <Section title={json.Era1.Title}>
          <Paragraph textHtml={json.Era1.Text} />
        </Section>
        {/*Era 2*/}
        <Section title={json.Era2.Title}>
          <Paragraph textHtml={json.Era2.Text} />
        </Section>
        {/*Era 3*/}
        <Section title={json.Era3.Title}>
          <Paragraph textHtml={json.Era3.Text} />
        </Section>
        {/*Era 4*/}
        <Section title={json.Era4.Title}>
          <Paragraph textHtml={json.Era4.Text} />
        </Section>
        {/*Era 5*/}
        <Section title={json.Era5.Title}>
          <Paragraph textHtml={json.Era5.Text} />
        </Section>
        {/*Era 6*/}
        <Section title={json.Era6.Title}>
          <Paragraph textHtml={json.Era6.Text} />
        </Section>
      </div>
      {/*Game Length*/}
      <Section title={json.GameLength.Title}>
        <Paragraph textHtml={json.GameLength.Text} />
      </Section>
    </div>
  );
}
