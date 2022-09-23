// Copied from tutorial
//https://www.newline.co/@bespoyasov/how-to-use-usecallback-hook-with-typescript--f2019594

import React, { useCallback, useState } from "react";
import Form from "react-bootstrap/Form";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const LoginForm = () => {
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();
    alert("Thanks you for giving us a another username and password.");
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //const updateEmail = (newValue: string): void => setEmail(newValue);
  //const updatePassword = (newValue: string): void => setPassword(newValue);

  const onChange = () => {
    console.log("got here");
  };
  const updateEmail = useCallback(
    (newValue: string): void => setEmail(newValue),
    [setEmail]
  );
    const updatePassword = useCallback(
      (newValue: string): void => setEmail(newValue),
      [setPassword]
    );
  return (
    <form onSubmit={submitForm} className="col-lg-6 offset-lg-3">
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <EmailInput onChange={updateEmail} />
        <Form.Text className="text-muted">
          We'll share your email with anyone. Don't put a real email here.
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
        <PasswordInput onChange={updatePassword} />
        <Form.Text className="text-muted">
          You really trust us, I wouldn't.
        </Form.Text>
      </Form.Group>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
