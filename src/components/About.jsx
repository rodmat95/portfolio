import React from "react";
import CodificacionWeb from "../assets/images/codificacion-web.png";
import Codificacion from "../assets/images/codificacion.png";
import TelefonoInteligente from "../assets/images/telefono-inteligente.png";
import TorreDePcConfig from "../assets/images/torre-de-pc-config.png";

const About = () => {
  return (
    <article className="text-gray-200 text-left">
      <header>
        <h2 className="text-gray-100 text-3xl font-bold">Acerca de Mí</h2>
      </header>

      <div className="w-8 h-1 my-2 sm:my-6 sm:w-10 sm:h-1.5 rounded-sm bg-sky-500"></div>

      <section className="mb-10 font-light leading-6">
        <p className="text-sm sm:text-base mb-6">
          Soy un desarrollador full-stack motivado y orientado a resultados.
          Tengo una buena trayectoria en administración de bases de datos,
          implementación de servidores y diseño de interfaces.
        </p>

        <p className="text-sm sm:text-base mb-6">
          Mi experiencia abarca el desarrollo de aplicaciones web con PHP y
          Laravel, aplicaciones móviles con Java y Firebase, y software
          empresarial con C# .NET y Java. Destaco en el diseño de soluciones
          personalizadas que cumplen con los requisitos técnicos y ofrecen una
          experiencia de usuario de primera categoría.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-5">Que Puedo Hacer</h3>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <li className="flex sm:flex-row flex-col items-center sm:items-start space-x-4 bg-neutral-900 p-6 rounded-2xl border-t border-l border-zinc-700 text-xl">
            <div className="w-10 h-10 flex-shrink-0">
              <img src={CodificacionWeb} alt="Desarrollo Web" />
              {/* <Icon icon="icon-park-twotone:web-page" className="text-sky-500" /> */}
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-semibold">
                Desarrollo Web
              </h4>

              <p className="text-gray-300 font-light text-sm sm:text-base">
                Sitios web modernos y profesionales que potencian tu presencia
                digital.
              </p>
            </div>
          </li>

          <li className="flex sm:flex-row flex-col items-center sm:items-start space-x-4 bg-neutral-900 p-6 rounded-2xl border-t border-l border-zinc-700 text-xl">
            <div className="w-10 h-10 flex-shrink-0">
              <img src={Codificacion} alt="Software de Escritorio" />
              {/* <Icon icon="carbon:application-web" className="text-sky-500" /> */}
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-semibold">
                Software de Escritorio
              </h4>

              <p className="text-gray-300 font-light text-sm sm:text-base">
                Software de escritorio a medida para optimizar tu flujo de
                trabajo.
              </p>
            </div>
          </li>

          <li className="flex sm:flex-row flex-col items-center sm:items-start space-x-4 bg-neutral-900 p-6 rounded-2xl border-t border-l border-zinc-700 text-xl">
            <div className="w-10 h-10 flex-shrink-0">
              <img src={TelefonoInteligente} alt="Aplicaciones Android" />
              {/* <Icon icon="heroicons:device-phone-mobile-20-solid" className="text-sky-500" /> */}
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-semibold">
                Aplicaciones Android
              </h4>

              <p className="text-gray-300 font-light text-sm sm:text-base">
                Desarrollo de aplicaciones móviles innovadoras que alcanzan y
                conectan con millones de usuarios.
              </p>
            </div>
          </li>

          <li className="flex sm:flex-row flex-col items-center sm:items-start space-x-4 bg-neutral-900 p-6 rounded-2xl border-t border-l border-zinc-700 text-xl">
            <div className="w-10 h-10 flex-shrink-0">
              <img src={TorreDePcConfig} alt="Mantenimiento de Hardware" />
              {/* <Icon icon="streamline:computer-pc-desktop" className="text-sky-500" /> */}
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-semibold">
                Mantenimiento de Hardware
              </h4>

              <p className="text-gray-300 font-light text-sm sm:text-base">
                Soluciones rápidas y confiables para mantener tu hardware en
                óptimas condiciones.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/*
      <section>
        <h3>Testimonials</h3>

        <ul>
          <li>
            <div data-testimonials-item>
              <figure>
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 data-testimonials-title>Daniel lewis</h4>

              <div data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div data-testimonials-item>
              <figure>
                <img
                  src="./assets/images/avatar-2.png"
                  alt="Jessica miller"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 data-testimonials-title>Jessica miller</h4>

              <div data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div data-testimonials-item>
              <figure>
                <img
                  src="./assets/images/avatar-3.png"
                  alt="Emily evans"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 data-testimonials-title>Emily evans</h4>

              <div data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div data-testimonials-item>
              <figure>
                <img
                  src="./assets/images/avatar-4.png"
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 data-testimonials-title>Henry william</h4>

              <div data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <div data-modal-container>
        <div data-overlay></div>

        <section>
          <button data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div>
            <figure>
              <img
                src="./assets/images/avatar-1.png"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div>
            <h4 data-modal-title>Daniel lewis</h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <h3>Clients</h3>

        <ul>
          <li>
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="./assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="./assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="./assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="./assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="./assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
      */}
    </article>
  );
};

export default About;
