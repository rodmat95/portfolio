import { Icon } from "@iconify/react";

const BillCRM = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-30 px-4 bg-zinc-950 bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="max-w-[374px] sm:max-w-[629px] md:max-w-[759px] lg:max-w-[1014px] xl:max-w-[1269px] bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-lg relative transition-all duration-300"
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
        <h3 className="text-xl sm:text-2xl font-bold">BillCRM</h3>
        <h4 className="text-sm sm:text-base font-semibold">
          Software de facturación con funciones CRM
        </h4>
        <p className="text-sm sm:text-base font-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean
          nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui
          purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris
          eget neque at sem venenatis eleifend. Ut nonummy.
        </p>
      </div>
    </div>
  );
};

export default BillCRM;
