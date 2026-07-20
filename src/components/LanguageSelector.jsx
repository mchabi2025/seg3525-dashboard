export default function LanguageSelector({ lang, setLang }) {
  return (
    <div className="lang-selector">
      <button
        className={lang === "fr" ? "active" : ""}
        onClick={() => setLang("fr")}
      >
        Français
      </button>
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
      >
        English
      </button>
    </div>
  );
}
