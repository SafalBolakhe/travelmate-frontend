import React from 'react';
import styled from 'styled-components';
import Input from "./components/Input";
import { FaFacebookF } from "react-icons/fa";

function App() {
  const FaceBookBackground = "linear-gradient(to right, #0546a0 0%, #663FB6 100%)";
  
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up">Sign up </Button>
      </ButtonContainer>
      <Loginwith>or Login With</Loginwith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FaceBookBackground}>
          <FaFacebookF />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot password?</ForgotPassword>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  height: 80vh;
  width: 30vh;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
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
  width: 100%;
  color: black;
  
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
  color: black;
  border-radius: 2rem;
  cursor: pointer;
`;

const Loginwith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const Icon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background: ${props => props.color};
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;


export default App;
