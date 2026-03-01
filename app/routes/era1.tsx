import json from "app/assets/text/3-Era1.json";
import { useNavigate } from "react-router";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import { Paragraph } from "~/components/paragraph";
import Section from "~/components/section";
import Table from "~/components/table";

export default function Era1() {
  const navigate = useNavigate();
  return (
    <>
      {/*Era 1*/}
      <Section title={json.Intro.Title} noUnderline main id="1">
        <Paragraph textHtml={json.Intro.Text} />
      </Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/*Create the lands*/}
        <Section title={json["1.1"].Title} id="1.1">
          <Paragraph textHtml={json["1.1"].Text} />
          <Table tableId="1.1" />
        </Section>
        {/*Geography*/}
        <Section title={json["1.2"].Title} id="1.2">
          <Paragraph textHtml={json["1.2"].Text} />
          <Table tableId="1.2" columnsNumber={2} />
        </Section>
        {/*Touching up*/}
        <Section title={json["1.3"].Title} id="1.3">
          <Paragraph textHtml={json["1.3"].Text} />
        </Section>
        {/*Resources & Special Sites*/}
        <Section title={json["1.4"].Title} id="1.4">
          <Paragraph textHtml={json["1.4"].Text} />
        </Section>
      </div>
      <BottomScrollButton
        onClick={() => navigate("/era-2")}
        targetSelector={"#mainPage"}
        bottomPosition={200}
      >
        Era II
      </BottomScrollButton>
    </>
  );
}
