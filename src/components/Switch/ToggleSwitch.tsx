import React, { useState } from "react";

import "./ToggleSwitch.css";
import Card from "../UI/Card";

type ToggleSwitchProps ={
  label: string,
  toggleState: boolean,
  onToggleChange: (argo:string) => void;

}
const ToggleSwitch = ({
  label,
  toggleState,
  onToggleChange,
}: ToggleSwitchProps) => {
  const [toggle, setToggle] = useState(toggleState);
  const toggleChangeHandler = () => {
    setToggle(!toggleState);
    onToggleChange(label);
  };

  return (
    <Card className="outerswitch">
      {label}
      <div className="toggle-switch">
        <input
          onChange={toggleChangeHandler}
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          checked={toggleState}
          //value={this.state.value}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </Card>
  );
};

export default ToggleSwitch;
