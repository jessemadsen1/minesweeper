import * as React from 'react';
import { ChangeEvent } from 'react';


type EmailInputProps = {
  onChange: (newValue: string) => void;
};

const EmailInput = ({ onChange }: EmailInputProps) => {

  return (
    <input
      name="email"
      id="email"
      type="email"
      placeholder="Email"
      onChange={(e: ChangeEvent) => (e: React.ChangeEvent<HTMLInputElement>) => {
        return e.target.value;
      }}
      required
    />
  );
};

export default EmailInput
