import React from "react";

function StudentForm() {
  return (
    <form style={{ backgroundColor: "blue" }}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Age:
        <input type="number" name="age" />
      </label>
      <label>
        Gender:
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default StudentForm;
