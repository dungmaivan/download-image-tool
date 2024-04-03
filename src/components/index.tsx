"use client";
import { FormEvent, useState } from "react";

const Home = () => {
  const [url, setUrl] = useState("");
  const downloadImage = (url: string) => {
    try {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "image.png"; // or any other name you want
          a.click();
        });
    } catch (error: any) {
      alert(`An error occurred: ${error.message}`);
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You now have the URL of the image, you can download it or do whatever you want with it
    if (Array.isArray(url)) {
      // If it is, download all the images
      url.forEach(downloadImage);
    } else {
      // If it's not, download the single image
      downloadImage(url);
    }
  };

  return (
    <div>
      <h1 className="pb-4">Paste link image to download </h1>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input
          className="min-w-[800px] w-full p-2 rounded-lg border-gray-300  focus:border-none border-none"
          type="text"
          placeholder="Paste link image"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-purple-600 to-purple-400"
        >
          Download
        </button>
      </form>
    </div>
  );
};

export default Home;
