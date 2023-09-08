import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import EventPage from './pages/Event';
import SignupPage from './components/SignupPage';
import './index.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    axios.post('http://localhost:3000/auth/login',{
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main handleChange={handleChange} formData={formData} handleSubmit={handleSubmit} />} />
        <Route path="/event/*" element={<EventPage />} />
       <Route path="/signup" element={<SignupPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

function Main({handleSubmit, formData, handleChange}){
  return (
    <div>
    <form className='form-login' onSubmit={handleSubmit}>
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
      <Input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      
      <Input
        type="Password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </InputContainer>
    <ButtonContainer>
        <Button type="submit" value="Sign Up"> Login </Button>
      <span>or</span>
      <Link to="/signup">
        <Button type ="submit" value="Sign Up">Sign Up</Button>
      </Link>
    </ButtonContainer>
    <HorizontalRule />
    <ForgotPassword>Forgot password?</ForgotPassword>
</form>
</div>

  );
}

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color:Black;
`;
const Input = styled.input`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  width: 60%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight:lighter;
  align-item:center;
  
  &:focus{
    display:block;
    box-shadow: 0 0 0 0.2rem #9abe0;
    backdrop-filter:blur(0.5px);
    border-radius:2rem;
   
  
  &::placeholder{
    color: black;
    font-weight: lighter;
    font-size: 1 rem;
    opacity:50%;    
  }

`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 90%;
  color: #ffffff;
  border-radius:50px;
  margin:10px;
`;

const ButtonContainer = styled.div`
margin: 2rem 0 2rem ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%; /* Make the container take full width */

& > * {
  margin: 0.5rem 0;
}
`;

const Button = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 200px;
  height: 3rem;
  border: none;
  color: #ffffff;
  border-radius: 2rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  &:hover {
    background-color: #1c1f4e;
    transform: scale(1.05);
  }
  &:active {
    background-color: #0d0f32;
    opacity: 0.80;
  }
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  color: linear-gradient(to right, #14163c 0%, #03217b 79%);     
  font-size: 1rem;
  margin-top: 1rem;
  text-decoration: underline;

  &:hover {
    transition: 0.26s;
    color: #0056b3; 
  }

  &:active {
    color: #003d80; 
  }
`;


export default App;