import React, { useState, useEffect } from "react";
import Input from "./common/Input";
import Link from "./common/Link";
import { ReactComponent as MailSvg } from "../images/mail.svg";
import { ReactComponent as PasswordSvg } from "../images/password.svg";

const InputGroup = () => {
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
    <>
      <Input
        inputType="email"
        labelName="Email"
        styleClass="mb-4"
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
        styleClass="mb-4"
        borderStyle={inputPasswordUi.stateStyle}
        errorMessage={inputPasswordUi.errorMessage}
        icon={<PasswordSvg className="icon" />}
        content={<Link>Forgot?</Link>}
        onChange={handlePasswordCkeck}
      />
    </>
  );
};

export default InputGroup;
