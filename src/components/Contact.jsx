import { /*useEffect,*/ useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

//* API Keys
const KeyMap = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const keyMail = process.env.REACT_APP_EMAILJS_API_KEY;

//* IDs de emailjs
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  //* Dirección del mapa
  const dirección = "San Miguel 15086";

  //* URL del mapa
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${KeyMap}&q=${encodeURIComponent(
    dirección
  )}&region=PE`;

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const refForm = useRef();
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (data, event) => {
    //// console.log(data);
    event.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, refForm.current, keyMail)
      .then((result) => {
        console.log(result.text);
        setEnviado(true);
      })
      .catch((error) => {
        console.error(error);
        //? Aquí podrías manejar errores si es necesario
      });
  };

  const checkbox = watch("checkbox");

  return (
    <article className="text-gray-200 text-left">
      <header>
        <h2 className="text-3xl font-bold">Contácteme</h2>
      </header>

      <div className="w-8 h-1 mt-2 mb-3 sm:mt-6 sm:mb-7 sm:w-10 sm:h-1.5 rounded-sm bg-sky-500"></div>

      <section
        className="relative h-[250px] sm:h-[380px] w-full rounded-md sm:rounded-lg mb-6 border border-zinc-700 overflow-hidden"
        data-mapbox
      >
        <figure className="h-full">
          <iframe
            title="Google Maps"
            className="w-full h-full border-none filter grayscale invert"
            src={mapEmbedUrl}
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section>
        <h3 className="text-xl sm:text-2xl font-bold">
          Formulario de contacto
        </h3>

        <form
          ref={refForm}
          onSubmit={handleSubmit(onSubmit)}
          className="py-6 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative grid gap-2">
              <input
                name="fullName"
                type="text"
                inputMode="text"
                autoComplete="name"
                {...register("fullName", {
                  required: "Este campo es obligatorio.",
                  pattern: {
                    value:
                      /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+)*$/,
                    message:
                      "Debe ingresar su nombre y apellido, iniciando con mayúsculas.",
                  },
                })}
                className={`h-min py-3 px-5 text-xs sm:text-base font-normal bg-zinc-900 border rounded-xl outline-none ${
                  errors.fullName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500 shake"
                    : "border-zinc-700 focus:border-sky-500 focus:ring-sky-500"
                }`}
                placeholder=" "
              />
              <label
                className={`placeholder absolute top-3 left-4 px-1 text-gray-400 text-xs sm:text-base font-medium transition-all duration-300 pointer-events-none ${
                  errors.fullName ? "shake" : ""
                }`}
              >
                Nombre completo
              </label>
              {errors.fullName && (
                <span className="text-red-500 text-xs">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            <div className="relative grid gap-2">
              <input
                name="email"
                type="email"
                inputMode="email"
                {...register("email", {
                  required: "Este campo es obligatorio.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Debe ingresar un correo electrónico válido.",
                  },
                })}
                //// ref={emailInputRef}
                className={`h-min py-3 px-5 text-xs sm:text-base font-normal bg-zinc-900 border rounded-xl outline-none ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500 shake"
                    : "border-zinc-700 focus:border-sky-500 focus:ring-sky-500"
                }`}
                placeholder=" "
              />
              <label
                className={`placeholder absolute top-3 left-4 px-1 text-gray-400 text-xs sm:text-base font-medium transition-all duration-300 pointer-events-none ${
                  errors.email ? "shake" : ""
                }`}
              >
                Correo electrónico
              </label>
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              {...register("checkbox", {})}
              className="w-3 h-3 bg-zinc-800 border-zinc-700 hover:border-sky-500 rounded checked:bg-sky-900 checked:border-sky-500 checked:hover:bg-sky-500 checked:focus:bg-sky-500 focus:ring-offset-0 focus:ring-0"
            />
            <label className="text-xs sm:text-base font-normal">
              ¿Incluir Celular?
            </label>
          </div>

          {checkbox && (
            <div className="relative grid grid-cols-1 gap-2 sm:w-1/2 sm:pr-3">
              <input
                name="tel"
                type="tel"
                inputMode="tel"
                maxLength="11"
                {...register("tel", {
                  required: "Este campo es obligatorio.",
                  pattern: {
                    value: /^9/,
                    message: "Debe comenzar con 9.",
                  },
                  validate: (value) => {
                    const peruvianNumberPattern =
                      /^(\d{9}|\d{3}\s\d{3}\s\d{3}|\d{3}-\d{3}-\d{3})$/;
                    if (!peruvianNumberPattern.test(value)) {
                      return "Debe ingresar un número que siga un formato peruano válido.";
                    }
                    return true;
                  },
                })}
                className={`h-min py-3 px-5 text-xs sm:text-base font-normal bg-zinc-900 border rounded-xl outline-none ${
                  errors.tel
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500 shake"
                    : "border-zinc-700 focus:border-sky-500 focus:ring-sky-500"
                }`}
                placeholder=" "
              />
              <label
                className={`placeholder absolute top-3 left-4 px-1 text-gray-400 text-xs sm:text-base font-medium transition-all duration-300 pointer-events-none ${
                  errors.tel ? "shake" : ""
                }`}
              >
                Número de celular
              </label>
              {errors.tel && (
                <span className="text-red-500 text-xs">
                  {errors.tel.message}
                </span>
              )}
            </div>
          )}

          <div className="relative">
            <textarea
              name="message"
              {...register("message", {
                required: "Este campo es obligatorio.",
              })}
              className={`py-3 px-5 text-xs sm:text-base font-normal bg-zinc-900 border rounded-xl outline-none resize-y min-h-20 h-24 max-h-48 w-full ${
                errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500 shake"
                  : "border-zinc-700 focus:border-sky-500 focus:ring-sky-500"
              }`}
              placeholder=" "
            ></textarea>
            <label
              className={`placeholder absolute top-3 left-4 px-1 text-gray-400 text-xs sm:text-base font-medium transition-all duration-300 pointer-events-none ${
                errors.message ? "shake" : ""
              }`}
            >
              Tu mensaje
            </label>
            {errors.message && (
              <span className="text-red-500 text-xs">
                {errors.message.message}
              </span>
            )}
          </div>

          {enviado && (
            <p className="text-sky-500 text-xs sm:text-sm mt-2">
              Mensaje enviado correctamente.
            </p>
          )}

          <button
            className="md:ml-auto relative w-full md:w-auto flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base capitalize shadow-lg transition duration-250 ease-in-out bg-gradient-to-br from-neutral-900 border-t border-l border-zinc-700 text-sky-500 hover:from-sky-300 hover:via-neutral-900 hover:to-neutral-900 hover:border-sky-500"
            type="submit"
          >
            <Icon icon="bxs:paper-plane" className="text-base"></Icon>
            <span>Enviar mensaje</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
