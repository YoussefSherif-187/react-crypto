import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const pageTitles = {
    '/': 'Dashboard',
    '/analytics': 'Analytics',
    '/settings': 'Settings',
  };

  const currentTitle = pageTitles[location.pathname] || 'Dashboard';

  return (
    <aside
      className="
        w-64 
        min-h-screen 
        bg-[#2C2C2C] 
        text-white 
        p-6 
        rounded-2xl 
        shadow-xl
        mt-4 ml-4 mb-4
        flex flex-col
      "
    >
<h1 className="text-2xl font-bold tracking-wide mb-8   uppercase">
        {currentTitle}
      </h1>

      <nav className="space-y-7">
        <a
          href="/"
          className="block px-4 py-3 rounded-xl bg-[#3A3A3A] hover:bg-slate-800 transition font-bold"
        >
          Dashboard
        </a>
        <a
          href="/analytics"
          className="block px-4 py-3 rounded-xl bg-[#3A3A3A] hover:bg-slate-800 transition font-bold"
        >
          Analytics
        </a>
        <a
          href="/settings"
          className="block px-4 py-3 rounded-xl bg-[#3A3A3A] hover:bg-slate-800 transition font-bold"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
