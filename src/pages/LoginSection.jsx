import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputGroup from "../components/common/InputGroup";
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
  padding: 20px 0 80px;
`;

const LoginSection = () => {
  const handleLogin = () => {
    console.log(inputEmailUi.value, inputPasswordUi.value);
    // if(!inputEmailUi.value.trim()==='' && !inputPasswordUi.value.trim()===''){

    // }
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
    return inputContent.trim() === "" || inputContent.trim().length < 6
      ? false
      : true;
  };
  const handleEmailCheck = (inputContent) => {
    if (!handleLengthCheck(inputContent)) {
      setInputEmailUi({
        stateStyle: "error",
        errorMessage: "需超過6碼",
        value: inputContent
      });
      return;
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(inputContent)) {
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
    console.log(inputPasswordUi.value, "長度");
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
    if (!handleLengthCheck(inputContent)) {
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
        // console.log(inputEmailUi.value, inputContent, "重複");
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

  const handleIsWordRepeatCheck = (AInputContent, BInputContent) => {
    let isInclude = false;
    console.log("checkLength");
    for (let i = 0; i + 5 < AInputContent.length; i++) {
      for (let j = 0; j + 5 < BInputContent.length; j++) {
        console.log(
          "slice",
          AInputContent.slice(i, i + 6),
          BInputContent.slice(j, j + 6)
        );
        if (AInputContent.slice(i, i + 6) === BInputContent.slice(j, j + 6)) {
          isInclude = true;
        }
      }
    }
    return isInclude;
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
