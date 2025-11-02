export interface TableData {
  Header: string[];
  Rows: string[][];
}

export interface TableProps {
  tableData: TableData;
  columnsNumber?: number;
}

export default function Table({ tableData, columnsNumber }: TableProps) {
  if (columnsNumber) {
    const tables = splitArrayToNChunks(tableData, columnsNumber);
    return (
      <div className="flex justify-around gap-5">
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
    <div className="overflow-x-auto inset-shadow-sm inset-shadow-primary-highlight shadow-md rounded-md">
      <table className={`w-full text-left`}>
        <thead className="bg-primary-light">
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
