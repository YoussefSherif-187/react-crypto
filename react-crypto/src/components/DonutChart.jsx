import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#6366F1", // indigo
  "#EC4899", // pink
  "#10B981", // green
  "#F59E0B", // yellow
  "#3B82F6", // blue
  "#EF4444", // red
  "#14B8A6", // teal
];

export const DonutChart = ({
  data,
  category,
  value,
  className = "",
  variant = "pie",
  valueFormatter = (v) => v,
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey={value}
            nameKey={category}
            innerRadius={80}
            outerRadius={120}
            paddingAngle={3}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(val) => valueFormatter(val)}
            labelFormatter={(label) => `${label}`}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
