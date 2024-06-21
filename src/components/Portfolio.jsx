import { useState } from "react";
import { Icon } from "@iconify/react";

import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.jpg";
import project9 from "../assets/images/project-9.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("todo");
  const [isActive, setIsActive] = useState(false);

  const projects = [
    { id: 1, title: "TiendaLTE", category: "web", image: project1 },
    //{ id: 2, title: "Finance", category: "web", image: project2 },
    {
      id: 3,
      title: "Sistema de citas",
      category: "escritorio",
      image: project3,
    },
    { id: 4, title: "TrucksGPS", category: "móvil", image: project4 },
    {
      id: 5,
      title: "Sistema de Ventas",
      category: "escritorio",
      image: project5,
    },
    //{ id: 6, title: "MetaSpark", category: "escritorio", image: project6 },
    //{ id: 7, title: "Summary", category: "web", image: project7 },
    //{ id: 8, title: "Task Manager", category: "móvil", image: project8 },
    //{ id: 9, title: "Arrival", category: "web", image: project9 },
  ];

  const filterProjects = (category) => {
    setActiveFilter(category);
    setIsActive(false);
  };

  const filteredProjects =
    activeFilter === "todo"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <article className="text-gray-200 text-left">
      <header>
        <h2 className="text-gray-100 text-3xl font-bold">Portafolio</h2>
      </header>

      <div className="w-8 h-1 mt-2 mb-3 sm:mt-6 sm:mb-7 sm:w-10 sm:h-1.5 rounded-sm bg-sky-500"></div>

      <section>
        <ul className="hidden md:flex justify-start items-center gap-6 pl-2 mb-8">
          {["todo", "escritorio", "móvil", "web"].map((category) => (
            <li key={category}>
              <button
                onClick={() => filterProjects(category)}
                className={`text-sm transition-all duration-300 hover:text-gray-400 ${
                  activeFilter === category ? "text-sky-500" : "text-gray-300"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="relative md:hidden mb-8">
          <button
            className={`text-gray-300 flex justify-between items-center w-full px-4 py-3 border-zinc-700 border rounded-2xl text-sm font-light ${
              isActive ? "active" : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            <div className="capitalize">
              {activeFilter === "todo" ? "todo" : activeFilter}
            </div>
            <div>
              <Icon
                icon="uiw:down"
                className={`text-gray-300 transition-transform duration-300 ${
                  isActive ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          <ul
            className={`absolute top-full bg-zinc-900 mt-2 w-full p-2 border border-zinc-700 rounded-2xl z-20 ${
              isActive ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {["todo", "escritorio", "móvil", "web"].map((category) => (
              <li key={category}>
                <button
                  onClick={() => filterProjects(category)}
                  className={`bg-zinc-900 text-gray-300 text-start text-sm font-light capitalize w-full py-2 px-2.5 rounded-lg hover:bg-zinc-700 ${
                    activeFilter === category ? "font-semibold" : ""
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2.5">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className={`transition-transform duration-200 ease-in-out ${
                activeFilter === project.category || activeFilter === "todo"
                  ? "block animate-scaleUp"
                  : "hidden"
              }`}
              data-category={project.category}
            >
              <button className="w-full text-left">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <figure className="relative w-full rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-110">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
                      <div className="bg-zinc-700 rounded-xl p-4">
                        <Icon icon="ph:eye" className="text-sky-500 text-xl" />
                      </div>
                    </div>
                  </figure>
                </div>
                <h3 className="text-base capitalize leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm font-light text-gray-400">
                  {project.category}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
