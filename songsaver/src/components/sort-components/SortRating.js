import React from "react";
import "./sort.css";

const SortRating = (props) => {
  const sortByRatingHandler = (event) =>{
    props.sortRating(event);
  };
  return (
      <select className="song-sort" onChange={sortByRatingHandler}>
        <option value="none">Sort by rating</option>
        <option value="1-5">1-5</option>
        <option value="5-1">5-1</option>
      </select>
  );
};

export default SortRating;
