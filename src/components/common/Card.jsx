import React from "react";
import styled from "styled-components";
import { color, rwd } from "../../style/variables";
import "../../style/styles.scss";
import CheckIcon from "./CheckIcon";
const StyledDiv = styled.div`
  position: relative;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${color.light};
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: #fcfcfc;
  }
  @media ${rwd.lg} {
    padding: 16px;
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
    width: 50%;
    height: 80%;
    @media ${rwd.lg} {
      width: 80%;
    }
  }
`;

const Card = ({ onChoose, className, onChoosed, avatar, children }) => {
  return (
    <StyledDiv
      className={`${className ? className : ""} ${onChoosed}`}
      onClick={() => {
        onChoose && onChoose(children);
      }}
    >
      {avatar}
      <h3>{children}</h3>
      <CheckIcon className={`${onChoosed} card__icon`} />
    </StyledDiv>
  );
};

export default Card;
