import React from "react";
import styled from "styled-components";
import { color } from "../../style/variables";
import "../../style/styles.scss";
const StyledDiv = styled.div`
  .imput {
    width: 100%;
    padding: 14px 40px;
    border-radius: 4px;
    border: 2px solid ${color.light};
    &:focus {
      border: 2px solid ${color.primary};
      outline: none;
    }
    &:focus + .label {
      display: inline-block;
    }
  }
  .label {
    display: none;
    background-color: ${color.primary};
    color: white;
    position: absolute;
    border-radius: 2px;
    font-size: 12px;
    padding: 2px 4px;
    top: 0;
    left: 16px;
    transform: translateY(-50%);
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
    width: 32px;
    height: 32px;
  }
`;
const Input = ({
  onSubmit,
  icon,
  labelName,
  inputType,
  placeHolder,
  errorMessage
}) => {
  return (
    <StyledDiv>
      <span
        className={
          errorMessage === ""
            ? "d-none form__text form__text--warning"
            : "d-block form__text form__text--warning"
        }
      >
        {errorMessage}
      </span>
      <div className="po-re">
        {icon}
        <input
          type={inputType}
          className="imput"
          placeholder={placeHolder}
          // onChange={handleAddOrderItem}
        />
        <label className="label">{labelName}</label>
      </div>
    </StyledDiv>
  );
};

export default Input;
