import React from "react";
import { DASHBOARD_MODES, getDashboardMode } from "../utils/dashboardMode";
import { useBusinessData } from "../hooks/useBusinessData";
import BitcoinLogo from "../assets/bitcoin.png";
import EthereumLogo from "../assets/Ethereum.png";
import TetherLogo from "../assets/Tether.png";
import BinanceLogo from "../assets/Binancecoin.png";
import SolanaLogo from "../assets/Solana.png";
import RippleLogo from "../assets/Ripple.png";
import CardanoLogo from "../assets/Cardano.png";
import DogecoinLogo from "../assets/Dogecoin.png";

const coinLogos = {
  bitcoin: BitcoinLogo,
  ethereum: EthereumLogo,
  tether: TetherLogo,
  binancecoin: BinanceLogo,
  solana: SolanaLogo,
  ripple: RippleLogo,
  cardano: CardanoLogo,
  dogecoin: DogecoinLogo,
};



const Dashboard = () => {
  const {
  data,
  loading,
  error,
  search,
  setSearch,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  lastUpdated,        
} = useBusinessData();

const [dashboardMode, setDashboardMode] = React.useState(getDashboardMode());


  return (
    <div className="flex flex-col gap-6">
    {/* Header */}
<div className="flex items-center justify-between gap-4">
  <div>
    <h2 className="text-2xl font-bold mb-1">Crypto Business Overview</h2>
    <p className="text-sm text-gray-600">
      Live BTC & altcoin prices (USD) powered by CoinGecko.
    </p>
  </div>

  {/* LAST UPDATED LABEL */}
  <div className="text-right">
    <p className="text-xs text-gray-500 uppercase tracking-wide">
      Last Updated
    </p>
    <p className="text-sm font-medium text-gray-800">
      {lastUpdated
        ? lastUpdated.toLocaleTimeString()
        : "Fetching..."}
    </p>
  </div>
</div>


      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Search</label>
          <input
            type="text"
            placeholder="Search by name or symbol..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Min Price (USD)</label>
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="e.g. 1000"
            className="border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Max Price (USD)</label>
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="e.g. 50000"
            className="border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>
      </div>

      {/* Status */}
      {loading && (
        <p className="text-sm text-gray-500">Loading crypto business data...</p>
      )}

      {error && (
        <p className="text-sm text-red-600 font-semibold">
          Error: {error}
        </p>
      )}


{/* COIN CARDS SECTION */}
{(dashboardMode === DASHBOARD_MODES.CARDS || dashboardMode === DASHBOARD_MODES.BOTH) && (

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
  {data.map((coin) => {
    const logo = coinLogos[coin.id];

    return (
      <div key={coin.id} className="group relative">
        {/* IMAGE */}
        <div className="aspect-square w-full rounded-md bg-gray-200 overflow-hidden lg:aspect-auto lg:h-80 flex items-center justify-center">
          {logo ? (
            <img
              src={logo}
              alt={`${coin.name} logo`}
              className="h-full w-50px object-cover group-hover:opacity-75 transition"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              No Image
            </div>
          )}
        </div>

        {/* TEXT SECTION */}
        <div className="mt-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg  text-gray-700">{coin.name}</h3>
              <p className="mt-1 text-lg text-gray-500">
                {coin.symbol.toUpperCase()}
              </p>
            </div>

            {/* PRICE */}
            <p className="text-lg font-medium text-gray-900">
              ${coin.priceUsd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>

)}



      {/* Table */}
      {(dashboardMode === DASHBOARD_MODES.TABLE || dashboardMode === DASHBOARD_MODES.BOTH) && (
<>
      {!loading && !error && (

        <div className="overflow-x-auto border rounded-2xl shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">
                  Symbol
                </th>
                <th className="px-4 py-3 text-right">Price (USD)</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No results match your filters.
                  </td>
                </tr>
              )}

              {data.map((coin) => (
                <tr
                  key={coin.id}
                  className="odd:bg-white even:bg-slate-50 hover:bg-slate-100 transition"
                >
                  <td className="px-4 py-3 font-semibold">{coin.name}</td>
                  <td className="px-4 py-3 uppercase hidden md:table-cell text-gray-600">
                    {coin.symbol}
                  </td>
                  <td className="px-4 py-3 text-right font-mono">
                    ${coin.priceUsd.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      )}
      </>
      )}
    </div>
  );
};

export default Dashboard;
