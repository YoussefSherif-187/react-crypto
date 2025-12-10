import React, { useState, useEffect } from "react";
import { DASHBOARD_MODES, getDashboardMode, setDashboardMode } from "../utils/dashboardMode";

const Settings = () => {
  const [mode, setModeState] = useState(DASHBOARD_MODES.BOTH);

  useEffect(() => {
    setModeState(getDashboardMode());
  }, []);

  
  const handleModeChange = (e) => {
    const newMode = e.target.value;
    setModeState(newMode);
    setDashboardMode(newMode);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Settings</h2>

      <label className="block mb-2 text-sm font-semibold">Dashboard Display Mode:</label>

      <select
        value={mode}
        onChange={handleModeChange}
        className="border rounded-lg px-3 py-2 text-sm"
      >
        <option value={DASHBOARD_MODES.CARDS}>Cards Only</option>
        <option value={DASHBOARD_MODES.TABLE}>Table Only</option>
        <option value={DASHBOARD_MODES.BOTH}>Cards + Table</option>
      </select>
    </div>
  );
};

export default Settings;
