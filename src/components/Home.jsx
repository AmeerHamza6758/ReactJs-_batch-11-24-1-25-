import React from "react";
import myPic from "../assets/download.jpeg";
function Home({ teacherName}) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <p>Helo Sweet Home of {teacherName}</p>
      <img src={myPic} alt="Icon" />
    </div>
  );
}

export default Home;
