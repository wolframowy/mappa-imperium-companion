import Popup from "reactjs-popup";
import tableData from "app/assets/text/Tables.json";
import Table from "~/components/table";
import { useState, useEffect } from "react";
import { getLgQuery } from "~/util/mediaQueries";

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
            key.startsWith(refId)
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
            >
              <div className="py-2 bg-primary-dark rounded shadow-md inset-shadow-sm inset-shadow-primary-highlight ">
                <div className="max-w-[80vw] lg:max-w-[50vw] max-h-[60vh] p-2 overflow-y-auto flex flex-col gap-3">
                  <h2>
                    {displayText.charAt(0).toUpperCase() + displayText.slice(1)}
                  </h2>
                  {tableKeys.map((tableKey, index) => (
                    <div key={index}>
                      {index !== 0 && (
                        <hr className="border-primary-light mb-2" />
                      )}
                      <div className="flex gap-2">
                        {tableData[tableKey].Title && (
                          <div className="font-bold text-lg mb-1 text-accent-red">
                            {tableData[tableKey].Title}
                          </div>
                        )}
                      </div>
                      <Table tableData={tableData[tableKey]} autoSplit={true} />
                    </div>
                  ))}
                </div>
              </div>
            </Popup>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
