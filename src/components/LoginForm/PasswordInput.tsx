import * as React from "react";
import { ChangeEvent } from "react";

type PasswordInputProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {

  return (
    <label>
      Your password:
      <input
        type="text"
        value={value}

      />
    </label>
  );
};

export default PasswordInput;
