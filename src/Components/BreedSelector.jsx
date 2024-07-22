import React from "react";
import Menu from "./Menu";

const BreedSelector = () => {
  return (
    <div>
      {" "}
      <label for="breeds">Please select a breed: </label>
      <Menu />
      <form className="add-form">
        <div className="form-control">
          <label>Number of Images: </label>
          <input type="number" min="1" max="100" placeholder="1-100" />
        </div>
        <input type="submit" value="Generate" className="btn btn-submit" />
      </form>
    </div>
  );
};

export default BreedSelector;
