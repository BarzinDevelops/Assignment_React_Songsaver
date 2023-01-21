import React from "react";

const ListItem = (props) => {
    // console.log('in ListItem: props =>', props)
  return (
    <tr>
      <td>{props.song.id}</td>
      <td>{props.song.title}</td>
      <td>{props.song.artist}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.rating}</td>
      <td>
        <button className="delete-button" onClick={()=> props.removeSong(props.song)}>Delete</button>
      </td>
    </tr>
  );
};

export default ListItem;
