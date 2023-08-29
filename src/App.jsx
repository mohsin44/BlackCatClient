import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="bg-slate-100 flex-1">
        
        main
      </main>
    </div>
  );
};

export default App;
