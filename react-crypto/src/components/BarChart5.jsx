"use client";
import { BarChart } from "../components/BarChart";   // ← FIXED

import { useBusinessData } from "../hooks/useBusinessData";

export const BarChart5 = () => {
  const { data, loading } = useBusinessData();

  if (loading) return <p>Loading chart...</p>;

  // Convert live coin data → BarChart format
  const chartData = data.map((coin) => ({
    name: coin.name,
    Price: coin.priceUsd,
  }));

  return (
    <BarChart
      className="h-64"
      data={chartData}
      index="name"
      categories={["Price"]}
      yAxisWidth={80}
      layout="vertical"
    />
  );
};
