import React from "react";
import classes from './ListItem.module.css';
import Button from "./Button";

const ListItem = (props) => {
  return (
    <tr>
      <td className={classes['td']}>{props.song.id}</td>
      <td className={classes['td']}>{props.song.title}</td>
      <td className={classes['td']}>{props.song.artist}</td>
      <td className={classes['td']}>{props.song.genre}</td>
      <td className={classes['td']}>{props.song.rating}</td>

      <td className={classes['td__delete-btn']}>
        <Button className={classes['delete-button']} name={'Delete'} onClick={()=> props.removeSong(props.song)}  />
      </td>
    </tr>
  );
};

export default ListItem;
