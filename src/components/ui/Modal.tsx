import React from 'react';

const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center place-content-center justify-center bg-black bg-opacity-50 z-20">
      <div className="flex flex-col place-content-center items-center  rounded-lg shadow-lg">
        {children}
        {/* <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">
          Cerrar
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
