import React, { useState, useEffect } from 'react';

const ImageBox = ({ src, alt, size = '300px' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (window.innerWidth > 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="overflow-hidden bg-gray-200 flex justify-center items-center cursor-pointer shadow-lg"
        style={{ width: size, height: size }}
        onClick={handleClick}
      >
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110 rounded-sm"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-sm"
          onClick={handleClick}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[60rem] max-h-[50rem] object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default ImageBox;