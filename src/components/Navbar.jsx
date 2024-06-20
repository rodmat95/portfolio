import React, { useState } from "react";

// Importar Componentes
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState("About"); // Estado para controlar el componente activo

  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <article className="p-6">{renderComponent()}</article>

      <nav class="bg-zinc-800 bg-opacity-90 border border-zinc-700 rounded-tl-2xl rounded-tr-2xl fixed bottom-0 left-0 w-full z-50 lg:rounded-tl-none lg:rounded-bl-2xl lg:border-t-0 lg:border-r-0 lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:w-auto">
        <ul class="flex justify-center px-7 py-4 text-xs sm:text-base space-x-3 sm:space-x-7 font-semibold">
          <li>
            <button
              className={`text-gray-300 hover:text-gray-400 ${
                activeComponent === "About" ? "text-sky-500" : ""
              }`}
              onClick={() => setActiveComponent("About")}
            >
              Acerca de mí
            </button>
          </li>

          <li>
            <button
              className={`text-gray-300 hover:text-gray-400 ${
                activeComponent === "Resume" ? "text-sky-500" : ""
              }`}
              onClick={() => setActiveComponent("Resume")}
            >
              Currículum
            </button>
          </li>

          <li>
            <button
              className={`text-gray-300 hover:text-gray-400 ${
                activeComponent === "Portfolio" ? "text-sky-500" : ""
              }`}
              onClick={() => setActiveComponent("Portfolio")}
            >
              Portafolio
            </button>
          </li>

          <li>
            <button
              className={`text-gray-300 hover:text-gray-400 ${
                activeComponent === "Contact" ? "text-sky-500" : ""
              }`}
              onClick={() => setActiveComponent("Contact")}
            >
              Contáctame
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
