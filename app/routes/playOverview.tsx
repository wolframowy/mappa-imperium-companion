import { Paragraph } from "~/components/paragraph";
import json from "~/assets/text/2-PlayOverview.json";
import { GameLengthEnum } from "~/root";
import Section from "~/components/section";
import Table from "~/components/table";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import { useNavigate } from "react-router";
import { AppContext } from "~/root";
import { useContext } from "react";

export default function PlayOverview() {
  const navigate = useNavigate();
  const { gameLength, setGameLength } = useContext(AppContext) || {
    gameLength: GameLengthEnum.Standard,
    setGameLength: () => {},
  };

  const gameLengthOptions = [
    GameLengthEnum.Short,
    GameLengthEnum.Standard,
    GameLengthEnum.Long,
    GameLengthEnum.Epic,
  ];

  return (
    <>
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
        <p>
          Here you can select the game length and it will be reflected in future
          eras.
        </p>
        <div className="flex items-center flex-wrap gap-8 px-3 py-2">
          {gameLengthOptions.map((val) => (
            <div className="flex items-center gap-1" key={val}>
              <input
                id={`gameLength-${val}`}
                type="radio"
                name="gameLengthGroup"
                value={val}
                checked={gameLength === val}
                onChange={() => setGameLength(val)}
                className="accent-accent-blue-highlight"
              />
              <label
                htmlFor={`gameLength-${val}`}
                className={`${gameLength === val && "text-text-primary-muted"}`}
              >
                {val}
              </label>
            </div>
          ))}
        </div>
        <Table tableId="0" />
      </Section>
      <BottomScrollButton
        onClick={() => navigate("/era-1")}
        targetSelector="#mainPage"
        bottomPosition={200}
      >
        Era I: Age of Creation
      </BottomScrollButton>
    </>
  );
}
