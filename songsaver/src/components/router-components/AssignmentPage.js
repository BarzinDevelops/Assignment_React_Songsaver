import React from "react";
import SongOverview from "../../SongOverview";
import NavBar from "./NavBar";
import classes from "./AssignmentPage.module.css";
function AssignmentPage() {
  return (
    <div className={classes.main}>
      <NavBar />
      <SongOverview />
    </div>
  );
}
export default AssignmentPage;
