import React from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Play, XCircle } from "react-feather";
import "./GridButtons.css";

type GridButtonProp = {
  clearBoard: () => void;
};

const GridButtons = ({ clearBoard }: GridButtonProp) => {
  const onClearHandler = () => {
    clearBoard();
  };

  return (
    <ButtonToolbar aria-label="Toolbar with Button groups">
      <div className="buttons is-centered pt-5">
        <button className="button mx-2">
          <span className="icon">
            <Play />
          </span>
          <span>Start</span>
        </button>
        <button className="button mx-2" onClick={onClearHandler}>
          <span className="icon">
            <XCircle />
          </span>
          <span>Clear</span>
        </button>
      </div>
    </ButtonToolbar>
  );
};

export default GridButtons;
