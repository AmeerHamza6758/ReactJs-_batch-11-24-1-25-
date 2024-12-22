import React, { useState } from "react";

const StudentForm = () => {
  // State for errors and form data
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  // Form Validation
  const validate = () => {
    let isValid = true;
    const formError = {};

    // Name Validation
    if (!name.trim()) {
      formError.name = "Name is required";
      isValid = false;
    } else if (name.length < 4) {
      formError.name = "Name should be more than 4 characters";
      isValid = false;
    }

    // Age Validation
    if (!age.trim()) {
      formError.age = "Age is required";
      isValid = false;
    } else if (Number(age) < 18) {
      formError.age = "Age must be 18 years or older";
      isValid = false;
    }

    // Phone Validation
    if (!phone.trim()) {
      formError.phone = "Phone number is required";
      isValid = false;
    }

    setError(formError);
    return isValid;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form
      alert("Your Form is Submitted Successfully!");
      console.log("Form Data:", { name, age, phone });

      // Reset form fields
      setName("");
      setAge("");
      setPhone("");
      setError({});
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <label htmlFor="name">Student Name:</label>
        <input
          type="text"
          value={name}
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        {error.name && <p style={{ color: "red", fontWeight: "bold" }}>{error.name}</p>}
        <br />
        <br />

        {/* Age Field */}
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          value={age}
          id="age"
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
        />
        {error.age && <p style={{ color: "red", fontWeight: "bold" }}>{error.age}</p>}
        <br />
        <br />

        {/* Phone Field */}
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          value={phone}
          id="phone"
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        {error.phone && <p style={{ color: "red", fontWeight: "bold" }}>{error.phone}</p>}
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
