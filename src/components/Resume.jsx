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

      <section class="mb-5">
        <ol className="relative">
          <li class="relative flex items-center gap-6 pb-5">
            <div class="after:absolute after:left-[5.5px] after:h-1/2 after:w-[1px] after:bg-sky-900 after:opacity-75 after:ml-2 sm:after:ml-4">
              <div class=" bg-neutral-900 p-1.5 sm:p-3 rounded-md sm:rounded-xl border-t border-l border-zinc-700">
                <Icon
                  icon="ion:book-outline"
                  className="text-sky-500 text-lg"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Educación</h3>
          </li>

          <li class="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div class="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-900 after:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
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

          <li class="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div class="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-900 after:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">
                Ensamblaje y mantenimiento de PC
              </h4>
              <span className="block text-xs sm:text-sm font-normal leading-none text-sky-500">
                Mayo 2023
              </span>
              <p className="text-sm sm:text-base font-light">
                Aprendí habilidades prácticas en el ensamblaje, configuración y
                mantenimiento preventivo/correctivo de computadoras personales,
                incluyendo la identificación y resolución de problemas de
                hardware y software.
              </p>
            </div>
          </li>

          <li class="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div class="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-900 after:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
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

          <li class="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
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
          <li class="relative flex items-center gap-6 pb-5">
            <div class="after:absolute after:left-[5.5px] after:h-1/2 after:w-[1px] after:bg-sky-900 after:opacity-75 after:ml-2 sm:after:ml-4">
              <div class=" bg-neutral-900 p-1.5 sm:p-3 rounded-md sm:rounded-xl border-t border-l border-zinc-700">
                <Icon
                  icon="mdi:work-outline"
                  className="text-sky-500 text-lg"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Experiencia</h3>
          </li>

          {/* 
          <li class="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div class="after:absolute after:left-[5.5px] after:h-full after:w-[1px] after:bg-sky-900 after:opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
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

          <li class="relative flex items-baseline gap-6 pb-5 ml-2 sm:ml-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-sky-500 rounded-full ring-4 ring-sky-900 ring-opacity-75"
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
                Diciembre 2021 - Octubre 2022
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
          <div className="min-w-full">
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
          </div>
          <div className="min-w-full">
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
          </div>
          <div className="min-w-full">
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
          </div>
          <div className="min-w-full">
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
          </div>
        </Slider>
      </section>
    </article>
  );
};

export default Resume;
