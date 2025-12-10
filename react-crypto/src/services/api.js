// src/services/api.js

// List of default coins we care about
const DEFAULT_COINS = [
  "bitcoin",
  "ethereum",
  "tether",
  "binancecoin",
  "solana",
  "ripple",
  "cardano",
  "dogecoin",
];

export const getDefaultCoinIds = () => DEFAULT_COINS;

// Fetch prices from CoinGecko simple price API
export const fetchCryptoPrices = async (coinIds = DEFAULT_COINS) => {
  const idsParam = coinIds.join(",");

  const url = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=${idsParam}&x_cg_demo_api_key=CG-xjAMW5aBJ511gBkRf524z6Mu`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch crypto prices");
  }

  const data = await res.json();

  // Transform the returned object into an array for easier rendering
  const result = Object.entries(data).map(([id, values]) => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    symbol: id.slice(0, 3).toUpperCase(),
    priceUsd: values.usd,
  }));

  return result;
};
