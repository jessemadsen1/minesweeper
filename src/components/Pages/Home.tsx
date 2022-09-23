import * as React from "react";

import { FC, useState, useRef, useReducer } from "react";
import "./Home.css";

import GridButtons from "../GridButtons";
import Stopwatch from "./Stopwatch";

const numRows = 10;
const numCols = 10;


type State = {
  value: number;
};

const initialCounterState: State = {
  value: 0,
};

enum ActionKind {
  Increase = "INCREASE",
  Decrease = "DECREASE",
  Clear = "CLEAR",
}

type Action = {
  type: ActionKind;
  payload: number;
};

const increaseAction: Action = {
  type: ActionKind.Increase,
  payload: 1,
};

const decreaseAction: Action = {
  type: ActionKind.Decrease,
  payload: 1,
};

const clearAction: Action = {
  type: ActionKind.Clear,
  payload: 0,
};

function counterReducer(state: State, action: Action): State {
  const { type } = action;

  switch (type) {
    case ActionKind.Increase:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case ActionKind.Decrease:
      return {
        ...state,
        value: state.value - action.payload,
      };
    case ActionKind.Clear:
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
}

const initTiles = (): number[][] => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const checkIfHit = (i: number, k: number) => {
  const rows = [];
  const checkRows = [];
  checkRows[0] = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  if (i > 0) return false;
  if (checkRows[i][k] === 1) return true;
  else return false;
};

const Home: FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  const [grid, setGrid] = useState(() => {
    return initTiles();
  });

  const [onStart, setOnStart] = useState(false);
  const [onStop, setOnStop] = useState(false);
  const [divColor, setDivColor] = useState("cyan");

  const bombTiles = (): number[][] => {
    setDivColor("red");
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 1));
    }
    return rows;
  };

  const clearTiles = () => {
    setDivColor("cyan");
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    setGrid(rows);
    onStopHandler();
    dispatch(clearAction);
  };

  const onStartHandler = () => {
    setOnStart(true);
  };
  const onStopHandler = () => {
    setOnStop(true);
    setOnStart(false);
  };

  return (
    <>
      <div className="container has-text-centered py-5">
        <h1 className="title is-uppercase">Mine Sweeper</h1>
        <Stopwatch onStart={onStart} onStop={onStop} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
            width: "fit-content",
            margin: "0 auto",
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                className="div_hover"
                key={`${i}-${k}`}
                onClick={() => {
                  let newGrid = JSON.parse(JSON.stringify(grid));
                  newGrid[i][k] = grid[i][k] ? 0 : 1;
                  setGrid(newGrid);

                  {
                    if (newGrid[i][k] == 1) dispatch(increaseAction);
                    else dispatch(decreaseAction);
                    if (checkIfHit(i, k)) setGrid(bombTiles());
                  }
                }}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][k] ? divColor : undefined,
                  border: "1px solid #595959",
                }}
              ></div>
            ))
          )}
          <div>Count: {state.value}</div>
        </div>
        <div className="is-centered">
          <GridButtons clearBoard={clearTiles} onStart={onStartHandler} />
        </div>
      </div>
    </>
  );
};

export default Home;
