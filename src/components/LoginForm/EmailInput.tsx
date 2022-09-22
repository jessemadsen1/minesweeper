import * as React from 'react';
import { ChangeEvent } from 'react';


type EmailInputProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const EmailInput = ({ value, onChange }: EmailInputProps) => {

  return (
    <label>
      Your email:
      <input
        type="email"
        value={value}
        onChange={(e: ChangeEvent) =>
          (e: React.ChangeEvent<HTMLInputElement>) => {
             return e.target.value;
          }}
      />
    </label>
  );
};

export default EmailInput
