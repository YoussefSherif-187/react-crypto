// src/hooks/useBusinessData.js
import { useEffect, useMemo, useState, useCallback } from "react";
import { fetchCryptoPrices, getDefaultCoinIds } from "../services/api";

export const useBusinessData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Search & filter state
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const coins = await fetchCryptoPrices(getDefaultCoinIds());
      setData(coins);
      setLastUpdated(new Date());              // 👈 HERE
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-refresh every 10 seconds
  useEffect(() => {
    loadData(); // initial load

    const interval = setInterval(() => {
      loadData();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [loadData]);

  const filteredData = useMemo(() => {
    return data.filter((coin) => {
      const matchesSearch =
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase());

      const meetsMin =
        minPrice === "" || coin.priceUsd >= Number(minPrice || 0);

      const meetsMax =
        maxPrice === "" || coin.priceUsd <= Number(maxPrice || Infinity);

      return matchesSearch && meetsMin && meetsMax;
    });
  }, [data, search, minPrice, maxPrice]);

  return {
    data: filteredData,
    loading,
    error,
    search,
    setSearch,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    reload: loadData,
    lastUpdated,                 
  };
};
