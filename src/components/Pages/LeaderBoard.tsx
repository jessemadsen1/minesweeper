import React, { useState } from 'react';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Player from '../Player/Player';

function LeaderBoard() {
    const [hide, setHide] = useState(false);

    const handleClick = () =>
    {
     setHide(!hide);
    } 

    type Player = {
      id: string;
      name: string;
      score: number;
    };
  const arr = [1, 2, 3, 4, 5, 6];
 const getName = (player:Player) =>{
  return [player.name, player.score].join(" ");
}

    let DUMMY_PLAYERS = [
      {
        id: "ID: player1",
        name: "destoryer1999",
        score: 1000,
      },
      { id: "ID: player2 ", name: "Tom", score: 900 },
      {
        id: "ID: player3 ",
        name: "John",
        score: 800,
      },
      {
        id: "ID: player4",
        name: "Mary",
        score: 450,
      },
    ];
    return (
      <>
        <div>
          {DUMMY_PLAYERS.map((p) => {
            if (hide === false) {
              return <Player id={p.id} name={p.name} score={p.score} />;
            }
            return null;
          })}
        </div>

        <span className="d-flex justify-content-center ">
          <Button variant="success" onClick={handleClick}>
            Change State of page
          </Button>
        </span>
      </>
    );
}

export default LeaderBoard;

