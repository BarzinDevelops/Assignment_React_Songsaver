import React from "react";
function NavBar() {
  return (
    <div className="nav-bar">
      <h1>Songsaver</h1>
      <ul>
        <li className="nav-bar__item">
          <a href="http://localhost:3000/About">About</a>
        </li>
        <li className="nav-bar__item">
          <a href="http://localhost:3000">Main</a>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
