import React from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Pause, Play, XCircle, Globe } from "react-feather";

const GridButtons: React.FC<{ gridSize: any }> = () => {
  const handleSelect = (evt: any) => {};

  return (
    <ButtonToolbar>
      <div className="buttons is-centered pt-5">
        <button className="button start-game mx-2">
          <span className="icon">
            <Play />
          </span>
          <span>Start</span>
        </button>
        <button className="button mx-2" onClick={() => {}}>
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
