import React from "react";
import styled from "styled-components";
import { color } from "../../style/variables";
import "../../style/styles.scss";
const StyledLi = styled.li`
  padding: 16px 32px;
  border: 2px solid ${color.light};
  border-radius: 4px;
  &.choosed {
    border: 2px solid ${color.primary};
  }
  &.success {
    border: 2px solid ${color.success};
  }
  &.error {
    border: 2px solid ${color.error};
  }
`;
const Card = ({ onChoose, className, borderStyle, avatar, children }) => {
  return (
    <StyledLi
      className={`${className} ${borderStyle}`}
      onClick={() => {
        onChoose && onChoose(children);
      }}
    >
      {avatar}
      <h3 className="font-sm">{children}</h3>
    </StyledLi>
  );
};

export default Card;
