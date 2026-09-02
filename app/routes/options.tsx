import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import Section from "~/components/section";
import Tooltip from "~/components/tooltip";
import { CONSTANTS } from "~/consts";

export default function Options() {
  const refPopup = useRef<typeof Popup>(null);
  const storedTableData = localStorage.getItem(CONSTANTS.STORAGE_KEY);
  const [customTableData, setCustomTableData] = useState(
    JSON.stringify(JSON.parse(storedTableData || "{}"), undefined, 2),
  );

  const importTableData = (data: string) => {
    try {
      // Validate JSON before saving
      localStorage.setItem(
        CONSTANTS.STORAGE_KEY,
        JSON.stringify(JSON.parse(data)),
      );
      setCustomTableData(data);
    } catch (error) {
      alert("Invalid JSON format. Please correct it before saving.");
    }
  };

  const tableEditArea = (
    <div className="w-full flex gap-1 p-2 bg-primary-dark rounded shadow-md inset-shadow-sm inset-shadow-primary-highlight border-l-8 border-l-accent-yellow">
      <textarea
        className="max-w-full w-full min-w-[60vw] h-100 min-h-[60vh] resize rounded-md bg-primary-light text-text-primary-muted p-1 focus:outline-none"
        placeholder="Enter JSON here"
        value={customTableData}
        onChange={(e) => setCustomTableData(e.target.value)}
      ></textarea>
      <div>
        <Tooltip tooltip={"Save"} direction="left">
          <button
            className={`w-6 h-6 rounded-md font-square transition-colors duration-200 text-neutral-100 bg-accent-red hover:bg-accent-red-highlight`}
            onClick={() => {
              importTableData(customTableData);
              refPopup.current?.close();
            }}
          >
            {"✓"}
          </button>
        </Tooltip>
        {customTableData !== "{}" && (
          <Tooltip tooltip="Reset to default" direction="left">
            <button
              className="w-6 h-6 rounded-md font-square bg-primary-highlight hover:bg-primary-light text-text-primary transition-colors duration-200 text-xs"
              onClick={() => {
                localStorage.removeItem(CONSTANTS.STORAGE_KEY);
                setCustomTableData("{}");
              }}
            >
              ↻
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Section title="Options">
        <Section
          title="Custom Table Data"
          noUnderline
          noShadow
          customClass="w-full"
        >
          <div>
            <p>
              Here you can view, edit and share your custom table data that you
              edited previously.
            </p>
            <p>
              If you want to use imported custom table data, edit and replace it
              here.
            </p>
            <p>
              If you want to reset to the default tables, you can do so by
              removing your custom table data by editing it and clicking the
              reset button.
            </p>
          </div>
          <div className="flex gap-2 py-1">
            <Popup
              ref={refPopup}
              trigger={
                <button
                  type="button"
                  className="w-max px-3 py-2 text-neutral-100 bg-accent-yellow hover:bg-accent-yellow-highlight rounded-lg shadow-lg hover:shadow-xl transition-opacity z-10 duration-300"
                >
                  {"Edit"}
                </button>
              }
              closeOnDocumentClick
              arrow={false}
              keepTooltipInside="body"
              modal
              repositionOnResize
              nested
            >
              {tableEditArea}
            </Popup>
            <button
              className="w-max px-3 py-2 text-neutral-100 bg-accent-yellow hover:bg-accent-yellow-highlight rounded-lg shadow-lg hover:shadow-xl transition-opacity z-10 duration-300"
              onClick={() => {
                navigator.clipboard.writeText(customTableData);
              }}
            >
              Copy to Clipboard
            </button>
          </div>
        </Section>
      </Section>
    </>
  );
}
