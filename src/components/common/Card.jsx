import React from "react";
import styled from "styled-components";
import { color, rwd } from "../../style/variables";
import "../../style/styles.scss";
import CheckIcon from "./CheckIcon";
const StyledLi = styled.li`
  position: relative;
  padding: 48px 32px;
  border: 2px solid ${color.light};
  border-radius: 4px;
  :hover {
    background-color: #fcfcfc;
  }
  @media ${rwd.lg} {
    padding: 16px 32px;
  }
  &.choosed {
    border: 2px solid ${color.primaryLight};
  }
  .card__icon {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(30%, 50%);
    display: none;
    &.choosed {
      display: block;
    }
  }
  .avatar {
    height: 80%;
  }
`;

const Card = ({ onChoose, className, onChoosed, avatar, children }) => {
  return (
    <StyledLi
      className={`${className} ${onChoosed}`}
      onClick={() => {
        onChoose && onChoose(children);
      }}
    >
      {avatar}
      <h3 className="font-sm">{children}</h3>
      <CheckIcon className={`${onChoosed} card__icon`} />
    </StyledLi>
  );
};

export default Card;
