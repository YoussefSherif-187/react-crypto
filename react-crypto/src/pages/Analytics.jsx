import React from 'react'
import { BarChart5 } from "../components/BarChart5";
import { DonutChart2 } from "../components/DonutChart2";


const Analytics = () => {
  return (
    <div>

<div className="mt-6">
  <h2 className="text-xl font-bold mb-4">Crypto Price Chart</h2>
  <BarChart5 />
</div>

<div className="mt-10">
  <h2 className="text-xl font-bold mb-4">Crypto Distribution (Donut Chart)</h2>
  <DonutChart2 />
</div>

      
    </div>
  )
}

export default Analytics