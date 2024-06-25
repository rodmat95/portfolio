import { Icon } from "@iconify/react";
import Slider from "react-slick";

import Pdf from "../assets/pdfs/Cv - Rodrigo Chavarry.pdf";

const Resume = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 5500,
    cssEase: "linear",
    arrows: false,
    appendDots: (dots) => (
      <ul className="slick-dots">
        {dots.map((dot, index) => (
          <li key={index}>
            {dot.props.className.includes("slick-active") ? (
              <span className="mt-5 bg-sky-500 block h-2 w-2 rounded-full"></span>
            ) : (
              <span className="mt-5 bg-neutral-800 block h-2 w-2 rounded-full"></span>
            )}
          </li>
        ))}
      </ul>
    ),
  };

  return (
    <article className="text-gray-200 text-left">
      <header className="flex flex-row items-center gap-3">
        <h2 className="text-3xl font-bold">Currículum</h2>
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          <Icon icon="ic:round-link" className="hover:text-sky-500 text-3xl" />
        </a>
      </header>

      <div className="w-8 h-1 mt-2 mb-3 sm:mt-6 sm:mb-7 sm:w-10 sm:h-1.5 rounded-sm bg-sky-500"></div>

      <section className="mb-5">
        <ol className="relative">
          <li className="relative flex items-center gap-6 pb-5">
            <div className="after:absolute after:left-[5.5px] after:h-1/2 after:w-[1px] after:bg-sky-900 after:opacity-75 after:ml-2 sm:after:ml-4">
              <div className=" bg-neutral-900 p-1.5 sm:p-3 rounded-md sm:rounded-xl border-t border-l border-zinc-700">
                <Icon
                  icon="ion:book-outline"
                  className="text-sky-500 text-lg"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Educación</h3>
          </li>

          <li className="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div className="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-900 after:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">
                SENATI - Desarrollo de Software
              </h4>
              <span className="block text-xs sm:text-sm font-normal leading-none text-sky-500">
                Octubre 2021 — Junio 2024
              </span>
              <p className="text-sm sm:text-base font-light">
                Desarrollé una sólida base, con experiencia práctica en Java,
                JavaScript, SQL y Microsoft Azure. A través de proyectos reales
                y prácticas en empresas, apliqué metodologías ágiles y me
                enfoqué en la calidad del software. Además, desarrollé
                habilidades interpersonales esenciales para el trabajo en equipo
                y el liderazgo.
              </p>
            </div>
          </li>

          <li className="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div className="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-900 after:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">
                Ensamblaje, Mantenimiento y Reparación de PC y Laptops
              </h4>
              <span className="block text-xs sm:text-sm font-normal leading-none text-sky-500">
                Mayo 2023 — Junio 2023
              </span>
              <p className="text-sm sm:text-base font-light">
                Aprendí habilidades prácticas en el ensamblaje, configuración y
                mantenimiento preventivo/correctivo de computadoras de
                escritorio y portátiles, incluyendo la identificación y
                resolución de problemas de hardware y software.
              </p>
            </div>
          </li>

          <li className="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div className="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-900 after:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">
                Electrónica Básica
              </h4>
              <span className="block text-xs sm:text-sm font-normal leading-none text-sky-500">
                Junio 2023
              </span>
              <p className="text-sm sm:text-base font-light">
                Obtuve los conceptos básicos de electrónica, incluyendo
                circuitos, componentes, leyes fundamentales y herramientas de
                medición.
              </p>
            </div>
          </li>

          <li className="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">
                Netzun - Crea tu sitio web fácilmente con Wordpress
              </h4>
              <span className="block text-xs sm:text-sm font-normal leading-none text-sky-500">
                Abril 2024
              </span>
              <p className="text-sm sm:text-base font-light">
                Adquirí conocimientos prácticos para crear y personalizar sitios
                web y blogs utilizando WordPress, uno de los sistemas de gestión
                de contenido (CMS) más populares.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-5">
        <ol className="relative">
          <li className="relative flex items-center gap-6 pb-5">
            <div className="after:absolute after:left-[5.5px] after:h-1/2 after:w-[1px] after:bg-sky-900 after:opacity-75 after:ml-2 sm:after:ml-4">
              <div className=" bg-neutral-900 p-1.5 sm:p-3 rounded-md sm:rounded-xl border-t border-l border-zinc-700">
                <Icon
                  icon="mdi:work-outline"
                  className="text-sky-500 text-lg"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Experiencia</h3>
          </li>

          {/* 
          <li className="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div className="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-900 after:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">
                Hola mundo
              </h4>
              <span className="block text-xs sm:text-sm font-normal leading-none text-sky-500">
                Mes Año — Mes Año
              </span>
              <p className="text-sm sm:text-base font-light">
                Hola mundo.
              </p>
            </div>
          </li>
          */}

          <li className="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">
                BIO Business Intelligence Outsourcing
              </h4>
              <span className="block text-xs sm:text-sm font-normal leading-none text-sky-500">
                Diciembre 2021 — Octubre 2022
              </span>
              <p className="text-sm sm:text-base font-light">
                Me encargaba de atender la cartera de clientes de IziPay. Les
                daba la bienvenida con el speech establecido, respondía a sus
                solicitudes y consultas, les ofrecía soluciones personalizadas y
                adicionales, y me aseguraba de satisfacer sus necesidades de
                forma efectiva.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-5">
        <h3 className="text-xl sm:text-2xl font-bold mb-6">Mis habilidades</h3>
        <Slider {...settings}>
          <div className="bg-neutral-900 p-3 rounded-2xl border-t border-l border-zinc-700">
            <h4 className="text-center text-lg font-semibold m-0">Frond End</h4>
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center mt-4 gap-y-6">
              <li className="space-y-2">
                <p className="text-center">HTML5</p>
                <Icon icon="devicon:html5" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">CSS3</p>
                <Icon icon="devicon:css3" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Tailwind CSS</p>
                <Icon
                  icon="logos:tailwindcss-icon"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Bootstrap</p>
                <Icon
                  icon="logos:bootstrap"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">JavaScript</p>
                <Icon
                  icon="logos:javascript"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">React</p>
                <Icon icon="logos:react" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">SASS</p>
                <Icon icon="logos:sass" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">jQuery</p>
                <Icon icon="devicon:jquery" className="mx-auto text-2xl"></Icon>
              </li>
            </ul>
            {/*
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">HTML5</h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    90%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">
                    CSS3/SCSS/SASS
                  </h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    70%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">
                    JavaScript/React
                  </h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    55%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">
                    Bootstrap
                  </h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    75%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">
                    Tailwind CSS
                  </h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    85%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
            */}
          </div>

          <div className="bg-neutral-900 p-3 rounded-2xl border-t border-l border-zinc-700">
            <h4 className="text-center text-lg font-semibold m-0">Back End</h4>
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center mt-4 gap-y-6">
              <li className="space-y-2">
                <p className="text-center">PHP</p>
                <Icon icon="devicon:php" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Laravel</p>
                <Icon icon="logos:laravel" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Java</p>
                <Icon icon="logos:java" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">C#</p>
                <Icon icon="devicon:csharp" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">.NET</p>
                <Icon
                  icon="skill-icons:dotnet"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Node.js</p>
                <Icon icon="logos:nodejs" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Python</p>
                <Icon icon="logos:python" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">C++</p>
                <Icon
                  icon="logos:c-plusplus"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
            </ul>
            {/*
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">
                    PHP/Laravel
                  </h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    85%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">Python</h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    65%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">Java</h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    80%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">C#/.NET</h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    70%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">C++</h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    65%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </li>
            </ul>
            */}
          </div>

          <div className="bg-neutral-900 p-3 rounded-2xl border-t border-l border-zinc-700">
            <h4 className="text-center text-lg font-semibold m-0">
              Infraestructura de Datos
            </h4>
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center mt-4 gap-y-6">
              <li className="space-y-2">
                <p className="text-center">SQL Server</p>
                <Icon
                  icon="devicon:microsoftsqlserver"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">MySQL</p>
                <Icon icon="logos:mysql" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Firebase</p>
                <Icon icon="logos:firebase" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Microsoft Azure</p>
                <Icon
                  icon="logos:microsoft-azure"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">MongoDB</p>
                <Icon
                  icon="devicon:mongodb"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Google Cloud Platform</p>
                <Icon
                  icon="skill-icons:gcp-light"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Amazon Web Services</p>
                <Icon icon="logos:aws" className="mx-auto text-2xl"></Icon>
              </li>
            </ul>
            {/*
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">
                    SQL Server
                  </h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    85%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">MySQL</h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    80%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">MongoDB</h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    65%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </li>
            </ul>
            */}
          </div>

          <div className="bg-neutral-900 p-3 rounded-2xl border-t border-l border-zinc-700">
            <h4 className="text-center text-lg font-semibold m-0">
              Entornos de Desarrollo
            </h4>
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center mt-4 gap-y-6">
              <li className="space-y-2">
                <p className="text-center">Visual Studio Code</p>
                <Icon icon="devicon:vscode" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Android Studio</p>
                <Icon
                  icon="devicon:androidstudio"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">NetBeans</p>
                <img
                  width="24"
                  height="32"
                  src="https://img.icons8.com/color/48/apache-netbeans.png"
                  alt="NetBeans"
                  className="mx-auto scale-110"
                />
                {/* <Icon
                  icon="simple-icons:apachenetbeanside"
                  className="mx-auto text-2xl text-[#0066cc]"
                ></Icon> */}
              </li>
              <li className="space-y-2">
                <p className="text-center">Microsoft Visual Studio</p>
                <Icon
                  icon="devicon:visualstudio"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">XAMPP</p>
                <Icon icon="logos:xampp" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">USBWebserver</p>
                <Icon icon="logos:apache" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">IntelliJ IDEA</p>
                <Icon
                  icon="logos:intellij-idea"
                  className="mx-auto text-2xl"
                ></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">PyCharm</p>
                <Icon icon="logos:pycharm" className="mx-auto text-2xl"></Icon>
              </li>
              <li className="space-y-2">
                <p className="text-center">Notepad++</p>
                <img
                  width="24"
                  height="32"
                  alt="Notepad++"
                  src="https://tech-wiki.net/images/a/a8/Notepad%2B%2B_logo.png"
                  className="mx-auto scale-150"
                ></img>
                {/* <Icon
                  icon="simple-icons:notepadplusplus"
                  className="mx-auto text-2xl text-[#78cc54]"
                ></Icon> */}
              </li>
            </ul>
            {/*
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">Firebase</h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    65%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">
                    Microsoft Azure
                  </h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    60%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="text-sm sm:text-base font-medium">
                    Amazon Web Services
                  </h5>
                  <data className="text-sm sm:text-base text-gray-400">
                    50%
                  </data>
                </div>
                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
            </ul>
            */}
          </div>
        </Slider>
      </section>
    </article>
  );
};

export default Resume;
