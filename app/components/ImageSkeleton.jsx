const ImageSkeleton = () => {
  return (
    <div className="w-full h-full flex justify-center mt-3">
      <div className="flex flex-wrap w-11/12 md:w-3/4 justify-center max-h-108 md:max-h-full gap-3 overflow-scroll hide-scroll animate-pulse -mb-3">
        <div className="bg-gray w-full md:w-64 h-48"></div>
        <div className="bg-gray w-full md:w-64 h-48"></div>
        <div className="bg-gray w-full md:w-64 h-48"></div>
        <div className="bg-gray w-full md:w-64 h-48"></div>
        <div className="bg-gray w-full md:w-64 h-48"></div>
        <div className="bg-gray w-full md:w-64 h-48"></div>
        <div className="bg-gray w-full md:w-64 h-48"></div>
        <div className="bg-gray w-full md:w-64 h-48"></div>
      </div>
    </div>
  );
};

export default ImageSkeleton;
