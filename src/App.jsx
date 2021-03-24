import React from "react";
import InputGroup from "./components/InputGroup";
import LinkButton from "./components/common/LinkButton";
import Button from "./components/common/Button";
import "./style/styles.scss";
const App = () => {
  const handleLogin = () => {
    console.log("login");
  };
  return (
    <div className="App">
      <section className="container pt-5">
        <h2 className="text-primary h4 text-center">Choose Account Type</h2>
        <p className="text-center font-sm text-dark">
          Hello doctor!
          <br />
          Please fill out the form below to get started
        </p>
        <form>
          <InputGroup />
          <div className="d-flex justify-content-between align-items-center">
            <p>
              No account?<LinkButton className="ml-2">Signup</LinkButton>
            </p>
            <Button onSubmit={handleLogin}>Login</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default App;
