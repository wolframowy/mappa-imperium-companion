import { useContext } from "react";
import { TableShelfContext } from "~/root";
import Tooltip from "./tooltip";

// 6 rows per column for autosplit. 6 is chosen because when d6 are used it creates pretty natural split behavior.
const MAX_ROWS_PER_COLUMN = 6;

export interface TableData {
  Header: string[];
  Rows: string[][];
}

export interface TableProps {
  tableData: TableData;
  columnsNumber?: number;
  addButton?: boolean;
  autoSplit?: boolean;
}

export default function Table({
  tableData,
  columnsNumber,
  addButton = true,
  autoSplit = false,
}: TableProps) {
  const { lookupTables, setLookupTables } = useContext(TableShelfContext) || {
    lookupTables: [],
    setLookupTables: () => {},
  };

  return (
    <div className="flex items-start max-w-full">
      {render(
        tableData,
        columnsNumber ||
          (autoSplit
            ? Math.ceil(tableData.Rows.length / MAX_ROWS_PER_COLUMN)
            : undefined)
      )}
      {addButton && (
        <Tooltip tooltip="Add table to quick access" direction="left">
          <button
            className="ml-2 w-6 h-6 rounded-md font-square bg-accent-green hover:bg-accent-yellow-highlight text-neutral-100 transition-colors duration-200"
            onClick={() => setLookupTables([...lookupTables, tableData])}
          >
            +
          </button>
        </Tooltip>
      )}
    </div>
  );
}

function render(tableData: TableData, columnsNumber?: number) {
  if (columnsNumber) {
    const tables = splitArrayToNChunks(tableData, columnsNumber);
    return (
      <div className="overflow-x-auto flex justify-around gap-5">
        {tables.map((table, index) => (
          <div key={index}>{renderTable(table)}</div>
        ))}
      </div>
    );
  } else {
    return renderTable(tableData);
  }
}

function renderTable(tableData: TableData) {
  return (
    <div className="overflow-x-auto mb-2 inset-shadow-sm inset-shadow-primary-highlight shadow-md dark:shadow-xl/40 rounded-md">
      <table className={`w-full text-left`}>
        <thead className="bg-primary-highlight dark:text-shadow-md">
          <tr>
            {tableData["Header"].map((item, index) => (
              <th key={index} scope="col" className="px-4 py-2">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData["Rows"].map((row, index) => {
            return (
              <tr key={index} className="odd:bg-primary even:bg-primary-light">
                {row.map((data, index) => (
                  <td
                    key={index}
                    className="first:text-center px-4 h-auto py-2"
                  >
                    {data}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function splitArrayToNChunks(tableData: TableData, colNumber: number) {
  const chunk = Math.ceil(tableData.Rows.length / colNumber);
  let result = [];
  for (let i = 0; i < colNumber; i++) {
    result.push({
      Header: tableData.Header,
      Rows: tableData.Rows.slice(i * chunk, (i + 1) * chunk),
    });
  }
  return result;
}
