
import React, { useState, useReducer } from "react";
import ToggleSwitch from "../Switch/ToggleSwitch";
import MessageModal from "../UI/MessageModal";


// const toggleFunction = (state: any, action: any) => {
//   return
// };

function Pricing() {
  type Modal = {
    title: string;
    message: string;
  };
  const [toggleState1, setToggleState1] = useState(false);
  const [toggleState2, setToggleState2] = useState(false);

  // const [allTogglState, dispatchToggle] = useReducer(toggleFunction), {
  //   value: boolean = false
  // };

  const [modal, setModal] = useState<{title: string; message: string, }>({
    title: '',
    message: ''
  });
  const [modalUsed, setmodalUsed] = useState(false);

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
        setTitle("This isn't your parents minesweeper, it's much worse.")
        setmodalUsed(false);
      }
    }
    else if (labelString == "Paid") {
        if (paid == true && free == false){
          paid = !paid;
          setToggleState2(paid);
          setTitle("Select the version you want?");
          setmodalUsed(false);
      }
      else {
      paid = !paid;
      setToggleState1(false);
      setToggleState2(paid);
      if(modalUsed === false){
        setModal({
          title: "Are you Sure",
          message: "This is basically a really boring guessing game.",
  
        });
        setmodalUsed(true);
        return;
      }
      // setTitle("Are you sure? This is basically a really boring guessing game.");
    }
  }

  };
const okayHandler = () =>  {
    if (paid == true && free == false){
          paid = !paid;
          setToggleState2(paid);
          setTitle("Select the version you want?");
    }
    else {
        setModal({
        title: '',
        message: '',
      });
    }

    };

  return (
    <div>
      {modal.title !== "" && (
        <MessageModal
          title={modal.title}
          message={modal.message} 
          onConfirm={okayHandler}
        />
      )}
      <div className="text-center">
        <h2 style={{ paddingTop: 100 }}>{title}</h2>
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
