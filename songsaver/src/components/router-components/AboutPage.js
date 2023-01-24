import React from "react";
import NavBar from "./NavBar";
import classes from "./AboutPage.module.css";
function AboutPage() {
  return (
    <div className={classes.main}>
      <NavBar />
      <div className={classes["about-content"]}>
        <h2 className={classes.title}>About us</h2>
        <div className={classes.content}>
          
          <article>
            Hi and welcome to this Songsaver application. My name is Barzin and
            this is one off my projects during the Frontend Development course
            i'm doing.
          </article>
        </div>
        <div className={classes.content}>
          <article>
            This project is a Single Page Application (SPA) in which you can
            save all your favorite songs with a rating. The list can grow as big
            as you wish and thats why you can also sort your list alphabetically
            and also based on your rating (ascending and descending order). The
            code is written based on React and the logic is done through
            functional and Classbased components.
          </article>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
