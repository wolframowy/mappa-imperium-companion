import Tooltip from "./tooltip";
import { useContext } from "react";
import { AppContext, GameLengthEnum } from "~/root";
import allTablesData from "~/assets/text/Tables.json";
import { CONSTANTS } from "~/consts";

export default function GameLengthIndicator({ eraIdx }: { eraIdx: 0 | 1 | 2 }) {
  const { gameLength } = useContext(AppContext) || {
    gameLength: GameLengthEnum.Standard,
  };

  function getGameLengthCustomTable() {
    if (typeof window === "undefined") return null;
    try {
      const stored = localStorage.getItem(CONSTANTS.STORAGE_KEY);
      if (!stored) return null;
      const customTables = JSON.parse(stored);
      return customTables["0"] || null;
    } catch (error) {
      console.error("Error loading custom table data:", error);
      return null;
    }
  }

  function getSelGameLength(
    gameLengthEnum: GameLengthEnum,
    // 0 - Era 4, 1 - Era 5, 2 - Era 6
    era: 0 | 1 | 2,
  ) {
    // Get game length table, either custom or default
    const gemeLengthTable = getGameLengthCustomTable() || allTablesData["0"];
    const selIdx = gemeLengthTable.Header.findIndex(
      (header: string) => header === gameLengthEnum.toString(),
    );
    return gemeLengthTable.Rows[era][selIdx];
  }

  return (
    <Tooltip
      className="inline-block"
      tooltip="Number of times to roll based on selected game length"
      direction="right"
    >
      <span className="bg-accent-yellow px-1 text-neutral-100 rounded-xs hover:bg-accent-yellow-highlight">
        {getSelGameLength(gameLength, eraIdx)}
      </span>
    </Tooltip>
  );
}
