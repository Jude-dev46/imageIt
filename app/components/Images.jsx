import Image from "next/image";

const Images = ({ images }) => {
  return (
    <div className="w-full h-full flex justify-center mt-3 mb-2">
      <div className="flex flex-wrap w-11/12 md:w-3/4 justify-center max-h-108 gap-3 overflow-scroll hide-scroll -mb-3">
        {images?.map((image, index) => (
          <div key={index}>
            <Image
              width={200}
              height={200}
              alt="AI generated image"
              src={image.url}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
