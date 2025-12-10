import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import "../src/app.css"
const App = () => {
  return (
    <div>
        <Navbar/>
            <div className="min-h-screen flex bg-slate-100 font-lato bg-[#E5E5E5]">

      <Sidebar/>

      <main className="flex-1 p-6 md:p-8 bg-white rounded-2xl 
        shadow-xl
        mt-10 ml-10 mb-10 mr-20
        flex flex-col">
        <Routes>

        <Route path="/" element={<Dashboard/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/settings" element={<Settings/>}/>

       </Routes>
</main>
    </div>

</div>
  )
}

export default App