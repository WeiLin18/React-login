import React from "react";
import InputGroup from "../components/InputGroup";
import CardList from "../components/CardList";
import Link from "../components/common/Link";
import Button from "../components/common/Button";
import "../style/styles.scss";
const LoginSection = () => {
  const handleLogin = () => {
    console.log("login");
  };
  return (
    <section className="container pt-5">
      <h2 className="text-primary h4 text-center">Choose Account Type</h2>
      <CardList />
      <p className="text-center font-sm text-dark">
        Hello doctor!
        <br />
        Please fill out the form below to get started
      </p>
      <form>
        <InputGroup />
        <div className="d-flex justify-content-between align-items-center">
          <p>
            No account?<Link className="ml-2">Signup</Link>
          </p>
          <Button onSubmit={handleLogin}>Login</Button>
        </div>
      </form>
    </section>
  );
};

export default LoginSection;
