import React from "react";
import styled from "styled-components";
import { color, rwd } from "../../style/variables";

const StyledButton = styled.button`
  background-color: ${color.primary};
  color: white;
  padding: 4px 40px;
  border: none;
  border-radius: 4px;
  :hover {
    background-color: ${color.primaryDark};
  }
  @media ${rwd.sm} {
    padding: 4px 20px;
  }
`;
const Button = ({ className, onSubmit, children }) => {
  return (
    <StyledButton
      className={className}
      onClick={() => {
        onSubmit && onSubmit();
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
