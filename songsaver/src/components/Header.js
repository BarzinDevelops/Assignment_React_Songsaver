import React from "react";
import classes from "./Header.module.css";


const Header = () => {


    const linkHandler = (event) => {
        event.preventDefault();
      };

    return (
        <header className={classes.header}>
          <h1>Songsaver</h1>
            <nav>
            <ul>
              <li>
                <a onClick={linkHandler} href='/'>Main</a>
              </li>
              <li>
                <a onClick={linkHandler} href='/'>About Us</a>
              </li>
            </ul>
          </nav>
        </header>
      );
};

export default Header;