import React from 'react';

const Navbar = () => {
  return (
    <div className=" bg-[#2C2C2C] py-4 flex justify-center">
      <div className="flex gap-12">
        <a
          href="/"
          className="text-white px-5 py-2 rounded-md bg-[#3A3A3A] hover:bg-slate-800 text-lg transition"
        >
          Dashboard
        </a>

        <a
          href="/analytics"
          className="text-white px-5 py-2 rounded-md bg-[#3A3A3A] hover:bg-slate-800 text-lg transition"
        >
          Analytics
        </a>

        <a
          href="/settings"
          className="text-white px-5 py-2 rounded-md bg-[#3A3A3A] hover:bg-slate-800 text-lg transition"
        >
          Settings
        </a>
      </div>
    </div>
  );
};

export default Navbar;
