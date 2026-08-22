import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import Section from "~/components/section";
import Tooltip from "~/components/tooltip";
import { CONSTANTS } from "~/consts";

export default function Options() {
  const storedTableData = localStorage.getItem(CONSTANTS.STORAGE_KEY);
  const [customTableData, setCustomTableData] = useState(
    storedTableData
      ? JSON.stringify(JSON.parse(storedTableData || "{}"), undefined, 2)
      : "",
  );

  useEffect(() => {
    ReactGA.initialize("G-3S7MM56JKY");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }, []);

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

  return (
    <>
      <Section title="Options">
        <Section
          title="Custom Table Data"
          noUnderline
          noShadow
          customClass="w-full"
        >
          <div className="w-full flex gap-1">
            <textarea
              className="max-w-full w-full h-100 resize rounded-md bg-primary-light text-text-primary-muted p-1"
              value={customTableData}
              onChange={(e) => setCustomTableData(e.target.value)}
            ></textarea>
            <div>
              <Tooltip tooltip={"Save"} direction="left">
                <button
                  className={`w-6 h-6 rounded-md font-square transition-colors duration-200 text-neutral-100 bg-accent-red hover:bg-accent-red-highlight`}
                  onClick={() => importTableData(customTableData)}
                >
                  {"✓"}
                </button>
              </Tooltip>
              {!!customTableData && (
                <Tooltip tooltip="Reset to default" direction="left">
                  <button
                    className="w-6 h-6 rounded-md font-square bg-primary-highlight hover:bg-primary-light text-text-primary transition-colors duration-200 text-xs"
                    onClick={() => {
                      localStorage.removeItem(CONSTANTS.STORAGE_KEY);
                      setCustomTableData("");
                    }}
                  >
                    ↻
                  </button>
                </Tooltip>
              )}
            </div>
          </div>
        </Section>
      </Section>
    </>
  );
}
