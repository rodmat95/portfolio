import { Icon } from "@iconify/react";
import Slider from "react-slick";

const Resume = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul style={{ color: "#0ea5e9" }}>
          {" "}
          {/* Establecemos el color de los puntos de navegación */}
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <article className="text-gray-200 text-left">
      <header>
        <h2 className="text-3xl font-bold">Currículum</h2>
      </header>

      <div className="w-8 h-1 my-2 sm:my-6 sm:w-10 sm:h-1.5 rounded-sm bg-sky-500"></div>

      <section class="mb-5">
        <ol className="relative">
          <li class="relative flex items-center gap-6 pb-5">
            <div class="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-300">
              <Icon icon="ion:book-outline" className="text-sky-500 text-lg" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                SENATI - Desarrollo de Software
              </h4>
              <span className="block text-sm font-normal leading-none text-sky-500">
                Octubre 2021 — Junio 2024
              </span>
              <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                Desarrollé una sólida base, con experiencia práctica en Java,
                JavaScript, SQL y Microsoft Azure. A través de proyectos reales
                y prácticas en empresas, apliqué metodologías ágiles y me
                enfoqué en la calidad del software. Además, desarrollé
                habilidades interpersonales esenciales para el trabajo en equipo
                y el liderazgo.
              </p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Ensamblaje y mantenimiento de PC
              </h4>
              <span className="block text-sm font-normal leading-none text-sky-500">
                Mayo 2023
              </span>
              <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                Adquirí habilidades prácticas en el ensamblaje, configuración y
                mantenimiento preventivo/correctivo de computadoras personales,
                incluyendo la identificación y resolución de problemas de
                hardware y software.
              </p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Electrónica Básica
              </h4>
              <span className="block text-sm font-normal leading-none text-sky-500">
                Junio 2023
              </span>
              <p className="text-base font-normal text-gray-400">
                Aprendí los conceptos básicos de electrónica, incluyendo
                circuitos, componentes, leyes fundamentales y herramientas de
                medición.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-5">
        <ol className="relative">
          <li class="relative flex items-center gap-6 pb-5">
            <div className="bg-neutral-900 p-1.5 sm:p-3 rounded-md sm:rounded-xl border-t border-l border-zinc-700">
              <Icon icon="mdi:work-outline" className="text-sky-500 text-lg" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </li>
          {/*<li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-sky-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                BIO Business Intelligence Outsourcing
              </h4>
              <span className="block text-sm font-normal leading-none text-sky-500">
                Diciembre 2021 - Octubre 2022
              </span>
              <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                Me encargaba de atender la cartera de clientes de IziPay. Les
                daba la bienvenida con el speech establecido, respondía a sus
                solicitudes y consultas, les ofrecía soluciones personalizadas y
                adicionales, y me aseguraba de satisfacer sus necesidades de
                forma efectiva.
              </p>
            </div>
          </li>*/}
          <li class="relative flex items-baseline gap-6 pb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                BIO Business Intelligence Outsourcing
              </h4>
              <span className="block text-sm font-normal leading-none text-sky-500">
                Diciembre 2021 - Octubre 2022
              </span>
              <p className="text-base font-normal text-gray-600 dark:text-gray-400">
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
        <h3 className="text-2xl font-bold mb-6">Mis habilidades</h3>
        <ul className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto overscroll-contain pb-5 custom-scrollbar">
          <li className="min-w-full">
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">HTML5</h5>
                  <data className="text-gray-400">90%</data>
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
                  <h5 className="font-medium">CSS3/SCSS/SASS</h5>
                  <data className="text-gray-400">70%</data>
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
                  <h5 className="font-medium">JavaScript (ES6+)</h5>
                  <data className="text-gray-400">55%</data>
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
                  <h5 className="font-medium">React</h5>
                  <data className="text-gray-400">50%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">Bootstrap</h5>
                  <data className="text-gray-400">75%</data>
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
                  <h5 className="font-medium">Tailwind CSS</h5>
                  <data className="text-gray-400">85%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </li>
          <li className="min-w-full">
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">HTML5</h5>
                  <data className="text-gray-400">90%</data>
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
                  <h5 className="font-medium">CSS3/SCSS/SASS</h5>
                  <data className="text-gray-400">70%</data>
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
                  <h5 className="font-medium">JavaScript (ES6+)</h5>
                  <data className="text-gray-400">55%</data>
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
                  <h5 className="font-medium">React</h5>
                  <data className="text-gray-400">50%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">Bootstrap</h5>
                  <data className="text-gray-400">75%</data>
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
                  <h5 className="font-medium">Tailwind CSS</h5>
                  <data className="text-gray-400">85%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </li>
          <li className="min-w-full">
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">HTML5</h5>
                  <data className="text-gray-400">90%</data>
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
                  <h5 className="font-medium">CSS3/SCSS/SASS</h5>
                  <data className="text-gray-400">70%</data>
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
                  <h5 className="font-medium">JavaScript (ES6+)</h5>
                  <data className="text-gray-400">55%</data>
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
                  <h5 className="font-medium">React</h5>
                  <data className="text-gray-400">50%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">Bootstrap</h5>
                  <data className="text-gray-400">75%</data>
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
                  <h5 className="font-medium">Tailwind CSS</h5>
                  <data className="text-gray-400">85%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </li>
          <li className="min-w-full">
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">HTML5</h5>
                  <data className="text-gray-400">90%</data>
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
                  <h5 className="font-medium">CSS3/SCSS/SASS</h5>
                  <data className="text-gray-400">70%</data>
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
                  <h5 className="font-medium">JavaScript (ES6+)</h5>
                  <data className="text-gray-400">55%</data>
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
                  <h5 className="font-medium">React</h5>
                  <data className="text-gray-400">50%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">Bootstrap</h5>
                  <data className="text-gray-400">75%</data>
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
                  <h5 className="font-medium">Tailwind CSS</h5>
                  <data className="text-gray-400">85%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </li>
          <li className="min-w-full">
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">HTML5</h5>
                  <data className="text-gray-400">90%</data>
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
                  <h5 className="font-medium">CSS3/SCSS/SASS</h5>
                  <data className="text-gray-400">70%</data>
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
                  <h5 className="font-medium">JavaScript (ES6+)</h5>
                  <data className="text-gray-400">55%</data>
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
                  <h5 className="font-medium">React</h5>
                  <data className="text-gray-400">50%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">Bootstrap</h5>
                  <data className="text-gray-400">75%</data>
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
                  <h5 className="font-medium">Tailwind CSS</h5>
                  <data className="text-gray-400">85%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </li>
          <li className="min-w-full">
            <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">HTML5</h5>
                  <data className="text-gray-400">90%</data>
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
                  <h5 className="font-medium">CSS3/SCSS/SASS</h5>
                  <data className="text-gray-400">70%</data>
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
                  <h5 className="font-medium">JavaScript (ES6+)</h5>
                  <data className="text-gray-400">55%</data>
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
                  <h5 className="font-medium">React</h5>
                  <data className="text-gray-400">50%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li className="space-y-2">
                <div className="flex flex-row gap-2">
                  <h5 className="font-medium">Bootstrap</h5>
                  <data className="text-gray-400">75%</data>
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
                  <h5 className="font-medium">Tailwind CSS</h5>
                  <data className="text-gray-400">85%</data>
                </div>

                <div className="bg-neutral-800 h-2 rounded-full">
                  <div
                    className="bg-sky-500 h-full rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <Slider {...settings}>
        <div className="min-w-full">
          <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
            {/* Contenido de la lista */}
          </ul>
        </div>
        <div className="min-w-full">
          <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
            {/* Contenido de la lista */}
          </ul>
        </div>
        <div className="min-w-full">
          <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
            {/* Contenido de la lista */}
          </ul>
        </div>
        <div className="min-w-full">
          <ul className="space-y-5 bg-neutral-900 p-5 sm:p-7 rounded-2xl border-t border-l border-zinc-700">
            {/* Contenido de la lista */}
          </ul>
        </div>
      </Slider>
    </article>
  );
};

export default Resume;
