import React, { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <button onClick={openModal} className='bg-[#a1a1a1] hover:bg-[#868686] p-3 rounded-[15px] uppercase font-bold text-[#1a1a1a]'>Open Modal</button>
      {isOpen && (
        <div className="bg-[#1a1a1a] text-[#a1a1a1] absolute h-[400px] w-[350px] rounded-[20px]">
          <div>
            <span className="absolute right-[10px] text-[1.8rem] cursor-pointer" onClick={closeModal}>&times;</span>
            <div className='flex justify-center items-center h-[400px]'>
                Content
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
