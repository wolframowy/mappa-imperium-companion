import json from "~/assets/text/1-Basics.json";
import { useNavigate } from "react-router";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import Section from "~/components/section";
import { Paragraph } from "~/components/paragraph";
import Sidenote from "~/components/sidenote";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-4">
        <div className="font-medieval text-7xl sm:text-8xl">Mappa Imperium</div>
      </div>
      <Section noUnderline>
        <div className="flex flex-col pt-3 ps-3 gap-2">
          <p className="text-lg">
            A World Building Game by <i>Nookrium</i>{" "}
            <a
              href="https://nookrium.itch.io/mappa-imperium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              Mappa Imperium on itch.io
            </a>
          </p>
          <p>
            <b>Gameplay Time</b>: 1.5-3 hours
          </p>
          <p>
            <b>Total Players</b>: 1 or more
          </p>
        </div>
        {/*Inspiration*/}
        <Section title={json["Inspiration"].Title} noUnderline noShadow>
          <ul className="list-disc list-inside">
            {json["Inspiration"].List.map((text, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: text }}></li>
            ))}
          </ul>
        </Section>
      </Section>
      <div className="grid lg:grid-cols-2 lg:auto-rows-fr gap-4">
        {/*Basics*/}
        <div className="row-span-3">
          <Section title={json.Intro.Title} noUnderline main>
            <Paragraph textHtml={json.Intro.Text} />
            <Sidenote textHtml={json.Sidenote} sidenoteType={"accent"} />
          </Section>
        </div>
        {/*Setup*/}
        <Section title={json.Setup.Title}>
          <Paragraph textHtml={json.Setup.Text} />
        </Section>
        {/*Game Components*/}
        <div className="row-span-2">
          <Section title={json["Game Components"].Title}>
            <Section noUnderline noShadow customClass="pb-0">
              <ul className="list-disc list-inside">
                {json["Game Components"].List.map((text, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></li>
                ))}
              </ul>
            </Section>
            <Section title={json["Play Online"].Title} noUnderline noShadow>
              <ul className="list-disc list-inside">
                {json["Play Online"].List.map((text, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></li>
                ))}
              </ul>
            </Section>
          </Section>
        </div>
      </div>
      <div className="grid lg:grid-rows-2 lg:auto-cols-fr lg:grid-flow-col gap-4">
        {/*Solo Play*/}
        <Section title={json.SoloPlay.Title}>
          <Paragraph textHtml={json.SoloPlay.Text} />
        </Section>
        {/*Multiplayer*/}
        <Section title={json.Multiplayer.Title}>
          <Paragraph textHtml={json.Multiplayer.Text} />
        </Section>
        {/*Drawing*/}
        <div className="row-span-2">
          <Section title={json.Drawing.Title}>
            <Paragraph textHtml={json.Drawing.Text} />
            <Paragraph textHtml={json["Resources"].Map.Text} />
            <ul className="list-disc list-inside">
              {json["Resources"].Map.List.map((text, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: text }}></li>
              ))}
            </ul>
          </Section>
        </div>
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
