import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import Section from "~/components/section";
import Tooltip from "~/components/tooltip";
import { CONSTANTS } from "~/consts";
import toastMsg from "~/util/toastMsg";

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
      refPopup.current?.close();
    } catch (error) {
      toastMsg(
        "Invalid JSON format. Please correct it before saving.",
        "error",
      );
    }
  };

  const tableEditArea = (
    <div className="w-full flex flex-col gap-3 p-3 bg-primary-dark rounded shadow-md inset-shadow-sm inset-shadow-primary-highlight border-l-8 border-l-accent-yellow">
      <textarea
        className="max-w-full w-full min-w-[60vw] h-100 min-h-[60vh] resize rounded-md bg-primary-light text-text-primary-muted p-1 focus:outline-none"
        placeholder="Enter JSON here"
        value={customTableData}
        onChange={(e) => setCustomTableData(e.target.value)}
      ></textarea>
      <div className="flex flex-row-reverse gap-2">
        <button
          className="w-max px-3 py-2 text-neutral-100 bg-accent-green hover:bg-accent-green-highlight rounded-lg shadow-lg hover:shadow-xl transition-opacity z-10 duration-300"
          onClick={() => {
            importTableData(customTableData);
          }}
        >
          ✓ Save
        </button>
        <button
          className="w-max px-3 py-2 text-neutral-100 bg-accent-yellow hover:bg-accent-yellow-highlight rounded-lg shadow-lg hover:shadow-xl transition-opacity z-10 duration-300"
          onClick={() => {
            navigator.clipboard.writeText(customTableData);
          }}
        >
          Copy to Clipboard
        </button>
        {customTableData !== "{}" && (
          <button
            className="w-max px-3 py-2 text-neutral-100 bg-accent-red hover:bg-accent-red-highlight rounded-lg shadow-lg hover:shadow-xl transition-opacity z-10 duration-300"
            onClick={() => {
              localStorage.removeItem(CONSTANTS.STORAGE_KEY);
              setCustomTableData("{}");
            }}
          >
            ↻ Reset
          </button>
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
            >
              {tableEditArea}
            </Popup>
          </div>
        </Section>
      </Section>
    </>
  );
}
