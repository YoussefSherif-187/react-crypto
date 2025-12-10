export const DASHBOARD_MODES = {
  CARDS: "cards",
  TABLE: "table",
  BOTH: "both",
};

const STORAGE_KEY = "dashboardDisplayMode";

export const getDashboardMode = () => {
  return localStorage.getItem(STORAGE_KEY) || DASHBOARD_MODES.BOTH;
};

export const setDashboardMode = (mode) => {
  localStorage.setItem(STORAGE_KEY, mode);
};
