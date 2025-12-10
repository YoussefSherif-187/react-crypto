"use client";

import { DonutChart } from "../components/DonutChart";
import { useBusinessData } from "../hooks/useBusinessData";

export const DonutChart2 = () => {
  const { data, loading } = useBusinessData();

  if (loading) return <p>Loading donut chart...</p>;

  // Convert your live API data → Donut chart format
  const chartData = data.map((coin) => ({
    name: coin.name,
    amount: coin.priceUsd, // or market cap if you prefer
  }));

  return (
    <DonutChart
      data={chartData}
      className="mx-auto"
      variant="pie"
      category="name"
      value="amount"
      valueFormatter={(number) =>
        `$${Intl.NumberFormat("us").format(number)}`
      }
    />
  );
};
