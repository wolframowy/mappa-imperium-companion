import { useContext, useEffect, useRef, useState } from "react";
import Table from "./table";
import { TableShelfContext } from "~/root";

export default function TableShelf() {
  const tableShelfRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { lookupTables, setLookupTables } = useContext(TableShelfContext) || {
    lookupTables: [],
    setLookupTables: () => {},
  };

  useEffect(() => {
    console.log("Lookup Tables:", lookupTables.length);
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
    <div
      ref={tableShelfRef}
      className={`absolute flex bg-primary right-0 top-3 h-10 sm:h-[60%] min-w-[50px] max-w-[90%] md:max-w-[60%] border-primary-light border-1 rounded-tl-xl rounded-bl-xl
        transition-transform duration-300 ease-in-out ${isExpanded ? "translate-x-0 h-[60%]" : "translate-x-[calc(100%-20px)]"}`}
    >
      <button
        className={"p-0.5 self-stretch flex items-start"}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? ">" : "<"}
      </button>
      {/* List of tables */}
      <div className={"p-2 overflow-y-auto flex flex-col gap-3"}>
        {lookupTables.map((tableData, index) => (
          <div key={index}>
            <Table tableData={tableData} columnsNumber={2} addButton={false} />
            <button
              onClick={() =>
                setLookupTables(lookupTables.filter((_, i) => i !== index))
              }
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
