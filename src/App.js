import React from "react";

// Importar Componentes
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="max-w-[374px] sm:max-w-[629px] md:max-w-[759px] lg:max-w-[1014px] xl:max-w-[1269px] mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-4 sm:gap-6 pt-4 pb-16 px-4 sm:py-16 transition-all duration-300">
      <aside className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full h-full xl:min-w-max xl:sticky xl:top-16 xl:w-max">
        <Sidebar />
      </aside>

      <div className="max-w-screen-xs bg-zinc-900 border border-zinc-700 rounded-2xl w-full xl:w-3/4 xl:min-w-96">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
