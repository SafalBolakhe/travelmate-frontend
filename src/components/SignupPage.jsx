import React, { useState } from 'react';
import './Signup_Page.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    birthDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // fetch("https://localhost:3000/loggedin", {
    // method:"post",
    // crossDomain: true,
    // headers:{
    //   "Content-Type":"application/",
    //   Accept:"aplication/json",
    //   "Access-control-Allow-Origin":"*",
    // },
    // body:JSON.stringify({

    //   username,
    //   email,

    // }),

  // })
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data, "userRegister")
  // })

  axios.post('http://localhost:3000/auth/registration',{
    username: JSON.stringify(formData.username),
    password: formData.password
  })
  .then(function(respose){
    console.log(respose)
  }).catch((err) => {  
    console.log(err)
  })
  };
  return (
    <div className="main">
      <form className='signup_form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {/* <div className="input_item">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className='Input_boxes'
          />
        </div> 
        <div className="input_item">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className='Input_boxes'
          />
        </div>*/}
        <div className="input_item">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className='Input_boxes'
          />
        </div>
        {/* <div className="input_item">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className='Input_boxes'
          />
        </div> */}
        <div className="input_item">
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className='Input_boxes'
          />
        </div>
        {/* <div className="input_item">
          <input 
            type="date"
            name="birthDate"
            placeholder='Date'
            value={formData.birthDate}
            onChange={handleChange}
            className='Input_boxes'
          /> 
      </div> */}
        <input className="login_button" type="submit" value="Sign Up" />
        <div className="signup">
          Already a user? 
          <Link to="/">
          <span> Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
