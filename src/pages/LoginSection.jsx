import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputGroup from "../components/common/InputGroup";
import Button from "../components/common/Button";
import Link from "../components/common/Link";
import CardList from "../components/CardList";
import CardContext from "../CardContext";
import {
  handleIsWordRepeatCheck,
  handleLengthCheck,
  handleValidEmailCheck
} from "../mixins";
import { ReactComponent as MailSvg } from "../images/mail.svg";
import { ReactComponent as PasswordSvg } from "../images/password.svg";
import TownSvg from "../images/img_town_370x170@3x.svg";
import "../style/styles.scss";

const StyledSecton = styled.section`
  background-repeat: repeat-x;
  background-position: center bottom;
  background-image: url(${TownSvg});
  padding-top: 20px;
  padding-bottom: 80px;
`;

const LoginSection = () => {
  const handleLogin = () => {
    console.log(inputEmailUi.value, inputPasswordUi.value);
  };
  const { targetCard } = useContext(CardContext);
  const [inputEmailUi, setInputEmailUi] = useState({
    stateStyle: "",
    errorMessage: "",
    value: ""
  });
  const [inputPasswordUi, setInputPasswordUi] = useState({
    stateStyle: "",
    errorMessage: "",
    value: ""
  });

  const handleEmailCheck = (inputContent) => {
    if (!handleLengthCheck(inputContent, 6)) {
      setInputEmailUi({
        stateStyle: "error",
        errorMessage: "需超過6碼",
        value: inputContent
      });
      return;
    }
    if (handleValidEmailCheck(inputContent)) {
      setInputEmailUi({
        stateStyle: "success",
        errorMessage: "",
        value: inputContent.split("@")[0]
      });
    } else {
      setInputEmailUi({
        stateStyle: "error",
        errorMessage: "格式不正確",
        value: inputContent
      });
    }

    if (inputPasswordUi.value.length >= 6) {
      if (handleIsWordRepeatCheck(inputContent, inputPasswordUi.value)) {
        setInputPasswordUi({
          stateStyle: "error",
          errorMessage: "密碼任意6碼不能和帳號重複",
          value: inputContent
        });
      } else {
        setInputPasswordUi({
          stateStyle: "success",
          errorMessage: "",
          value: inputContent
        });
      }
    }
  };

  const handlePasswordCkeck = (inputContent) => {
    if (!handleLengthCheck(inputContent, 6)) {
      setInputPasswordUi({
        stateStyle: "error",
        errorMessage: "需超過6碼",
        value: inputContent
      });
      return;
    }
    if (inputEmailUi.value.length >= 6 && inputContent.length >= 6) {
      const isInclude = handleIsWordRepeatCheck(
        inputContent,
        inputEmailUi.value
      );
      if (isInclude) {
        setInputPasswordUi({
          stateStyle: "error",
          errorMessage: "密碼任意6碼不能和帳號重複",
          value: inputContent
        });
        return;
      }
    }
    setInputPasswordUi({
      stateStyle: "success",
      errorMessage: "",
      value: inputContent
    });
  };

  return (
    <StyledSecton className="container">
      <h2 className="text-custom-primary h4 text-center mb-5">
        Choose Account Type
      </h2>
      <CardList className="mb-5" />
      <p className="text-center font-sm mb-2 lh-lg">
        Hello {targetCard.content}!
        <br />
        Please fill out the form below to get started
      </p>
      <form>
        <InputGroup
          inputType="email"
          labelName="Email"
          className="mb-3 w-100"
          placeHolder="abc@gmail.com"
          borderStyle={inputEmailUi.stateStyle}
          errorMessage={inputEmailUi.errorMessage}
          onComplete={handleEmailCheck}
          onEdit={() => {
            setInputEmailUi({ ...inputEmailUi, stateStyle: "" });
          }}
          icon={<MailSvg className="icon" />}
        />
        <InputGroup
          inputType="password"
          labelName="Password"
          placeHolder="Password"
          className="mb-5 w-100"
          borderStyle={inputPasswordUi.stateStyle}
          errorMessage={inputPasswordUi.errorMessage}
          icon={<PasswordSvg className="icon" />}
          content={<Link>Forgot?</Link>}
          onComplete={handlePasswordCkeck}
          onEdit={() => {
            setInputPasswordUi({ ...inputPasswordUi, stateStyle: "" });
          }}
        />
        <div className="w-100 d-flex justify-content-between align-items-center">
          <p>
            No account?<Link className="ml-2">Signup</Link>
          </p>
          <Button onSubmit={handleLogin}>Login</Button>
        </div>
      </form>
    </StyledSecton>
  );
};

export default LoginSection;
