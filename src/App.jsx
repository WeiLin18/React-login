import React from "react";
import Input from "./components/common/Input";
import { ReactComponent as MailSvg } from "./images/mail.svg";
import { ReactComponent as PasswordSvg } from "./images/password.svg";

const App = () => {
  return (
    <div className="App">
      <section className="container mt-5">
        <Input
          inputType="email"
          labelName="Email"
          placeHolder="abc@gmail.com"
          errorMessage=""
          icon={<MailSvg className="icon" />}
        />
      </section>
    </div>
  );
};

export default App;
