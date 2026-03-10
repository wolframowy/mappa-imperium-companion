import { useNavigate } from "react-router";
import { BottomScrollButton } from "~/components/bottomScrollButton";
import Section from "~/components/section";
import { version } from "~/../package.json";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <Section title={"About"} main>
        <Section noShadow>
          <p>App version: {version}</p>
          <p>
            Project page:{" "}
            <a
              href="https://github.com/wolframowy/mappa-imperium-companion"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            Any feedback or suggestions are welcome! Please provide them on the{" "}
            <a
              href="https://github.com/wolframowy/mappa-imperium-companion/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub issues page
            </a>
            .
          </p>
        </Section>
      </Section>
      <Section title={"Credits"}>
        <Section title={"Author"} noShadow noUnderline>
          <p>
            <a
              href="https://github.com/wolframowy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wolframowy
            </a>{" "}
            - developer by trade and Tabletop RPG Game master by heart. Trying
            to share with community what I find fun and helpful.
          </p>
        </Section>
        <Section title={"Contributors"} noShadow noUnderline>
          <p>Krecik, Kompanpawel</p>
        </Section>
        <Section title={"Game Content"} noShadow noUnderline>
          <p>
            <a
              href="https://nookrium.itch.io/mappa-imperium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mappa Imperium
            </a>{" "}
            - tables and text by Nookrium. Used with permission.
          </p>
        </Section>
      </Section>
      <Section title={"License"}>
        <p>
          This project is licensed under the{" "}
          <a
            href="https://opensource.org/license/gpl-3-0-only"
            target="_blank"
            rel="noopener noreferrer"
          >
            GPL-3.0 License
          </a>
          .
        </p>
      </Section>
    </>
  );
}
