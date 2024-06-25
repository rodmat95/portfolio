import { Icon } from "@iconify/react";
import miAvatar from "../assets/photos/my-avatar.jpeg";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [mostrarDatos, setMostrarDatos] = useState(false);

  // Maneja el estado basado en el tamaño de la pantalla
  useEffect(() => {
    const manejarResize = () => {
      if (window.innerWidth >= 1280) {
        setMostrarDatos(true);
      }
    };

    // Ejecutar al cargar
    manejarResize();

    // Agregar el listener para el resize
    window.addEventListener("resize", manejarResize);

    // Eliminar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", manejarResize);
    };
  }, []);

  const toggleMostrarDatos = () => {
    setMostrarDatos(!mostrarDatos);
  };

  return (
    <div className="relative text-gray-200 text-left">
      <div className="ml-4 sm:ml-8 xl:ml-0 space-x-4 sm:space-x-7 xl:space-x-0 xl:space-y-7 flex flex-row xl:flex-col items-center">
        <figure className="xl:mt-16 my-4 sm:my-7 xl:mb-0 bg-zinc-800 rounded-3xl overflow-hidden relative w-20 h-20 sm:w-28 sm:h-28 xl:w-36 xl:h-36 flex-shrink-0">
          <img src={miAvatar} alt="Rodrigo Chavarry" />
        </figure>

        <div className="xl:pb-7 text-left xl:text-center">
          <h1
            className="text-gray-100 text-lg sm:text-2xl font-medium pb-3 sm:pb-6"
            title="Rodrigo Chavarry"
          >
            Rodrigo Chavarry
          </h1>
          <p className="text-xs sm:text-sm py-1.5 px-2.5 bg-zinc-800 rounded-lg inline-block">
            Full stack developer
          </p>
        </div>

        <button
          onClick={toggleMostrarDatos}
          className="xl:hidden bg-neutral-900 bg-gradient-to-br hover:from-sky-300 hover:via-neutral-900 hover:to-neutral-900 hover:border-sky-500 p-2 sm:p-3 rounded-bl-2xl rounded-tr-2xl border-t border-l border-zinc-700 text-sky-500 text-xs font-bold absolute top-0 right-0"
        >
          <span className="hidden sm:inline">Mostrar Datos</span>
          <Icon icon="uiw:down" className="text-sky-500 sm:hidden" />
        </button>
      </div>

      {mostrarDatos && (
        <div className="shadow-md">
          <div className="border-t border-zinc-700 mb-4 sm:mb-7 mx-4 sm:mx-7"></div>

          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 sm:gap-6 mx-4 sm:mx-7">
            <li className="flex items-center space-x-4">
              <div className="bg-neutral-900 p-1 sm:p-3 rounded-md border-t border-l border-zinc-700 flex text-xl">
                <Icon icon="mdi:email-outline" className="text-sky-500" />
              </div>
              <div className="">
                <p className="text-xs sm:text-base text-gray-400">Correo</p>
                <a
                  href="mailto:rodmat0905@gmail.com"
                  className="text-xs sm:text-base"
                >
                  rodmat0905@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="bg-neutral-900 p-1 sm:p-3 rounded-md border-t border-l border-zinc-700 flex text-xl">
                <Icon icon="quill:phone" className="text-sky-500" />
              </div>
              <div className="">
                <p className="text-xs sm:text-base text-gray-400">Teléfono</p>
                <a href="tel:+51982199257" className="text-xs sm:text-base">
                  +51 982-199-257
                </a>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="bg-neutral-900 p-1 sm:p-3 rounded-md border-t border-l border-zinc-700 flex text-xl">
                <Icon icon="ion:calendar-outline" className="text-sky-500" />
              </div>
              <div className="">
                <p className="text-xs sm:text-base text-gray-400">Cumpleaños</p>
                <time dateTime="2003-05-09" className="text-xs sm:text-base">
                  09 de Mayo, 2003
                </time>
              </div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="bg-neutral-900 p-1 sm:p-3 rounded-md border-t border-l border-zinc-700 flex text-xl">
                <Icon icon="mdi:map-marker-outline" className="text-sky-500" />
              </div>
              <div className="sm:space-y-0 space-y-1">
                <p className="text-xs sm:text-base text-gray-400">Ubicación</p>
                <address className="text-xs sm:text-base">
                  San Miguel, Lima, Perú
                </address>
              </div>
            </li>
          </ul>

          <div className="xl:hidden border-t border-zinc-700 mt-4 sm:mt-7 mx-4 sm:mx-7"></div>

          <ul className="flex space-x-4 justify-center py-4 sm:py-7">
            <li className="">
              <a
                href="https://github.com/rodmat95"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-2xl text-gray-400 hover:text-[#6e5494]"
              >
                <Icon icon="mdi:github" />
              </a>
            </li>
            <li className="">
              <a
                href="https://www.linkedin.com/in/rodrigochavarry/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-2xl text-gray-400 hover:text-[#0e76a8]"
              >
                <Icon icon="mdi:linkedin" />
              </a>
            </li>
            <li className="">
              <a
                href="https://bento.me/rodmat95"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-2xl text-gray-400 hover:text-[#788bff]"
              >
                <Icon icon="simple-icons:bento" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
