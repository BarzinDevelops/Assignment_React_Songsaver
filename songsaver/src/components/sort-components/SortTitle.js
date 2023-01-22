import React from "react";
import "./sort.css";

const SortTitle = (props) => {
  const sortByTitleHandler = (event) =>{
    props.sortTitle(event);
  };
  return (
      <select className="song-sort" onChange={sortByTitleHandler}>
        <option>Sort title</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
  );
};

export default SortTitle;
