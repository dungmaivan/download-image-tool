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
    <div >
      <h1>Paste link image to download </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <input
        className="min-w-[800px] w-full p-2 border border-gray-300 rounded-lg"
          type="text"
          placeholder="Paste link image"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Download</button>
      </form>
    </div>
  );
};

export default Home;
