import { LineChart as LC, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function LineChart({ lang, product, months }) {
  const chartData = months.map((m, idx) => ({
    month: lang === "fr" ? m.fr : m.en,
    value: product.values[idx]
  }));

  return (
    <LC width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#2b8a3e" strokeWidth={3} />
    </LC>
  );
}
