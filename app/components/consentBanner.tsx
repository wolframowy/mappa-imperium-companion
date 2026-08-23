import ReactGA from "react-ga4";
import { useEffect, useState } from "react";

const CONSENT_KEY = "analytics_consent";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === null) {
      setVisible(true);
    } else if (stored === "granted") {
      // Restore consent for returning visitors without showing the banner
      ReactGA.gtag("consent", "update", { analytics_storage: "granted" });
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    ReactGA.gtag("consent", "update", { analytics_storage: "granted" });
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 sm:left-[var(--navbar-width-collapsed)] right-0 z-5 flex flex-col sm:flex-row
                 items-start sm:items-center justify-center gap-3 p-4
                 bg-primary inset-shadow-xs inset-shadow-primary-highlight shadow-lg"
    >
      <p className="text-sm text-text-primary">
        This site uses Google Analytics to count page visits. No personal data
        is gathered.{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-text-primary-muted"
        >
          Google's privacy policy
        </a>
      </p>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={handleDecline}
          className="px-3 py-1.5 text-sm bg-primary-light hover:bg-primary-highlight
                     transition-colors cursor-pointer"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="px-3 py-1.5 text-sm bg-accent-green hover:bg-accent-green-highlight
                     transition-colors cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
