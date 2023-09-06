import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Input from './components/Input';
import EventPage from './pages/Event';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/event/*" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}
function Main() {
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
      <Input type="text" placeholder="Email" />
      <Input type="text" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up">Sign up</Button>
      </ButtonContainer>
      <HorizontalRule />
      <ForgotPassword>Forgot password?</ForgotPassword>
    </MainContainer>
  );
};


const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  height: 10vh;
  width: 50vh;
  background: rgba(255, 255, 255, 0.30);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.5px);
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width:320px)
  width: 80vw;
  height: 90vh;
  hr{
    margin-buttons: 0.3rem;

  }
  h4{
    font-size:small;
  }

`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color:Black;
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
   
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: #ffffff; 
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #1c1f4e;
    transform: scale(1.05); 
  }
  &:active {
    background-color: #0d0f32; 
    opacity: 0.8; 
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
