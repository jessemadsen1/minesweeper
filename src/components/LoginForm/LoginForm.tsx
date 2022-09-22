// Copied from tutorial
//https://www.newline.co/@bespoyasov/how-to-use-usecallback-hook-with-typescript--f2019594

import React, { useCallback, useState } from "react";
import Form from "react-bootstrap/Form";




const LoginForm = () => {
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();
    alert("Thanks you for giving us a another username and password.");
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Use change handler to update the email value:
  const updateEmail = (newValue: string): void => setEmail(newValue);

  // ...And use handler to update the password:
  const updatePassword = (newValue: string): void => setPassword(newValue);
  const onChange =() =>{
    console.log("got here")
  }

  return (
    <form onSubmit={submitForm} className="col-lg-6 offset-lg-3">
        <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
          required
        />

        <Form.Text className="text-muted">
          We'll share your email with anyone. Don't put a real email here
        </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
          required
        />
        <Form.Text className="text-muted">
          You really trust us, I wouldn't.
        </Form.Text>
      </Form.Group>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm