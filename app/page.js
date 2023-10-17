"use client";

import { useState, useRef } from "react";
import Footer from "./components/Footer";
import Images from "./components/Images";
import Search from "./components/Search";
import ImageSkeleton from "./components/ImageSkeleton";
import Modal from "./components/Modal";

export default function Home() {
  const [images, setImages] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState("");
  const inputRef = useRef();
  const surpriseOptions = [
    "Puppy in a blue hat",
    "A Macbook Pro",
    "A Blue Limo",
  ];

  // surprise me handler
  const surpriseMe = () => {
    setImages(null);
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];

    setValue(randomValue);
    inputRef.current.value = randomValue;
  };

  // getImages from api handler
  const getImages = async () => {
    inputRef.current.value = "";
    setImages(null);
    setError(false);
    setIsLoading(true);

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
        }),
      };

      const res = await fetch("/api/generation", options);

      if (!res.ok) {
        setIsLoading(false);
        setError(true);
        return;
      }
      const data = await res.json();

      setImages(data.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  };

  // upload image for variations
  const uploadImageHandler = async (e) => {
    setError(false);
    const formData = new FormData();
    formData.set("file", e.target.files[0]);

    setSelectedImage(e.target.files[0]);
    setOpenModal(true);

    try {
      const options = {
        method: "POST",
        body: formData,
      };

      const res = await fetch("/api/upload", options);

      if (!res.ok) {
        setIsLoading(false);
        setError(true);
        return;
      }

      const data = await res.json();

      setMessage(data.message);
      setImage(data.imageUrl);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  };

  // Getting variations
  const getVariations = async () => {
    setError(false);
    setOpenModal(false);
    setIsLoading(true);

    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: image,
        }),
      };

      const res = await fetch("/api/variations", options);

      if (!res.ok) {
        setIsLoading(false);
        setError(true);
        return;
      }

      const data = await res.json();

      setIsLoading(false);
      setImages(data.data);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <main className="bg-[url('/bg.png')] h-[100svh] w-screen flex flex-col items-center justify-between">
      <Search
        getImages={getImages}
        value={inputRef}
        valueHandler={setValue}
        surpriseMe={surpriseMe}
        imageUploadHandler={uploadImageHandler}
      />
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          setSelectedImage={setSelectedImage}
          message={message}
          selectedImage={selectedImage}
          getVariations={getVariations}
        />
      )}
      {!isLoading && <Images images={images} error={error} />}
      {isLoading && <ImageSkeleton />}
      <Footer />
    </main>
  );
}
