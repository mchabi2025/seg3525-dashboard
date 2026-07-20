import { BarChart as BC, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function BarChart({ lang, monthIndex, products }) {
  const chartData = products.map(p => ({
    name: lang === "fr" ? p.frLabel : p.enLabel,
    value: p.values[monthIndex]
  }));

  return (
    <BC width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#4dabf7" />
    </BC>
  );
}
