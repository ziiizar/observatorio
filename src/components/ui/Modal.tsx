import React from "react";

const Modal = ({
  children,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center place-content-center justify-center bg-black bg-opacity-50 z-20">
      <div className="flex flex-col place-content-center items-center  rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
