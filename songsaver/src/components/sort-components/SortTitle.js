import React from "react";

const SortTitle = (props) => {
  return (
    <select className="song-sort">
      <option>Sort title</option>
      <option value="a-z">a-z</option>
      <option value="z-a">z-a</option>
    </select>
  );
};

export default SortTitle;
