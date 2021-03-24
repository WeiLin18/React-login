import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Link from "../components/common/Link";
import CardList from "../components/CardList";
import CardContext from "../CardContext";
import { ReactComponent as MailSvg } from "../images/mail.svg";
import { ReactComponent as PasswordSvg } from "../images/password.svg";
import TownSvg from "../images/img_town_370x170@3x.svg";
import "../style/styles.scss";

const StyledSecton = styled.section`
  background-repeat: repeat-x;
  background-position: center bottom;
  background-image: url(${TownSvg});
  padding-bottom: 120px;
`;

const LoginSection = () => {
  const handleLogin = () => {
    console.log("login");
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

  const handleLengthCheck = (inputContent) => {
    return inputContent.trim() === "" ? false : true;
  };
  const handleEmailCheck = (inputContent) => {
    if (!handleLengthCheck(inputContent)) {
      setInputEmailUi({
        stateStyle: "error",
        errorMessage: "不能空白",
        value: ""
      });
      return;
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(inputContent)) {
      console.log(inputContent.split("@")[0]);
      setInputEmailUi({
        stateStyle: "success",
        errorMessage: "",
        value: inputContent.split("@")[0]
      });
    } else {
      setInputEmailUi({
        stateStyle: "error",
        errorMessage: "格式不正確",
        value: ""
      });
    }
  };

  const handlePasswordCkeck = (inputContent) => {
    if (!handleLengthCheck(inputContent)) {
      setInputPasswordUi({
        stateStyle: "error",
        errorMessage: "不能空白",
        value: ""
      });
      return;
    }
    if (inputEmailUi.value.length >= 6 && inputContent.length >= 6) {
      const isInclude = handleIsWordRepeatCheck(inputContent);
      if (isInclude) {
        console.log(inputEmailUi.value, inputContent, "重複");
        setInputPasswordUi({
          stateStyle: "error",
          errorMessage: "密碼任意6碼不能和帳號重複",
          value: ""
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

  const handleIsWordRepeatCheck = (inputContent) => {
    let isInclude = false;
    for (let i = 0; i < inputEmailUi.value.length; i++) {
      for (let j = 0; j < inputContent.length; j++) {
        if (
          inputEmailUi.value
            .slice(i, i + 7)
            .includes(inputContent.slice(j, j + 7))
        ) {
          isInclude = true;
        }
      }
    }
    return isInclude;
  };
  useEffect(() => {
    if (inputEmailUi.value.length >= 6) {
      if (handleIsWordRepeatCheck(inputPasswordUi.value)) {
        setInputPasswordUi({
          stateStyle: "error",
          errorMessage: "密碼任意6碼不能和帳號重複",
          value: ""
        });
      }
    }
  }, [inputEmailUi.value]);

  return (
    <StyledSecton className="container pt-5">
      <h2 className="text-custom-primary h4 text-center mb-5">
        Choose Account Type
      </h2>
      <CardList />
      <p className="text-center font-sm text-dark">
        Hello {targetCard.content}!
        <br />
        Please fill out the form below to get started
      </p>
      <form className="row">
        <Input
          inputType="email"
          labelName="Email"
          styleClass="mb-4 w-100"
          placeHolder="abc@gmail.com"
          borderStyle={inputEmailUi.stateStyle}
          errorMessage={inputEmailUi.errorMessage}
          onChange={handleEmailCheck}
          icon={<MailSvg className="icon" />}
        />
        <Input
          inputType="password"
          labelName="Password"
          placeHolder="Password"
          styleClass="mb-4 w-100"
          borderStyle={inputPasswordUi.stateStyle}
          errorMessage={inputPasswordUi.errorMessage}
          icon={<PasswordSvg className="icon" />}
          content={<Link>Forgot?</Link>}
          onChange={handlePasswordCkeck}
        />
        <div className="w-100 d-flex justify-content-between ">
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
