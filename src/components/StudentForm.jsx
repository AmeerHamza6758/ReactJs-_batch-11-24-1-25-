import React, { useState } from 'react'

function StudentForm() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [errors, setErrors] = useState()

    const validate = () => {
        const customError = {}
        if (!name) {
            customError.name = "Please Enter your name..!"
        } else if (name.length < 4) {
            customError.name = "Name must be greater than 4 characters"
        }
        if (!email) {
            customError.email = "Please Enter your email..!"
        }
        else if (!email.includes('@')) {
            customError.email = 'Enter a valid email address..!'
        }
        if (!age) {
            customError.age = 'Please enter your age..!'
        }
        else if (age < 18) {
            customError.age = 'You are under 18'
        }
        setErrors(customError)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
        }
        console.log(name, email, age, 'These are forms data');
        // alert('Form submitted')
    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: '800px', height: '400px', backgroundColor: 'lightblue' }}>
                <h1>Student Registeration Form</h1>
                <label htmlFor="name">Enter your name:</label> <br />
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                {errors && <strong style={{color:'red'}}>{errors.name}</strong>}
                <br />
                <label htmlFor="">Enter your Email:</label> <br />
                <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                {errors && <strong style={{color:'red'}}>{errors.email}</strong>}
                <br />
                <label htmlFor="age">Enter your age:</label> <br />
                <input type="number" name="" id="age" value={age} onChange={(e) => setAge(e.target.value)} /> <br />
                {errors && <strong style={{color:'red'}}>{errors.age}</strong>}
                <br /> <br />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default StudentForm