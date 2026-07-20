import { useState } from "react";
import { products, months } from "./data";
import { translations } from "./i18n";
import LanguageSelector from "./components/LanguageSelector";
import Dropdown from "./components/Dropdown";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import "./styles.css";

export default function App() {
  const [lang, setLang] = useState("fr");
  const [productId, setProductId] = useState("fresh");
  const [monthIndex, setMonthIndex] = useState(2);

  const t = translations[lang];
  const selectedProduct = products.find(p => p.id === productId);

  return (
    <div className="app">
      <header>
        <h1>{t.title}</h1>
        <LanguageSelector lang={lang} setLang={setLang} />
      </header>

      <main className="dashboard">
        <section>
          <h2>{t.lineTitle} : {lang === "fr" ? selectedProduct.frLabel : selectedProduct.enLabel}</h2>

          <Dropdown
            label={t.selectProduct}
            value={productId}
            onChange={setProductId}
            options={products.map(p => ({
              value: p.id,
              label: lang === "fr" ? p.frLabel : p.enLabel
            }))}
          />

          <LineChart lang={lang} product={selectedProduct} months={months} />
        </section>

        <section>
          <h2>{t.barTitle}</h2>

          <Dropdown
            label={t.selectMonth}
            value={monthIndex}
            onChange={v => setMonthIndex(Number(v))}
            options={months.map((m, idx) => ({
              value: idx,
              label: lang === "fr" ? m.fr : m.en
            }))}
          />

          <BarChart lang={lang} monthIndex={monthIndex} products={products} />
        </section>
      </main>

      <footer>
        <p>{t.explanation}</p>
      </footer>
    </div>
  );
}
