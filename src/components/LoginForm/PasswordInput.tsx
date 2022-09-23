import * as React from "react";
import { ChangeEvent } from "react";

type PasswordInputProps = {
  onChange: (newValue: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ onChange }) => {

  return (
    <input
      name="password"
      id="password"
      type="password"
      placeholder="Password"
      onChange={(e: ChangeEvent) => (e: React.ChangeEvent<HTMLInputElement>) => {
        return e.target.value;
      }}
      required
    />
  );
};

export default PasswordInput;
