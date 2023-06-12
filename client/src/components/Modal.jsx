import React, { useState } from 'react';

function Modal() {
  // Tilstanden for at afgøre om modalen er åben eller lukket
  const [isOpen, setIsOpen] = useState(false);

  // Funktion til at åbne modalen
  const openModal = () => {
    setIsOpen(true);
  };

  // Funktion til at lukke modalen
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      {/* Knap til at åbne modalen */}
      <button onClick={openModal} className='bg-[#a1a1a1] hover:bg-[#868686] p-3 rounded-[15px] uppercase font-bold text-[#1a1a1a]'>Open Modal</button>
      {/* Modalindhold, der kun vises, hvis isOpen er sand */}
      {isOpen && (
        <div className="bg-[#1a1a1a] text-[#a1a1a1] absolute h-[400px] w-[350px] rounded-[20px]">
          <div>
            {/* Knap til at lukke modalen */}
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
