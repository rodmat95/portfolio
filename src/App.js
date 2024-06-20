import React from "react";

// Importar Componentes
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="max-w-screen-xl mx-auto flex flex-col xl:flex-row items-center xl:items-start xl:justify-center gap-6 pt-4 pb-16 px-4 sm:px-0 sm:py-16">
      <aside className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full sm:w-3/4 h-full xl:sticky xl:top-16 xl:w-max">
        <Sidebar />
      </aside>

      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full sm:w-3/4">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
