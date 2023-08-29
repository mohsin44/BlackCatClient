import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CompanyPage from "./Pages/CompanyPage";
import SalaryRecordPage from "./Pages/SalaryRecordPage";
import EmployeePage from "./Pages/EmployeePage";
import SettingsPage from "./Pages/SettingsPage";
import ProfilePage from "./Pages/ProfilePage";

const App = () => {
  return (
    <>
    <Router>
    <div className="flex min-h-screen">
    <Sidebar />

    <main className="bg-slate-100 flex-1">
    <Routes>
            <Route exact name="Dashboard" path="/" element={<Dashboard />} />
            <Route exact name="Company" path="/company" element={<CompanyPage />} />
            <Route exact name="Salary" path="/salary" element={<SalaryRecordPage />} />
            <Route exact name="Employee" path="/employee" element={<EmployeePage />} />
            <Route exact name="Settings" path="/settings" element={<SettingsPage />} />
            <Route exact name="Profile" path="/profile" element={<ProfilePage />} />
          </Routes>
    </main>
  </div>
  </Router>
  </>
    
  );
};

export default App;
