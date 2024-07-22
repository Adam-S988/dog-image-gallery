import React, { useState, useEffect } from "react";

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Menu = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const breeds = data.message;
        const breedOptions = [];

        for (const breed in breeds) {
          breedOptions.push(capitalize(breed));
          breeds[breed].forEach((subBreed) => {
            breedOptions.push(`${capitalize(breed)} (${capitalize(subBreed)})`);
          });
        }

        setOptions(breedOptions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <select
      id="breed-select"
      //   onChange={handleBreedChange}
      //   value={selectedBreed}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Menu;
