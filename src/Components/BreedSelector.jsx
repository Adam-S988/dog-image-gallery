import React, { useState } from "react";
import Menu from "./Menu";
import ImageGallery from "./ImageGallery";

const BreedSelector = () => {
  const [breed, setBreed] = useState("");
  const [numImages, setNumImages] = useState(1);

  const handleBreedChange = (selectedBreed) => {
    setBreed(selectedBreed);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!breed || numImages < 1) {
      console.log("No breed selected or number of images is less than 1");
      return;
    }
    console.log("Breed:", breed);
    console.log("Number of Images:", numImages);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select a breed:
          <Menu selectedBreed={breed} onBreedChange={handleBreedChange} />
        </label>
        <div></div>
        <label>
          Number of Images:
          <input
            type="number"
            min="1"
            max="100"
            value={numImages}
            onChange={(e) => setNumImages(Number(e.target.value))}
          />
        </label>
        <button type="submit">Generate</button>
      </form>
      <div class="breed">
        <h2>{breed}</h2>
      </div>
      {breed && numImages > 0 && (
        <ImageGallery breed={breed} numImages={numImages} />
      )}
    </div>
  );
};

export default BreedSelector;
