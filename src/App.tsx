import { FC, useState, useRef, useCallback } from "react";
import "./App.css";

import GridButtons from "./components/GridButtons";

const numRows = 10;
const numCols = 10;

//  rows[0]= [1,0,1,0,1,0,1,0,1,0]

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

const App: FC = () => {
  const [grid, setGrid] = useState(() => {
    return initTiles();
  });

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
  };

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
              className="div_hover"
              key={`${i}-${k}`}
              onClick={() => {
                // Deep clone grid
                let newGrid = JSON.parse(JSON.stringify(grid));
                newGrid[i][k] = grid[i][k] ? 0 : 1;
                setGrid(newGrid);
                {
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
      </div>
      <div className="is-centered">
        <GridButtons clearBoard={clearTiles} />
      </div>
    </div>
  );
};

export default App;
