import Image from "next/image";
import { useState, useRef } from "react";

const Modal = ({
  closeModal,
  setSelectedImage,
  message,
  selectedImage,
  getVariations,
}) => {
  const [error, setError] = useState(false);
  const imageRef = useRef(null);

  const closeModalHandler = () => {
    closeModal(false);
    setSelectedImage(null);
  };

  const checkSize = () => {
    if (imageRef.current.width === 256) {
      getVariations();
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-[rgb(0,0,0,0.35)] absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center overflow-hidden">
      <div className="bg-white relative flex flex-col border rounded-lg p-3 z-10">
        <div
          onClick={closeModalHandler}
          className="w-12 mb-2 text-center text-blue-900 cursor-pointer hover:text-blue-950 hover:font-bold"
        >
          close
        </div>
        <div className="max-h-80 overflow-hidden">
          {selectedImage && (
            <Image
              ref={imageRef}
              src={URL.createObjectURL(selectedImage)}
              width={256}
              height={256}
              alt="AI generated image"
            />
          )}
        </div>
        {error && <p>Error: Image must be a PNG file of 256x256</p>}
        <p className="flex flex-wrap">{message}</p>
        {!error && (
          <button
            className="bg-blue-900 mt-2 text-white rounded-md hover:bg-blue-950"
            onClick={checkSize}
          >
            Create Variations
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
