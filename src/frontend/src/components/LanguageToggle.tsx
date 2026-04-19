import { useLanguage } from "../hooks/use-language";
import type { Lang } from "../types";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="pill-toggle" data-ocid="language.toggle">
      <button
        type="button"
        onClick={() => setLang("en" as Lang)}
        data-ocid="language.en_button"
        data-active={lang === "en" ? "true" : "false"}
        className="pill-toggle-btn"
        aria-pressed={lang === "en"}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("bn" as Lang)}
        data-ocid="language.bn_button"
        data-active={lang === "bn" ? "true" : "false"}
        className="pill-toggle-btn"
        aria-pressed={lang === "bn"}
      >
        বাং
      </button>
    </div>
  );
}
