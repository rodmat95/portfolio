import React from "react";

// Importar Componentes
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="flex flex-col xl:flex-row max-w-screen-xl mx-auto xl:items-start items-center xl:justify-center gap-6 py-16">
      <aside className="bg-zinc-900 border border-zinc-700 rounded-2xl w-3/4 h-full xl:sticky xl:top-16 xl:w-max">
        <Sidebar />
      </aside>

      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-3/4">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
