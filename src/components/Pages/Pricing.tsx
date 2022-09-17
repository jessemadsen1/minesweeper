
import React, { useState } from "react";
import ToggleSwitch from "../Switch/ToggleSwitch";

function Pricing() {
  const [toggleState1, setToggleState1] = useState(false);
  const [toggleState2, setToggleState2] = useState(false);


  let free:boolean = false;
  let paid: boolean = false;


  const changeToggle = (labelString:string) => {
    console.log("got here 5");

    if (labelString == "Free") {
      free = !free;
      setToggleState1(free);
      setToggleState2(false);
    }
    else if (labelString == "Paid") {
      paid = !paid;
      setToggleState1(false);
      setToggleState2(paid);
    }
  };

  return (
    <div>
      <h2>What version do want?</h2>
      <ToggleSwitch
        label="Free"
        onToggleChange={changeToggle}
        toggleState={toggleState1}
      />
      <ToggleSwitch
        onToggleChange={changeToggle}
        label="Paid"
        toggleState={toggleState2}
      />
    </div>
  );
  }
export default Pricing;
