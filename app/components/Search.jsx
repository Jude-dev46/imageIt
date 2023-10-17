"use client";

const Search = ({
  getImages,
  value,
  valueHandler,
  surpriseMe,
  imageUploadHandler,
}) => {
  return (
    <div className="w-full h-40 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-white mt-5 font-semibold text-3xl">ImageIT</h1>
      <p className="text-sm mx-5 text-white font-extralight md:text-xl text-left -mb-3">
        Start with a detailed description,{" "}
        <span
          onClick={surpriseMe}
          className="bg-blue-950 px-2 cursor-pointer font-semibold hover:text-blue-200 rounded-md"
        >
          surprise me
        </span>{" "}
      </p>
      <div className="w-3/4 md:w-full h-20 flex flex-col justify-center items-center mb-5">
        <div className="w-full max-w-2xl flex items-center text-base overflow-hidden mb-2">
          <input
            type="text"
            placeholder="Send a message to generate an image..."
            ref={value}
            onChange={(e) => {
              valueHandler(e.target.value);
            }}
            className="w-3/5 lg:w-4/5 h-10 p-3 text-sm md:text-xl border-none rounded-tl-md rounded-bl-md flex flex-wrap shadow-md outline-none"
          />
          <button
            onClick={getImages}
            className="bg-blue-950 w-2/5 lg:w-1/5 h-10 text-white rounded-t-md rounded-b-md text-xs md:text-lg hover:bg-blue-900"
          >
            Generate
          </button>
        </div>
        <p className="text-white">
          or{" "}
          <span>
            <label
              htmlFor="files"
              className="bg-blue-950 px-2 cursor-pointer rounded-md"
            >
              upload
            </label>
            <input
              type="file"
              id="files"
              name="file"
              accept="image/*"
              onChange={imageUploadHandler}
              hidden
            />
          </span>
          an image to edit.
        </p>
      </div>
    </div>
  );
};

export default Search;
