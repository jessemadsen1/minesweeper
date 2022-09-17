
import React, { useState } from "react";
import ToggleSwitch from "../Switch/ToggleSwitch";

function Pricing() {
  const [toggleState1, setToggleState1] = useState(false);
  const [toggleState2, setToggleState2] = useState(false);
  const [title, setTitle] = useState("Select the version you want?");

  let free:boolean = false;
  let paid: boolean = false;
 
  const changeToggle = (labelString:string) => {
    if (labelString == "Free") {
      if (paid == false && free == true){
          free = !free;
          setToggleState1(free);
          setTitle("Select version you want?");
      }
      else {
        free = !free;
        setToggleState1(free);
        setToggleState2(false);
        setTitle("This isn't your parents minesweeper, it'ffcs worse.")
      }
    }
    else if (labelString == "Paid") {
        if (paid == true && free == false){
          paid = !paid;
          setToggleState2(paid);
          setTitle("Select the version you want?");
      }
      else {
      paid = !paid;
      setToggleState1(false);
      setToggleState2(paid);
      setTitle("Are you sure? This is basically a guessing game.");
    }
  }
  };

  return (
    <div>
      <div className="text-center" >
        <h2 style={{paddingTop: 100}}>{title}</h2>
      </div>
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
