// StyledButton.tsx
import React from 'react';
import styled from 'styled-components';

// Define a styled button
const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Define the props for the Button component
interface ButtonProps {
  children: React.ReactNode; // Content inside the button
  onClick?: (event: React.MouseEventHandler<HTMLButtonElement>) => void; // Optional click handler
}

// Button component
function Button({ children, onClick = () => {} }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
