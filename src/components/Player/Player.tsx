import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


    type PlayerProps = {
      id: string;
      name: string;
      score: number;
    };

const Player =({id,name,score}:PlayerProps)=> {

 const getName = (name:string, score:number) => {
   return [name, score].join(" ");
 };

          return (
            <p style={{ paddingTop: "1rem" }}>
              <div className="d-flex justify-content-center ">
                <p>
                  <Card style={{ width: "18rem" }}>
                    <div className="card text-center">
                      <div className="card-header">{id}</div>
                      <div>{getName(name,score)}</div>
                    </div>
                  </Card>
                </p>
              </div>
            </p>
          );
}

export default Player;