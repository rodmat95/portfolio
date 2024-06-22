import { useRef } from "react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

// API Keys
const KeyMap = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const keyMail = process.env.REACT_APP_EMAILJS_API_KEY;

// IDs de emailjs
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  // Dirección del mapa
  const dirección = "San Miguel 15086";

  // URL del mapa
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

  const onSubmit = (data, event) => {
    //console.log(data);
    event.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, refForm.current, keyMail)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
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
            <div className="grid grid-cols-1 gap-2">
              <input
                name="name"
                type="text"
                {...register("name", { required: true })}
                className="placeholder:font-medium placeholder:text-gray-400 h-min bg-zinc-900 text-xs sm:text-base font-normal py-3 px-5 border border-zinc-700 rounded-xl outline-none focus:border-sky-500 invalid:focus:border-red-500"
                placeholder="Nombre completo"
                required
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500 text-sm">
                  Este campo es obligatorio.
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 gap-2">
              <input
                name="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
                className="placeholder:font-medium placeholder:text-gray-400 h-min bg-zinc-900 text-xs sm:text-base font-normal py-3 px-5 border border-zinc-700 rounded-xl outline-none focus:border-sky-500 invalid:focus:border-red-500"
                placeholder="Correo electrónico"
                required
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm">
                  Este campo es obligatorio.
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 text-sm">
                  El formato del correo es incorrecto
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              {...register("checkbox", {})}
              className="appearance-none w-3 h-3 bg-zinc-800 border border-zinc-700 hover:border-sky-500 rounded checked:bg-sky-900 checked:border-sky-500"
            />
            <label className="text-xs sm:text-base font-normal">
              ¿Incluir Celular?
            </label>
          </div>

          {checkbox && (
            <div className="grid grid-cols-1 gap-2 sm:w-1/2 sm:pr-3">
              <input
                name="tel"
                type="tel"
                {...register("tel", {
                  required: true,
                  pattern: /^(9\d{8})$/,
                })}
                className="placeholder:font-medium placeholder:text-gray-400 h-min bg-zinc-900 text-xs sm:text-base font-normal py-3 px-5 border border-zinc-700 rounded-xl outline-none focus:border-sky-500 invalid:focus:border-red-500"
                placeholder="Celular"
              />
              {errors.tel?.type === "pattern" && (
                <span className="text-red-500 text-sm">
                  Ingrese un número de teléfono válido.
                </span>
              )}
            </div>
          )}

          <textarea
            name="message"
            {...register("message", { required: true })}
            className="placeholder:font-medium placeholder:text-gray-400 bg-zinc-900 text-xs sm:text-base font-normal py-3 px-5 border border-zinc-700 rounded-xl outline-none resize-y min-h-20 h-24 max-h-48 w-full focus:border-sky-500 invalid:focus:border-red-500"
            placeholder="Tu mensaje"
            required
          ></textarea>
          {errors.message?.type === "required" && (
            <span className="text-red-500 text-sm">
              Este campo es obligatorio.
            </span>
          )}

          <button
            className="md:ml-auto relative w-full md:w-auto flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base capitalize shadow-lg transition duration-250 ease-in-out bg-gradient-to-br from-neutral-900 border-t border-l border-zinc-700 via-transparent to-transparent text-sky-500 hover:from-sky-300 hover:via-neutral-900 hover:to-neutral-900 hover:border-sky-500"
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
