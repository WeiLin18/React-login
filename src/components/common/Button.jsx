import React from "react";
import styled from "styled-components";
import { color, rwd } from "../../style/variables";

const StyledButton = styled.button`
  background-color: ${color.primary};
  color: white;
  padding: 8px 40px;
  border: none;
  border-radius: 4px;
  :hover {
    background-color: ${color.primaryDark};
  }
  @media ${rwd.sm} {
    padding: 8px 20px;
  }
`;
const Button = ({ className, onSubmit, children }) => {
  return (
    <StyledButton
      className={className ? className : ""}
      onClick={(e) => {
        e.preventDefault();
        onSubmit && onSubmit();
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
