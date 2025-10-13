export interface TableData {
  "Header": string[];
  "Rows": string[][];
}

export interface TableProps {
  tableData: TableData;
  columnsNumber?: number;
}

export default function Table({tableData, columnsNumber}: TableProps) {
  if (columnsNumber) {
    const tables = splitArrayToNChunks(tableData, columnsNumber);
    return (
      <div className="flex justify-around w-3/4">
        {tables.map((table, index) => (
          <div key={index} className="w-4/5 mr-5">
            {renderTable(table, columnsNumber)}
          </div>
        ))}
      </div>
    )
  } else {
    return renderTable(tableData);
  }
}

function renderTable(tableData: TableData, twoColumns?: number) {
  return (
    <div className="relative overflow-x-auto inset-shadow-sm inset-shadow-primary-highlight shadow-md">
      <table className={`w-full ${!twoColumns && "lg:w-1/2"} h-full text-left`}>
        <thead>
          <tr>
            {tableData["Header"].map((item, index) => (
              <th key={index} scope="col" className="first:pl-2">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {tableData["Rows"].map((row, index) => {
          return (
            <tr key={index} className="odd:bg-primary-dark even:bg-primary-light">
              {row.map((data, index) => (
                <td key={index} className="first:pl-4 h-auto py-2">
                  {data}
                </td>
              ))}
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

function splitArrayToNChunks(tableData: TableData, number: number) {
  let result = [];
  const arrayCopy = [...tableData.Rows];
  for (let i = number; i > 0; i--) {
    result.push({"Header": tableData.Header, "Rows": arrayCopy.splice(0, Math.ceil(arrayCopy.length / i))})
  }
  return result;
}