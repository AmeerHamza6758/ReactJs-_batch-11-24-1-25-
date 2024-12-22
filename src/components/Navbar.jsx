import React, { Fragment, useState } from "react";
import "./style.css";
import Home from "./Home";
function Navbar({myName}) {
  const [teacher, setTeacher] = useState("Ameer Hamza Teacher");
  return (
    <Fragment>
      <div style={{backgroundColor:"yellowgreen"}}>
        <h1>Hello {myName}</h1>
        <div>Hello this is navbar From {myName}</div>
      </div>
      <Home teacherName={teacher}/>
    </Fragment>
  );
}

export default Navbar;
