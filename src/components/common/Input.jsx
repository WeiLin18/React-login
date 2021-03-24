import React from "react";
import styled from "styled-components";
import { color } from "../../style/variables";
import "../../style/styles.scss";
const StyledDiv = styled.div`
  position: relative;
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
    &.success {
      border: 2px solid ${color.success};
    }
    &.error {
      border: 2px solid ${color.error};
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

  .remind {
    color: ${color.error};
    font-size: 12px;
    display: block;
    text-align: right;
    height: 20px;
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
    width: 32px;
    height: 32px;
  }
  .input__link {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-20%, -50%);
    padding-left: 20px;
    border-left: 2px solid ${color.light};
  }
`;
const Input = ({
  onChange,
  icon,
  styleClass,
  borderStyle,
  labelName,
  inputType,
  placeHolder,
  errorMessage,
  content
}) => {
  return (
    <StyledDiv className={styleClass}>
      <span
        className={`${errorMessage === "" ? "opacity-0" : "opacity-1"} remind
        `}
      >
        {errorMessage}
      </span>
      <div className="po-re">
        {icon}
        <input
          type={inputType}
          className={` imput ${borderStyle}`}
          placeholder={placeHolder}
          onBlur={(e) => {
            onChange && onChange(e.target.value);
          }}
        />
        <label className="label">{labelName}</label>
        {content && <div className="input__link">{content}</div>}
      </div>
    </StyledDiv>
  );
};

export default Input;
