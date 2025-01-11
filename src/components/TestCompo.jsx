import React, { useContext } from "react";
import { MyContext } from "../MyContext";

function TestCompo() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <h1>Context Data Sharing</h1>
      <p>This is a component using the MyContext.</p>
      <h1>{contextValue}</h1> 
    </div>
  );
}

export default TestCompo;
