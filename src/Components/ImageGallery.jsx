import React, { useState, useEffect } from "react";

const ImageGallery = ({ breed, numImages }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (!breed || numImages <= 0) return;

      try {
        // Format breed for API (lowercase and hyphens instead of spaces)
        const formattedBreed = breed.toLowerCase().replace(/ /g, "-");
        const response = await fetch(
          `https://dog.ceo/api/breed/${formattedBreed}/images/random/${numImages}`
        );
        const data = await response.json();

        if (data.status === "success") {
          setImages(data.message); // `data.message` should be an array of URLs
        } else {
          setError("Failed to fetch images");
          setImages([]);
        }
      } catch (error) {
        setError("Error fetching images");
        setImages([]);
      }
    };

    fetchImages();
  }, [breed, numImages]);

  if (error) {
    return <p>{error}</p>;
  }

  if (images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Dog breed ${breed}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
