import React from "react";

const ListItem = (props) => {
  return (
    <tr>
      <td>{props.song.title}</td>
      <td>{props.song.artist}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.rating}</td>
      <td>
        <button className="delete-button">Delete</button>
      </td>
    </tr>
  );
};

export default ListItem;
