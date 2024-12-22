import React, { useEffect, useState } from "react";

const PracticeEvents = () => {
  // Use State Hook
  const [teacherName, setTeacherName] = useState("Ameer Hamza");

  //   Use Effect Hook
  useEffect(() => {
    alert("Welcome to the Page");
  },[teacherName]);

  //   Function
  const handleClick = () => {
    setTeacherName("Sana Teacher");
    // setTimeout(() => {
    // },2000);

    alert(`Hello, ${teacherName}!`);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Welcome to the React App</h2>
      <h1 onClick={handleClick}>Click to see Teacher Name</h1>
    </div>
  );
};

export default PracticeEvents;
