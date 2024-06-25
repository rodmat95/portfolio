import { Icon } from "@iconify/react";

const AppointmentManagement = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 px-4 bg-zinc-950 bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="max-w-[374px] sm:max-w-[629px] md:max-w-[759px] lg:max-w-[1014px] xl:max-w-[1269px] bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-lg relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-gray-200 p-[7px] rounded-lg absolute top-3.5 right-3.5"
          onClick={onClose}
        >
          <Icon icon="ic:round-close" className="text-lg" />
        </button>
        <h2 className="text-xl mb-4">Sistema de gestión de citas</h2>
        <p>Este es el contenido de Sistema de gestión de citas.</p>
      </div>
    </div>
  );
};

export default AppointmentManagement;
