import { useEffect } from "react";
import { Icon } from "@iconify/react";

const TrucksGPS = ({ show, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (show) {
      document.body.style.overflow = "hidden"; // Evita el scroll del body cuando el modal está abierto
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = ""; // Restaura el scroll del body cuando el modal se cierra
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = ""; // Asegura que se restaure el scroll del body al desmontar el modal
      document.removeEventListener("keydown", handleEscape);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 px-4 bg-zinc-950 bg-opacity-50 flex items-center justify-center transition-opacity"
      onClick={onClose}
    >
      <div
        className="max-w-[374px] sm:max-w-[629px] md:max-w-[759px] lg:max-w-[1014px] xl:max-w-[1269px] bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-lg relative opacity-100 transform scale-100 transition-all duration-300"
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="button"
        tabIndex="0"
      >
        <button
          className="bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-gray-200 p-[7px] rounded-lg absolute top-3.5 right-3.5"
          onClick={onClose}
        >
          <Icon icon="ic:round-close" className="text-lg" />
        </button>
        <h2 className="text-xl mb-4">TrucksGPS</h2>
        <p>Este es el contenido de TrucksGPS.</p>
      </div>
    </div>
  );
};

export default TrucksGPS;
