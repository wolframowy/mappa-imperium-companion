import { useContext, useEffect, useRef, useState } from "react";
import Table from "./table";
import { TableShelfContext } from "~/root";
import Tooltip from "./tooltip";

export default function TableShelf() {
  const tableShelfRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { lookupTables, setLookupTables } = useContext(TableShelfContext) || {
    lookupTables: [],
    setLookupTables: () => {},
  };

  useEffect(() => {
    if (lookupTables.length === 0) {
      setIsExpanded(false);
    }
  }, [lookupTables]);

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        tableShelfRef.current &&
        !tableShelfRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [tableShelfRef, lookupTables, isExpanded]);

  if (lookupTables.length === 0) {
    return <></>;
  }
  return (
    // Overlay div to prevent horizontal scroll on mobile
    <div className="overflow-x-hidden pointer-events-none fixed invisible right-0 top-0 h-screen w-screen">
      <div
        ref={tableShelfRef}
        className={`absolute flex bg-primary pointer-events-auto visible right-0 top-3 min-w-[50px] max-w-[75%] md:max-w-[60%] border-primary-light border rounded-tl-xl rounded-bl-xl
        transition-[height translate] duration-300 ease-in-out ${isExpanded ? "translate-x-0 h-[60%]" : "translate-x-[calc(100%-20px)] h-[150px] sm:h-[60%]"}`}
      >
        <button
          className={
            "p-0.5 self-stretch flex flex-col items-center gap-2 bg-accent-yellow hover:bg-accent-yellow-highlight text-neutral-100 transition-colors duration-200 rounded-tl-xl rounded-bl-xl"
          }
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="font-square">{isExpanded ? ">" : "<"}</div>
          <div className="[writing-mode:vertical-rl] text-xs">Quick Access</div>
        </button>
        {/* List of tables */}
        <div
          className={
            "p-2 md:p-3 overflow-y-auto overflow-x-hidden flex flex-col gap-3"
          }
        >
          {lookupTables.map((tableData, index) => (
            <div key={index}>
              {index !== 0 && <hr className="border-primary-light mb-2" />}
              <div className="flex gap-2">
                <Tooltip
                  tooltip="Remove table from quick access"
                  direction="right"
                >
                  <button
                    className="w-6 h-6 rounded-md font-square bg-accent-red hover:bg-accent-red-highlight text-neutral-100 transition-colors duration-200"
                    onClick={() =>
                      setLookupTables(
                        lookupTables.filter((_, i) => i !== index)
                      )
                    }
                  >
                    -
                  </button>
                </Tooltip>
                {tableData.Title && (
                  <div className="font-bold text-lg mb-1 text-accent-red">
                    {tableData.Title}
                  </div>
                )}
              </div>
              <Table tableData={tableData} addButton={false} autoSplit={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
