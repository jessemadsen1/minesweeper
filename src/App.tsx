import { FC, useState, useRef, useCallback } from "react";
import { Pause, Play, XCircle, Globe } from "react-feather";
import { setOriginalNode } from "typescript";
import "./App.css";
import useInterval from "./useInterval";

const numRows = 10;
const numCols = 10;


//  rows[0]= [1,0,1,0,1,0,1,0,1,0]

const bombTiles = (): number[][] => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (0)));
  }
  return rows;
};

const clearTiles = (): number[][] => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (0)));
  }
  return rows;
};

const checkIfHit = (): number[][] => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const App: FC = () => {
  const [grid, setGrid] = useState(() => {
  
    return checkIfHit();
  });

  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback((grid: any) => {
    if (!runningRef.current) {
      return;
    }


  }, []);

  return (
    <div className="container has-text-centered py-5">
      <h1 className="title is-uppercase">Mine Sweeper</h1>
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
              key={`${i}-${k}`}
              onClick={() => {
                // Deep clone grid
                let newGrid = JSON.parse(JSON.stringify(grid));
                newGrid[i][k] = grid[i][k] ? 0 : 1;
                checkIfHit(i,k);
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "#F68E5F" : undefined,
                border: "1px solid #595959",
              }}
            ></div>
          ))
        )}
      </div>

      <div className="buttons is-centered pt-5">
        <button
          className="button start-game mx-2"
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
            }
          }}
        >
          <span className="icon">{running ? <Pause /> : <Play />}</span>
          <span>{running ? "Stop" : "Start"}</span>
        </button>

        <button
          className="button mx-2"
          onClick={() => {
            setGrid(clearTiles());
          }}
        >
          <span className="icon">
            <XCircle />
          </span>
          <span>Clear</span>
        </button>
      </div>
    </div>
  );
};

export default App;
