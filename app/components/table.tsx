import { useContext, useEffect, useState, useMemo } from "react";
import { TableShelfContext } from "~/root";
import Tooltip from "./tooltip";
import TextWithRefs from "~/components/textWithRefs";
import allTablesData from "app/assets/text/Tables.json";
import debounce from "~/util/debounce";

// 6 rows per column for autosplit. 6 is chosen because when d6 are used it creates pretty natural split behavior.
const MAX_ROWS_PER_COLUMN = 6;
const MAX_CELL_LENGTH = 80;
const STORAGE_KEY = "mappa-imperium-custom-tables";

export interface TableData {
  Title?: string;
  Header: string[];
  Rows: string[][];
}

export interface TableProps {
  tableId: string;
  columnsNumber?: number;
  addButton?: boolean;
  autoSplit?: boolean;
}

// Load custom table data from localStorage
export function loadCustomTableData(tableId: string): TableData | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const customTables = JSON.parse(stored);
    return customTables[tableId] || null;
  } catch (error) {
    console.error("Error loading custom table data:", error);
    return null;
  }
}

export default function Table({
  tableId,
  columnsNumber,
  addButton = true,
  autoSplit = false,
}: TableProps) {
  const { lookupTables, setLookupTables } = useContext(TableShelfContext) || {
    lookupTables: [],
    setLookupTables: () => {},
  };

  // Save custom table data to localStorage
  const saveCustomTableData = (tableId: string, data: TableData) => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const customTables = stored ? JSON.parse(stored) : {};
      customTables[tableId] = data;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customTables));
      setHasCustomData(true);
    } catch (error) {
      console.error("Error saving custom table data:", error);
    }
  };

  // Reset table to default data
  const resetTableData = (tableId: string) => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const customTables = JSON.parse(stored);
      delete customTables[tableId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customTables));
      setHasCustomData(false);
    } catch (error) {
      console.error("Error resetting table data:", error);
    }
  };

  // Get default data from Tables.json
  const defaultTableData = allTablesData[tableId as keyof typeof allTablesData];

  // Load custom data if available, otherwise use default. Always fall back to a valid TableData.
  const [tableData, setTableData] = useState<TableData>(() => {
    const customData = loadCustomTableData(tableId);
    if (customData) {
      return customData;
    }

    if (defaultTableData) {
      return defaultTableData;
    }

    // Fallback to a safe empty table to avoid runtime crashes when tableId is missing.
    console.error(
      `Table data not found for tableId "${tableId}". ` +
        "Ensure this ID exists in Tables.json or custom table storage."
    );

    return {
      Title: `Missing table: ${tableId}`,
      Header: [],
      Rows: [],
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [areCellsSmallEnough, setAreCellsSmallEnough] = useState(false);
  const [hasCustomData, setHasCustomData] = useState(false);

  // Create debounced save function (500ms delay)
  const debouncedSave = useMemo(() => debounce(saveCustomTableData, 500), []);

  // Check if custom data exists for this table
  useEffect(() => {
    const customData = loadCustomTableData(tableId);
    setHasCustomData(!!customData);
  }, [tableId]);

  useEffect(() => {
    for (const row of tableData.Rows) {
      for (const cell of row) {
        if (cell.length > MAX_CELL_LENGTH) {
          setAreCellsSmallEnough(false);
          return;
        }
      }
    }
    setAreCellsSmallEnough(true);
  }, [tableData]);

  const handleCellEdit = (
    rowIndex: number,
    cellIndex: number,
    value: string
  ) => {
    const newRows = [...tableData.Rows];
    newRows[rowIndex] = [...newRows[rowIndex]];
    newRows[rowIndex][cellIndex] = value;
    const newData = { ...tableData, Rows: newRows };
    setTableData(newData);
    debouncedSave(tableId, newData);
  };

  const handleHeaderEdit = (headerIndex: number, value: string) => {
    const newHeader = [...tableData.Header];
    newHeader[headerIndex] = value;
    const newData = { ...tableData, Header: newHeader };
    setTableData(newData);
    debouncedSave(tableId, newData);
  };

  const handleTitleEdit = (value: string) => {
    const newData = { ...tableData, Title: value };
    setTableData(newData);
    debouncedSave(tableId, newData);
  };

  const handleReset = () => {
    resetTableData(tableId);
    setTableData(defaultTableData);
    setHasCustomData(false);
    setIsEditing(false);
  };

  return (
    <div className="flex items-start max-w-full">
      {render(
        tableData,
        isEditing,
        handleCellEdit,
        handleHeaderEdit,
        handleTitleEdit,
        columnsNumber ||
          (autoSplit && areCellsSmallEnough
            ? Math.ceil(tableData.Rows.length / MAX_ROWS_PER_COLUMN)
            : undefined)
      )}
      <div className="flex flex-col gap-1 ml-2">
        {addButton && (
          <Tooltip tooltip="Add table to quick access" direction="left">
            <button
              className="w-6 h-6 rounded-md font-square bg-accent-green hover:bg-accent-green-highlight text-neutral-100 transition-colors duration-200"
              onClick={() => setLookupTables([...lookupTables, tableId])}
            >
              +
            </button>
          </Tooltip>
        )}
        <Tooltip
          tooltip={isEditing ? "View mode" : "Edit mode"}
          direction="left"
        >
          <button
            className={`w-6 h-6 rounded-md font-square transition-colors duration-200 text-neutral-100 ${
              isEditing
                ? "bg-accent-red hover:bg-accent-red-highlight"
                : "bg-accent-yellow hover:bg-accent-yellow-highlight"
            }`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "✓" : "✎"}
          </button>
        </Tooltip>
        {hasCustomData && (
          <Tooltip tooltip="Reset to default" direction="left">
            <button
              className="w-6 h-6 rounded-md font-square bg-primary-highlight hover:bg-primary-light text-text-primary transition-colors duration-200 text-xs"
              onClick={handleReset}
            >
              ↻
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

function render(
  tableData: TableData,
  isEditing: boolean,
  handleCellEdit: (rowIndex: number, cellIndex: number, value: string) => void,
  handleHeaderEdit: (headerIndex: number, value: string) => void,
  handleTitleEdit: (value: string) => void,
  columnsNumber?: number
) {
  if (columnsNumber) {
    const tables = splitArrayToNChunks(tableData, columnsNumber);
    return (
      <div className="overflow-x-auto flex justify-around gap-5">
        {tables.map((table, index) => (
          <div key={index}>
            {renderTable(
              table,
              isEditing,
              handleCellEdit,
              handleHeaderEdit,
              handleTitleEdit,
              index * Math.ceil(tableData.Rows.length / columnsNumber)
            )}
          </div>
        ))}
      </div>
    );
  } else {
    return renderTable(
      tableData,
      isEditing,
      handleCellEdit,
      handleHeaderEdit,
      handleTitleEdit
    );
  }
}

function renderTable(
  tableData: TableData,
  isEditing: boolean,
  handleCellEdit: (rowIndex: number, cellIndex: number, value: string) => void,
  handleHeaderEdit: (headerIndex: number, value: string) => void,
  handleTitleEdit: (value: string) => void,
  rowOffset = 0
) {
  return (
    <div className="overflow-x-auto mb-2 inset-shadow-sm inset-shadow-primary-highlight shadow-md dark:shadow-md/40 rounded-md">
      {tableData.Title && isEditing && (
        <div className="px-4 py-2 bg-primary-highlight">
          <input
            type="text"
            value={tableData.Title}
            onChange={(e) => handleTitleEdit(e.target.value)}
            className="w-full bg-primary text-text-primary px-2 py-1 rounded border border-primary-light focus:outline-none focus:border-accent-yellow"
          />
        </div>
      )}
      <table className={`w-full text-left`}>
        <thead className="bg-primary-highlight dark:text-shadow-md">
          <tr>
            {tableData["Header"].map((item, index) => (
              <th key={index} scope="col" className="px-4 py-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleHeaderEdit(index, e.target.value)}
                    className="w-full bg-primary text-text-primary px-2 py-1 rounded border border-primary-light focus:outline-none focus:border-accent-yellow"
                  />
                ) : (
                  item
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData["Rows"].map((row, rowIndex) => {
            const actualRowIndex = rowOffset + rowIndex;
            return (
              <tr
                key={rowIndex}
                className="odd:bg-primary even:bg-primary-light"
              >
                {row.map((data, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="first:text-center px-4 h-auto py-2"
                  >
                    {isEditing ? (
                      <input
                        type="text"
                        value={data}
                        onChange={(e) =>
                          handleCellEdit(
                            actualRowIndex,
                            cellIndex,
                            e.target.value
                          )
                        }
                        className="w-full bg-primary-dark text-text-primary px-2 py-1 rounded border border-primary-light focus:outline-none focus:border-accent-yellow"
                      />
                    ) : (
                      <TextWithRefs text={data} />
                    )}
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
