import styled from 'styled-components';

export default function Input({ type, placeholder }) {
    return <StyledInput type={type} placeholder={placeholder} />;
  }

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  width: 90%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight:lighter;
  
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


