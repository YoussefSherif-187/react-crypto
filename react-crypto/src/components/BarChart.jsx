import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const BarChart = ({
  data,
  index,
  categories,
  className = "",
  layout = "vertical",
  yAxisWidth = 60,
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart
          data={data}
          layout={layout}
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type={layout === "vertical" ? "number" : "category"} />
          <YAxis
            dataKey={index}
            type={layout === "vertical" ? "category" : "number"}
            width={yAxisWidth}
          />
          <Tooltip />

          {categories.map((cat, i) => (
            <Bar key={i} dataKey={cat} fill="#4F46E5" />
          ))}
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
};
