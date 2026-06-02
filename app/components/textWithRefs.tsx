import Popup from "reactjs-popup";
import tableData from "~/assets/text/Tables.json";
import Table from "~/components/table";
import { useState, useEffect } from "react";
import { getLgQuery } from "~/util/mediaQueries";
import Accordion from "./accordion";

interface TextWithRefsProps {
  text: string;
}

export default function TextWithRefs({ text }: TextWithRefsProps) {
  const [isModal, setIsModal] = useState(getLgQuery()?.matches || false);

  useEffect(() => {
    const mediaQuery = getLgQuery();
    if (!mediaQuery) return;

    const handleChange = (e: MediaQueryListEvent) => {
      setIsModal(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  const refLinkPattern = /(\[.+?\]\(.+?\))/g;
  const capturingRegex = /\[(.+?)\]\((.+?)\)/;
  const parts = text.split(refLinkPattern);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(capturingRegex);
        if (match) {
          const displayText = match[1];
          const refId = match[2].replace("#", ""); // Remove '#' if present
          const tableKeys = Object.keys(tableData).filter((key) =>
            key.startsWith(refId),
          ) as (keyof typeof tableData)[]; // Get all tables starting with referenced in case of nested sections
          return (
            <Popup
              key={index}
              trigger={
                <button
                  type="button"
                  className="text-accent-red underline hover:text-accent-red-highlight cursor-pointer"
                >
                  {displayText}
                </button>
              }
              position="bottom center"
              closeOnDocumentClick
              arrow={false}
              keepTooltipInside="body"
              modal={isModal}
              nested
            >
              {
                ((close: () => void) => (
                  <div className="p-2 bg-primary-dark rounded shadow-md inset-shadow-sm inset-shadow-primary-highlight">
                    <div className="max-w-[80vw] lg:max-w-[40vw] max-h-[60vh] flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-2 bg-primary-dark">
                        <h2>
                          {displayText.charAt(0).toUpperCase() +
                            displayText.slice(1)}
                        </h2>
                        <button
                          type="button"
                          onClick={close}
                          className="shrink-0 text-accent-red hover:text-accent-red-highlight cursor-pointer leading-none"
                          aria-label="Close"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="overflow-auto p-1 flex flex-col gap-3">
                        {tableKeys.length === 1 ? (
                          <div className="px-1">
                            {tableData[tableKeys[0]].Title && (
                              <div className="font-bold text-lg mb-1 text-accent-red">
                                {tableData[tableKeys[0]].Title}
                              </div>
                            )}
                            <Table tableId={tableKeys[0]} autoSplit={true} />
                          </div>
                        ) : (
                          tableKeys.map((tableKey, index) => (
                            <div key={index}>
                              <Accordion
                                title={tableData[tableKey].Title ?? ""}
                              >
                                <Table tableId={tableKey} autoSplit={true} />
                              </Accordion>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                )) as unknown as React.ReactNode
              }
            </Popup>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
